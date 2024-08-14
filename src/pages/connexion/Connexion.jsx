import { useState } from 'react';
import RemplirComponent from '../../Components/remplir/Remplir';
import logo from '../../assets/dinepay-logo-logo-file/svg/logo-no-background.svg';
import Box from '@mui/material/Box';
import ButtonComponent from '../../Components/button/Button';
import PostHook from '../../hooks/FetchPost';

const ConnexionPg = () => {
    const [identifiant, setIdentifiant] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setIdentifiant(e.target.value);
    };

    const passwordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        try {
            const info = await PostHook(identifiant, password, 'auth', 'login');
            setResponse(info);
            setError(null);
        } catch (error) {
            setError(error.message);
            setResponse(null);
        }
    };

    return (
        <Box className="connexion" display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={5}>
            <img src={logo} width="300" alt="Dinepay Logo" />
            <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
                <RemplirComponent
                    variant="outlined"
                    label="Identifiant"
                    fullWidth
                    required
                    helperText="Entrer votre identifiant"
                    value={identifiant}
                    onChange={handleChange}
                />
                <RemplirComponent
                    variant="outlined"
                    label="Mot de passe"
                    type="password"
                    fullWidth
                    required
                    helperText="Entrer votre mot de passe"
                    value={password}
                    onChange={passwordChange}
                />
                <ButtonComponent label="Connexion" action={handleLogin} />
            </Box>
            {response && <div>Réponse: {JSON.stringify(response)}</div>}
            {error && <div>Erreur: {error}</div>}
        </Box>
    );
};

export default ConnexionPg;

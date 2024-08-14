const PostHook = async (Identifiant, password, entity, endPoint) => {
    const connexioInfo = {
        Identifiant,
        password
    };

    try {
        const reponse = await fetch(`http://localhost:8080/${entity}/${endPoint}`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(connexioInfo),
        });

        if (!reponse.ok) {
            throw new Error('Impossible de se connecter');
        }

        const info = await reponse.json();
        return info;
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        throw error;
    }
};

export default PostHook;

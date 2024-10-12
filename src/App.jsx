import './App.css';
// import SalleComponent from './Components/salle/Salle';
import AccueilPg from './pages/Accueil/Accueil';
//import VerticalComponent from './Components/vertical/VerticalComponent';
// import ConnexionPg from './pages/connexion/Connexion';
import background from './assets/background/keghan-crossland-ZZxmc66SjfM-unsplash.jpg';
//import MenuPg from './pages/menu/menuPg';

function App() {
  return (
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100vw',
        margin: '0',
        padding: '0',
      }}>
        <AccueilPg />
      </div>

  );
}

export default App;




import Logo from '../../assets/dinepay-logo-logo-file/svg/logo-no-background.svg';
import VerticalComponent from '../../Components/vertical/VerticalComponent';

const AccueilPg = () =>{
    return(
        <div>
            <div>
                <img src={Logo} width='500'/>
            </div>
            <div>
                <VerticalComponent/>
            </div>
        </div>
    )
}

export default AccueilPg;
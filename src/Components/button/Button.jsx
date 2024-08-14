import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const ButtonComponent = ({ action, label })=>{

    return(
        <Button variant="container"  onClick={action}> 
        {label}
        </Button>
    )
}

ButtonComponent.propTypes = {
    action: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default ButtonComponent;
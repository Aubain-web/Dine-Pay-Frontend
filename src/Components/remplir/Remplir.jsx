import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';


const RemplirComponent = ({ variant, label,  ...reste }) => {

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '50ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label={label}
                variant={variant}
                 {...reste}
                
            />
        </Box>
    );
};


RemplirComponent.propTypes = {
    variant: PropTypes.string.isRequired,
    label: PropTypes.string,
};

RemplirComponent.defaultProps = {
    label: 'Outlined',
};

export default RemplirComponent;

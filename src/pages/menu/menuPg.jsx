//import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
//import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MenuCategorie from '../../Components/menuCatégorie/MenuCategorie';



/*const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));*/
const MenuPg = () =>{
    return(
        <Box sx={{ width: '100%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <MenuCategorie/>
        </Grid>
        <Grid xs={6}>
          <MenuCategorie/>
        </Grid>
        <Grid xs={6}>
          <MenuCategorie/>
        </Grid>
        <Grid xs={6}>
          <MenuCategorie/>
        </Grid>
      </Grid>
    </Box>
    )
}

export default MenuPg;


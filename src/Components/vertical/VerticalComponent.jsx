import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import { useState } from 'react';
import SalleComponent from '../salle/Salle';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const VerticalComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 

  return (
    <Box sx={{ display: 'flex', height: '100vh', marginLeft: '0px', paddingLeft: '0px' }}>
      <Box sx={{ width: '20%', height: '50%', marginLeft: '0px', paddingLeft: '0px' }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider', height: '100%', marginLeft: '0px', paddingLeft: '0px'}}
        >
          <Tab label="Salle 1" {...a11yProps(0)} />
          <Tab label="Salle 2" {...a11yProps(1)} />
          <Tab label="Salle 3" {...a11yProps(2)} />
          <Tab label="Salle 4" {...a11yProps(3)} />
          <Tab label="Salle 5" {...a11yProps(4)} />
          <Tab label="Salle 6" {...a11yProps(5)} />
          <Tab label="Salle 7" {...a11yProps(6)} />
          <Tab label={<AddCircleOutlineTwoToneIcon />} {...a11yProps(7)} />
        </Tabs>
      </Box>
      <Box sx={{ flexGrow: 1, overflowY: 'auto', marginLeft: '0px', paddingLeft: '0px' }}>
        {Array.from({ length: 7 }).map((_, index) => (
          <TabPanel value={value} index={index} key={index}>
            <SalleComponent salle={`Salle ${index + 1}`} />
          </TabPanel>
        ))}
        <TabPanel value={value} index={7}>
          {AddCircleOutlineTwoToneIcon}
        </TabPanel>
      </Box>

      
    </Box>
  );
};





export default VerticalComponent;

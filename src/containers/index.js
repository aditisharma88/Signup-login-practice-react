import React, {useState} from 'react';
import { Paper, Typography,Tabs,Tab,TabPanel,Box,AppBar } from '@material-ui/core';

import Login from '../components/Login';
import Signup from '../components/Signup';

const SignInOut= ()=>{
    const [value,setValue]= useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const paperFinalStyle={width:'340px',margin:'80px auto' };

      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box >
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      
    return(
        <Paper elevation={20} style={paperFinalStyle}>
        <AppBar position="static">
  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
    <Tab label="Login"  />
    <Tab label="SignUp"  />
    
  </Tabs>
</AppBar>
<TabPanel value={value} index={0}>
  <Login handleChange={handleChange} />
</TabPanel>
<TabPanel value={value} index={1}>
  <Signup />
</TabPanel>

</Paper>
    );
}
export default SignInOut;
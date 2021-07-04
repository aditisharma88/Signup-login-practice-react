import React from 'react';

import { Paper,Avatar,Grid,TextField,Button, Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


const Signup = () => {
    const Paperstyle ={height:'60vh',width:'300px', margin: "0px auto", padding:'20px' };
    const avatrstyle ={ backgroundColor:'#3f51b5'};
    const btnstyle={ margin:'20px 0px'};
    const checkStyle={margin:'10px 0px', fontSize:'20px' };
return(

    <Grid>
    <Paper  style={Paperstyle}>
        <Grid align='center'>
    <Avatar style={avatrstyle}>< AddCircleOutlineIcon/></Avatar>
        <h2>Sign Up</h2>
        
        </Grid>
    <Grid>
    <TextField id="standard-basic" label="Full Name" placeholder="Enter full name" required fullWidth />
    <TextField id="standard-basic" label="Email" placeholder="Enter email"  required  fullWidth/>
    <TextField id="standard-basic" label="Password" placeholder="Enter password" type="password" required  fullWidth/>
    <TextField id="standard-basic" label="Confirm Password" placeholder="Confirm password" type="password" required  fullWidth/>
    <FormControlLabel
            control={
              <Checkbox name="checkedB" color="primary"  fontSize="0.2px" style={checkStyle}
                  /> 
            }
            label="I accept the terms and conditions."
          />
    
    <Button variant="contained" color="primary" style={btnstyle} fullWidth>
      Sign Up
    </Button>
    
    </Grid>
        </Paper>
     </Grid>
);
}

export default Signup;
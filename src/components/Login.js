import React from 'react';
import { Paper,Avatar,Grid,TextField,Button, Typography,Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login = ({handleChange}) => {
    const Paperstyle ={height:'60vh',width:'300px', margin: "0px auto", padding:'20px' };
    const avatrstyle ={ backgroundColor:'#3f51b5'};
    const btnstyle={ margin:'20px 0px'};
    return(
        
            <Grid>
<Paper  style={Paperstyle}>
    <Grid align='center'>
<Avatar style={avatrstyle}><LockOutlinedIcon /></Avatar>
    <h2>Sign In</h2>
    </Grid>
<Grid>
<TextField id="standard-basic" label="Full Name" placeholder="Enter full name" required fullWidth />
<TextField id="standard-basic" label="Password" placeholder="Enter password" type="password" required  fullWidth/>

<FormControlLabel
        control={
          <Checkbox
            
            name="checkedB"
            color="primary"
          />
        }
        label="Remember Me"
      />

<Button variant="contained" color="primary" style={btnstyle} fullWidth>
  Sign in
</Button>
<Typography>
<Link href="#" >
    Forgot Password?
  </Link>
</Typography>
<Typography>Don't have an account?
<Link href="#" onClick={()=>handleChange("event",1)} >
    Sign up
  </Link>
</Typography>
</Grid>
    </Paper>
 </Grid>
        
        
    );
}
export default Login;
import React, { useState } from 'react';
import { Typography, Grid, Box, Stack } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { StyledButton, LoginTextField, BackgroundImg } from './Login.styles';
import background from '../../assets/undraw_book_lover_mkck.svg';
import logo from '../../assets/University-of-San-Carlos-Logo.png';

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };
  const loginUser = () => {
    axios.post('http://localhost:5000/login', user).then((res) => {

      if(res.data.status === 404) {
        alert(res.data.message);
      };
      if(res.data.status === 200) {
        history.push('/homepage');
        alert(res.data.message);
      } else {
        alert(res.data.message);
      }
    });
  };

  return (
    <>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={12} md={6} p={2}>
          <Box
            justifyContent="center"
            alignItems="center"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              direction: 'column',
              margin: 'auto'
            }}
          >
            <form method="POST">
              {console.log('User', user)}
              <Stack
                spacing={2}
                direction="column"
                justifyContent="center"
                sx={{ minHeight: '90vh', maxWidth: '368px' }}
              >
                <img src={logo} alt="usc_logo" width="256px" />
                <Typography variant="h4" color="#3B3B3B" gutterBottom>
                  Welcome Back!
                </Typography>
                <Box pt={1} pb={1}>
                  <Typography variant="h5" color="#3B3B3B" gutterBottom>
                    Login to continue.
                  </Typography>
                </Box>
                <LoginTextField
                  id="filled-basic"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                  label="Email"
                />
                <LoginTextField
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                  id="filled-password-input"
                  type="password"
                  label="Password"
                />
                <Box pb={2}>
                  <Typography
                    component={Link}
                    to="/"
                    color="#57AE5B"
                    variant="subtitle2"
                    sx={{
                      textDecoration: 'none',
                      fontWeight: 'medium',
                      marginBottom: '600px'
                    }}
                    gutterBottom
                  >
                    Forgot password
                  </Typography>
                </Box>
                <StyledButton onClick={loginUser} style={{ color: 'white' }}>
                  Login
                </StyledButton>
                <Box pt={2}>
                  <Typography variant="body2" sx={{ textAlign: 'center' }}>
                    Don't have an account?
                  </Typography>
                </Box>
                <Typography
                  component={Link}
                  to="/signup"
                  color="#57AE5B"
                  variant="subtitle2"
                  sx={{
                    textDecoration: 'none',
                    fontWeight: 'medium',
                    marginBottom: '600px',
                    textAlign: 'center'
                  }}
                  gutterBottom
                >
                  Sign up
                </Typography>
              </Stack>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <BackgroundImg
            src={background}
            alt="book_lover"
            style={{ alignSelf: 'center', width: '90%', overflow: 'hidden' }}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default Login;

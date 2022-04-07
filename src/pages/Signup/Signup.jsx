import React, { useState } from 'react';
import { Typography, Grid, Box, Stack } from '@mui/material';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { StyledButton, SignupTextField, BackgroundImg } from './Signup.styles';
import background from '../../assets/undraw_Bookshelves_re_lxoy.svg';
import logo from '../../assets/University-of-San-Carlos-Logo.png';

export default function Signup() {
  const history = useHistory();

  const [addUsers, setUsers] = useState({
    userType: "user",
    userEmail: "",
    userPassword: "",
    userStatus: "UNVERIFIED",

  });
  
  const createUsers = () => {

      axios.post('http://localhost:5000/users', addUsers).then((response) => {
        const userData = response.data.users
        console.log(userData)
        
      })
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

            <Stack
              spacing={2}
              direction="column"
              justifyContent="center"
              sx={{ minHeight: '90vh', maxWidth: '368px' }}
            >
              <img src={logo} alt="usc_logo" width="256px" />
              <Box pb={3}>
                <Typography variant="h4" color="#3B3B3B" gutterBottom>
                  Get Started
                </Typography>
              </Box>

              <SignupTextField
                id="filled-basic"
                // name="email"
                label="Email"
                onChange={(e) =>
                  setUsers({
                    ...addUsers,
                    userEmail: e.target.value
                  })
                }
              />
              <SignupTextField
                // name="password"
                id="filled-password-input"
                type="password"
                label="Password"
                onChange={(e) =>
                  setUsers({
                    ...addUsers,
                    userPassword: e.target.value
                  })
                }
              />
              <SignupTextField
                // name="confirmPassword"
                id="filled-confirmPassword-input"
                type="password"
                label="Confirm Password"
                onChange={(e) =>
                  setUsers({
                    ...addUsers,
                    userPassword: e.target.value
                  })
                }
              />
              <Box pt={4} pb={2}>
                <StyledButton onClick={createUsers} style={{ color: 'white' }}>
                  Signup
                </StyledButton>
              </Box>
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                Already have an account?
              </Typography>
              <Typography
                component={Link}
                to="/"
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
                Sign in
              </Typography>
            </Stack>

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

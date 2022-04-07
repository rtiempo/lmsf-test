import React, { useState, useEffect } from 'react';
import { TextField,InputLabel, Card, Grid, Box, IconButton, Menu, MenuItem, FormGroup, FormControl, Input, FormControlLabel, Checkbox, Paper, InputBase, Stack, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { InputStyle2, Infix, SuffixP, Suffix, LastName, InitialsTypo, TitleStyle, Title, Initials, InputBaseStyle, InputBaseStyle4, InfixStyle, LastNameP, InputBaseStyle3, InputBaseStyle5 } from './Advanced.styles';


const Advanced = ({ contributors, setContributors, type, id }) => {
  const [title, setTitle] = useState('');
  const [initials, setInitials] = useState('');
  const [infix, setInfix] = useState('');
  const [lastName, setLastName] = useState('');
  const [suffix, setSuffix] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeInitials = (e) => {
    setInitials(e.target.value);
  };
  const handleChangeInfix = (e) => {
    setInfix(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeSuffix = (e) => {
    setSuffix(e.target.value);
  };

  useEffect(() => {
    const index = contributors.findIndex(
      (contributor) => contributor.id === id
    );
    const temp = contributors;
    temp[index] = {
      id: id,
      type: type,
      title: title,
      initials: initials,
      infix: infix,
      lastName: lastName,
      suffix: suffix,
    };
    setContributors(temp);
    console.log(JSON.stringify(contributors));
  }, [
    type,
    title,
    initials,
    infix,
    lastName,
    suffix,
    contributors,
    id,
    setContributors,
  ]);
  console.log(contributors.id)

  return (
    <>
      <FormGroup>
      <Grid p={5} container spacing={2} columns={16}>
          <Grid item xs={16}>
            <Box
              component="form"
              sx={{
                p: '2px 4px', display: 'flex', alignItems: 'center'
              }}
            >
              <InputLabel sx={{ p: '5px', backgroundColor: "#B1B1B1", width: '90px' }} aria-label="menu">
                <Typography>
                  Title
                </Typography>
              </InputLabel>
              <InputBase
              fullWidth
                sx={{
                  flex: 1, background: "#F7F7F7", border: '0.5px solid #B1B1B1',
                  boxSizing: 'border-box', paddingLeft: '5px'
                }}
                onChange={handleChangeTitle}
              />
            </Box>
            <Box
              component="form"
              sx={{
                p: '2px 4px', display: 'flex', alignItems: 'center'
              }}
            >
              <InputLabel sx={{ p: '5px', backgroundColor: "#B1B1B1", width: '90px' }} aria-label="menu">
                <Typography >
                  Initials
                </Typography>
              </InputLabel>
              <InputBase
              fullWidth
                sx={{
                  flex: 1, background: "#F7F7F7", border: '0.5px solid #B1B1B1',
                  boxSizing: 'border-box', paddingLeft: '5px'
                }}
                onChange={handleChangeInitials}
              />
            </Box>
            <Box
              component="form"
              sx={{
                p: '2px 4px', display: 'flex', alignItems: 'center'
              }}
            >
              <InputLabel sx={{ p: '5px', backgroundColor: "#B1B1B1", width: '90px' }} aria-label="menu">
                <Typography>
                  Infix
                </Typography>
              </InputLabel>
              <InputBase
              fullWidth
                sx={{
                  flex: 1, background: "#F7F7F7", border: '0.5px solid #B1B1B1',
                  boxSizing: 'border-box', paddingLeft: '5px'
                }}
                onChange={handleChangeInfix}
              />
            </Box>
            <Box
              component="form"
              sx={{
                p: '2px 4px', display: 'flex', alignItems: 'center'
              }}
            >
              <InputLabel sx={{ p: '5px', backgroundColor: "#B1B1B1", width: '90px' }} aria-label="menu">
                <Typography >
                  Last name
                </Typography>
              </InputLabel>
              <InputBase
              fullWidth
                sx={{
                  flex: 1, background: "#F7F7F7", border: '0.5px solid #B1B1B1',
                  boxSizing: 'border-box', paddingLeft: '5px'
                }}
                onChange={handleChangeLastName}
              />
            </Box>
            <Box
              component="form"
              sx={{
                p: '2px 4px', display: 'flex', alignItems: 'center'
              }}
            >
              <InputLabel sx={{ p: '5px', backgroundColor: "#B1B1B1", width: '90px' }} aria-label="menu">
                <Typography >
                  Suffix
                </Typography>
              </InputLabel>
              <InputBase
              fullWidth
                sx={{
                  flex: 1, background: "#F7F7F7", border: '0.5px solid #B1B1B1',
                  boxSizing: 'border-box', paddingLeft: '5px'
                }}
                onChange={handleChangeSuffix}
              />
            </Box>
          </Grid>
        </Grid>
        {/* <TitleStyle >
          <Title>Title</Title>
          <InputStyle2
            id="filled-basic"
            label="Title"
            variant="filled"
            onChange={handleChangeTitle}
          />
        </TitleStyle>
        <Initials >
          <InitialsTypo>Initials</InitialsTypo>
          <InputBaseStyle
            id="filled-basic"
            label="Initials"
            variant="filled"
            onChange={handleChangeInitials}
          />
        </Initials>
        <InfixStyle >
          <Infix >Infix</Infix>
          <InputBaseStyle3
            id="filled-basic"
            label="Infix"
            variant="filled"
            onChange={handleChangeInfix}
          />
        </InfixStyle>
        <LastNameP >
          <LastName>Last Name</LastName>
          <InputBaseStyle4
            id="filled-basic"
            label="Last Name"
            variant="filled"
            onChange={handleChangeLastName}
          />
        </LastNameP>
        <SuffixP >
          <Suffix>Suffix</Suffix>
          <InputBaseStyle5
            id="filled-basic"
            label="Suffix"
            variant="filled"
            onChange={handleChangeSuffix}
          />
        </SuffixP> */}
      </FormGroup>

    </>
  );
};

export default Advanced;

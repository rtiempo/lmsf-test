import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField, InputLabel,Card, Grid, Box, IconButton, Menu, MenuItem, FormGroup, FormControl, Input, FormControlLabel, Checkbox, Paper, InputBase, Stack, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { OrganizationP, InputBaseStyle, Organization2 } from './Organization.styles';

const Organization = ({ contributors, setContributors, type, id }) => {
  const [organization, setOrganization] = useState('');

  const handleChangeOrganization = (e) => {
    setOrganization(e.target.value);
  };

  useEffect(() => {
    const index = contributors.findIndex(
      (contributor) => contributor.id === id
    );
    const temp = contributors;
    temp[index] = { id: id, type: type, organization: organization };
    setContributors(temp);
    console.log(JSON.stringify(contributors));
  }, [type, organization, contributors, id, setContributors]);

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
              <InputLabel sx={{ p: '5px', backgroundColor: "#B1B1B1", width: '100px' }} aria-label="menu">
                <Typography>
                  Organization
                </Typography>
              </InputLabel>
              <InputBase
                fullWidth
                sx={{
                  flex: 1, background: "#F7F7F7", border: '0.5px solid #B1B1B1',
                  boxSizing: 'border-box', paddingLeft: '5px'
                }}
                onChange={handleChangeOrganization}
              />
            </Box>
          </Grid>
        </Grid>
        {/* <OrganizationP>
                      <Organization2
                      >Organization</Organization2>
                      <InputBaseStyle
                        name="organizationF"
                        id="filled-basic"
                        label="Organization"
                        variant="filled"
                        onChange={handleChangeOrganization}
                      />
                    </OrganizationP> */}
      </FormGroup>
    </>
  );
};

export default Organization;

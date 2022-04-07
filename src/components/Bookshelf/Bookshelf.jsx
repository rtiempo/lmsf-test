import {
  Grid,
  Box,
  InputBase,
  Divider,
  Stack,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Typography
} from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';

import { Styledtext } from './Bookshelf.styles';
import NavigationBar from '../NavigationBar/NavigationBar';
import picture from '../../assets/book1.png';
import picture1 from '../../assets/book2.png';
import picture2 from '../../assets/book3.png';

import bookmark from '../../assets/Vector.png';

const Bookshelf = () => {
  const [dateFromValue, setDateFromValue] = React.useState(null);
  const [dateToValue, setDateToValue] = React.useState(null);
  const [selectValueOfSortedBy, setSelectValueOfSortedBy] =
    React.useState(null);
  const [selectValueOfSourceType, setSelectValueOfSourceType] =
    React.useState(null);
  const SelectHandleChange = (event) => {
    setSelectValueOfSortedBy(event.target.value);
  };
  const SelectValueSourceTypeChange = (event) => {
    setSelectValueOfSourceType(event.target.value);
  };
  const SelectStyles = styled(FormControl)(({ theme }) => ({
    margin: theme.spacing(1),
    minWidth: 160
  }));

  const [page, setPage] = React.useState(1);
  const paginationHandleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <Grid container maxWidth="100%">
        <Box sx={{ flexGrow: 1 }}>
          <Grid item xs={12}>
            <NavigationBar />
          </Grid>
          <Box
            sx={{ marginTop: '-45px' }}
            justifyContent="space-between"
            display="flex"
            alignItemts="center"
          >
            <Styledtext>Saved Books</Styledtext>
          </Box>
          <Box maxWidth="100%" sx={{ paddingLeft: '10%', marginTop: '20px' }}>
            <Divider
              sx={{
                border: '1px solid #B1B1B1',
                transform: 'rotate(-0.2deg)',
                width: '90%'
              }}
            />
          </Box>
          <Grid
            container
            maxWidth="100%"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid
              item
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{ marginTop: '20px', marginLeft: '13px' }}
            >
              {/* <Search /> */}
              <Box
                component="form"
                sx={{
                  display: 'flex',
                  border: '2px solid  #ccffcc',
                  borderRadius: '10px',
                  backgroundColor: '#E3F9E5',
                  width: '265px'
                }}
              >
                <InputBase sx={{ ml: 1, flex: 1 }} />
                <IconButton
                  type="submit"
                  sx={{ p: '10px' }}
                  aria-label="search"
                >
                  <SearchIcon sx={{ color: '#0E5814' }} />
                </IconButton>
              </Box>
              <Box sx={{ minWidth: 120 }}>
                <SelectStyles>
                  <InputLabel id="d emo-simple-select-label">
                    Sorted by
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectValueOfSortedBy}
                    label="Sorted by"
                    onChange={SelectHandleChange}
                  >
                    <MenuItem value="Icon">Icon</MenuItem>
                    <MenuItem value="Size">Size</MenuItem>
                    <MenuItem value="Type">Type</MenuItem>
                    <MenuItem value="Name">Name</MenuItem>
                    <MenuItem value="Beauty">Beauty</MenuItem>
                  </Select>
                </SelectStyles>
              </Box>
              <Box sx={{ minWidth: 120, paddingRight: '10px' }}>
                <SelectStyles>
                  <InputLabel id="demo-simple-select-label">
                    Source type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectValueOfSourceType}
                    label="Sorted by"
                    onChange={SelectValueSourceTypeChange}
                  >
                    <MenuItem value="Sample">Sample</MenuItem>
                    <MenuItem value="Sample">Sample</MenuItem>
                    <MenuItem value="Sample">Sample</MenuItem>
                    <MenuItem value="Sample">Sample</MenuItem>
                    <MenuItem value="Sample">Sample</MenuItem>
                  </Select>
                </SelectStyles>
              </Box>
              <Box
                display="flex"
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ paddingRight: '17px' }}
              >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DatePicker
                      disableFuture
                      label="Date from"
                      openTo="year"
                      views={['year', 'month', 'day']}
                      value={dateFromValue}
                      onChange={(newValue) => {
                        setDateFromValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </Box>
              <Box
                display="flex"
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack spacing={3}>
                    <DatePicker
                      disableFuture
                      label="Date to"
                      openTo="year"
                      views={['year', 'month', 'day']}
                      value={dateToValue}
                      onChange={(newValue) => {
                        setDateToValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            marginLeft: '280px'
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            sx={{
              fontFamily: 'Lato',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '24px',
              /* iHentical to box height, or 171% */

              display: 'flex',
              alignItems: 'center',
              letterSpacing: '0.1px',

              /* Neutrals/Neutral 500 */

              color: '#7E7E7E'
            }}
          >
            3 results
          </Typography>
        </Box>
        <Grid
          container
          maxWidth="100%"
          justifyContent="center"
          sx={{ marginTop: '20px' }}
        >
          <Box
            display="block"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            sx={{ lineHeight: '45px' }}
          >
            <Stack maxWidth="100%">
              <Box display="flex" alignItems="center" justifyContent="center">
                <img width="184px" height="184px" src={picture} alt="Props" />
                <Box
                  display="block"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    paddingBottom: '25px',
                    marginLeft: '20px'
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: ' Oxygen',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      fontSize: '20px',
                      lineHeight: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.15px',
                      color: '#222222'
                    }}
                  >
                    Don't Make Me Think, Revisited: A Common Sense Approach to
                    Web Usability
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Lato',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      fontSize: '16px',
                      lineHeight: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.5px',
                      color: '#7E7E7E'
                    }}
                  >
                    Steve Krug
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Lato',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      fontSize: '16px',
                      lineHeight: '60px',
                      /* identical to box height, or 150% */

                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.5px',

                      /* Primary/Primary 500 */

                      color: '#3F9142'
                    }}
                  >
                    New Riders; United States. December 2013
                  </Typography>
                  <img src={bookmark} alt="Bookmark" />
                </Box>
              </Box>
            </Stack>
            <Stack>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                <img width="184px" height="184px" src={picture1} alt="Props" />
                <Box
                  display="block"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    paddingBottom: '25px',
                    marginLeft: '20px'
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: ' Oxygen',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      fontSize: '20px',
                      lineHeight: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.15px',
                      color: '#222222'
                    }}
                  >
                    The Design of Everyday Things
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Lato',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      fontSize: '16px',
                      lineHeight: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.5px',
                      color: '#7E7E7E'
                    }}
                  >
                    Don Norman
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Lato',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      fontSize: '16px',
                      lineHeight: '60px',
                      /* identical to box height, or 150% */

                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.5px',

                      /* Primary/Primary 500 */

                      color: '#3F9142'
                    }}
                  >
                    Basic Books; United States. November 2013
                  </Typography>
                  <img src={bookmark} alt="Bookmark" />
                </Box>
              </Box>
            </Stack>
            <Stack>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
              >
                <img width="184px" height="184px" src={picture2} alt="Props" />
                <Box
                  display="block"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    paddingBottom: '25px',
                    marginLeft: '20px'
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: ' Oxygen',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      fontSize: '20px',
                      lineHeight: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.15px',
                      color: '#222222'
                    }}
                  >
                    About Face: The Essentials of Interaction Design
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Lato',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      fontSize: '16px',
                      lineHeight: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.5px',
                      color: '#7E7E7E'
                    }}
                  >
                    Alan Cooper, Robert Reiman, David Cronin, and Christopher
                    Noessel
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Lato',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      fontSize: '16px',
                      lineHeight: '60px',
                      /* identical to box height, or 150% */

                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.5px',

                      /* Primary/Primary 500 */

                      color: '#3F9142'
                    }}
                  >
                    Wiley; United States. September 2014
                  </Typography>
                  <img src={bookmark} alt="Bookmark" />
                </Box>
              </Box>
            </Stack>
            <Stack spacing={2} sx={{ marginLeft: '70%' }}>
              <Pagination
                count={5}
                page={page}
                onChange={paginationHandleChange}
              />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Bookshelf;
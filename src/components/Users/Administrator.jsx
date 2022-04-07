import React, { useEffect, useState } from 'react'
import { Grid, Typography, Button, Divider, Box, InputBase, Table, TableBody, TableRow, TableContainer, TableHead, Paper, Snackbar, Alert } from '@mui/material'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SearchIcon from '@mui/icons-material/Search';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { makeStyles } from '@mui/styles'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { StyledTableCell, StyledTableRow } from '../TableStyling/TableStyling.styles'
import EventEmitter from '../../utils/EventEmitter'
import AddAdminModal from '../Modals/AdminModal/AddAdminModal'
import AdminSearchModal from '../Modals/AdminModal/AdminSearchModal'

const useStyles = makeStyles({
  root: {
    '& .super-app-theme--header': {
      backgroundColor: '#0E5814',
      color: 'white'
    },
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '& .published': {
      color: 'green',
      fontWeight: '600',
    },
    '& .inpress': {
      color: 'red',
      fontWeight: '600',
    },
  }
});
export default function Administrators() {
  const [getAddAdmin, setAddAdmin] = useState([]);
  const history = useHistory()
  const classes = useStyles();

  useEffect(() => {

    axios.get('http://localhost:5000/users').then((response) => {
      let adminUser = [];
      const data = response.data.users;
      for(let i = 0; i<data.length; i+= 1) {
        if(data[i].userType === 'admin'){
          adminUser = adminUser.concat(data[i]);
        }
      }
      console.log(adminUser)
      setAddAdmin(adminUser)

    })



  }, [])
  const [searchID, setSearchID] = useState('')
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal } = state;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const searchAdmin = () => {
    if (searchID !== '') {
      axios.get(`http://localhost:5000/users/${searchID}`).then((response) => {
        console.log(response);
        if (response.status === 204) {
          setOpen(true)
        } else {
          console.log(response.data)
          const adminData = response.data.users
          EventEmitter.emit("AdminSearchModal", adminData)
        }
        
      })
    }
  }
  return (
    <>
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} onClose={handleClose} autoHideDuration={4000} key={vertical + horizontal}>
        <Alert severity="info" sx={{ width: '100%' }}>
          There is no data found in the given ID
        </Alert>
      </Snackbar>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={10} display="flex" >
          <ManageAccountsIcon style={{ width: '40px', height: '30px', marginRight: '10px', color: '#0E5814' }} />
          <Typography style={{
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '25px',
            lineHeight: '29px',
            color: '#0E5814'
          }}>
            Manage Admins
          </Typography>
        </Grid>
        <Grid item md={2} >
          <Button onClick={() => history.goBack()}>
            <ChevronLeftIcon style={{ color: '#780A0A' }} />
            <Typography style={{
              fontFamily: 'Raleway',
              fontStyle: 'italic',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '23px',
              color: '#780A0A',

            }}>Users</Typography>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <   Divider style={{ border: '1px solid #B1B1B1' }} />
        </Grid>
        <Grid item xs={2} mt={1}>
          <Typography style={{
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '23px',
            color: '#0E5814',

          }}>
            Admins Section
          </Typography>
        </Grid>
        <Grid item xs ml={5} mt={1}>
          <Typography style={{
            fontFamily: 'Lato',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '24px',
            /* identical to box height */


            color: '#9E9E9E',
          }}>
            2 Records found
          </Typography>
        </Grid>
        <Grid item xs ml={5} mt={1}>
          <AddAdminModal />
          <Button variant="contained" onClick={() => EventEmitter.emit("addAdmin", true)}
            style={{
              backgroundColor: '#0E5814', width: '144px', height: '37px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '25px'
            }}>
            <GroupAddIcon />
          </Button>
        </Grid>
        <Grid item md={0} mt={1}>
          <Box
            component="form"
            sx={{ p: '2px 6px', display: 'flex', alignItems: 'center', width: 250, border: '1px solid #9E9E9E', height: '35px' }}
          >
            <InputBase
              onChange={(e) =>
                setSearchID(e.target.value)
              }
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search ID"
            />
            <AdminSearchModal />
            <SearchIcon color="success" onClick={searchAdmin} style={{ cursor: 'pointer' }} />

          </Box>
        </Grid>
      </Grid>
      <Grid container style={{
        height: 500,
        marginTop: '25px'
      }}
        className={classes.root}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow hover >
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell align="center">Name</StyledTableCell>
                  <StyledTableCell align="center">Email</StyledTableCell>
                  <StyledTableCell align="center">Role</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody hover >
                {getAddAdmin.map((row) => (
                  <StyledTableRow style={{ background: 'white' }} hover>
                    <StyledTableCell component="th" scope="row">{row.schoolId}</StyledTableCell>
                    <StyledTableCell align="center">{`${row.userFirstName} ${row.userLastName}`}</StyledTableCell>
                    <StyledTableCell align="center">{row.userEmail}</StyledTableCell>
                    <StyledTableCell align="center">{row.userRole}</StyledTableCell>
                  </StyledTableRow>
                ))}


              </TableBody>
            </Table>
            {/* <TablePagination
              rowsPerPageOptions={[8, 16, 24]}
              component="div"
              count={getJournalData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
          </TableContainer>
        </Grid>
      </Grid>
    </>
  )
}
import React , {useEffect, useState} from 'react'
import axios from 'axios';
import {Grid,Typography,Button,Divider,Box,InputBase,Table,TableBody,TableRow,TableContainer,TableHead,Paper} from '@mui/material'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { StyledTableCell, StyledTableRow } from '../TableStyling/TableStyling.styles'
import EventEmitter from "../../utils/EventEmitter";
import SearchUser from '../Modals/UserModal/UserModal'

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




export default function Users(){
    const history= useHistory()
    const classes = useStyles()
    const [getUser, setUsers] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5000/users').then((response) => {
      let user = [];
      const data = response.data.users;
      for(let i = 0; i<data.length; i+= 1) {
        if(data[i].userType === 'user'){
          user = user.concat(data[i]);
        }
      }
      setUsers(user)

    })

    }, [])
    return (
    <>
       <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5}}>
            <Grid item xs={10}  display="flex" >
                <ManageAccountsIcon style={{width: '40px', height: '30px',marginRight: '10px', color: '#0E5814'}} />
                <Typography style={{
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '25px',
                    lineHeight: '29px',
                    
                    /* Primary/Primary 800 */
                    
                    color: '#0E5814'
                }}>
                    Manage Users
                    </Typography>
            </Grid>
            <Grid item xs={2}ml={-3}>
                <Button onClick={()=>history.push('/superadmin/user/administrators')}>
                <Typography style={{
                    fontFamily: 'Raleway',
                    fontStyle: 'italic',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '23px',               
                    color: '#780A0A',
                    
                }}>Administrator</Typography>
                <ChevronRightIcon style={{color: '#780A0A'}}/>
                </Button>
            </Grid>
            <Grid item xs={12}>
            <   Divider style={{border: '1px solid #B1B1B1'}}/>
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
                    Users Section
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
                    
                    
                    color:'#9E9E9E',
                }}>
                    2 Records found
                    </Typography>
            </Grid>
            <Grid item md={0} mt={1}>
                <Box
                    component="form"
                    sx={{ p: '2px 6px', display: 'flex', alignItems: 'center', width: 250,border: '1px solid #9E9E9E',height: '35px' }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search ID"
                    />
                    <SearchUser />
                    <SearchIcon color="success" style={{cursor: 'pointer'}} onClick={()=>EventEmitter.emit("searchUser",true)}/>
           
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
                  <StyledTableCell align="center">School</StyledTableCell>
                  <StyledTableCell align="center">Department</StyledTableCell>
                  <StyledTableCell align="center">Course</StyledTableCell>
                  <StyledTableCell align="center">Year</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody hover >
             {
                getUser.map((users)=>(
                  <StyledTableRow style={{ background: 'white' }} hover>
                    <StyledTableCell component="th" scope="row">{users._id}</StyledTableCell>
                    <StyledTableCell align="center">{`${users.userFirstName} ${users.userLastName}`}</StyledTableCell>
                    <StyledTableCell align="center">{users.userDepartment}</StyledTableCell>
                    <StyledTableCell align="center">{users.userDepartment}</StyledTableCell>
                    <StyledTableCell align="center">{users.userCourse}</StyledTableCell>
                    <StyledTableCell align="center">{users.userYear}</StyledTableCell>
                    <StyledTableCell align="center" style={{color:users.userStatus === 'UNVERIFIED' ? 'red' : 'green' }}>{users.userStatus}</StyledTableCell>
                  </StyledTableRow>
                ))
             }
                  
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
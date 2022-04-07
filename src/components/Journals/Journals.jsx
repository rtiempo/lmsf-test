import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button, Divider, Box, InputBase, Table, TableBody, TableRow, TableContainer, TableHead, Paper, Snackbar, Alert } from '@mui/material'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { makeStyles } from '@mui/styles'
import booksLogo from '../../assets/Books.png'
import { StyledTableCell, StyledTableRow } from '../TableStyling/TableStyling.styles'

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
export default function Journals() {

  const [getJournalData, setJournalData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/journals').then((response) => {
      console.log(response.data.journals)
      setJournalData(response.data.journals)
    })
  }, [])

  const history = useHistory()
  const classes = useStyles()
  const [searchID, setSearchID] = useState('');
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

  const handleSearchID = () => {
    console.log(searchID);
    if (searchID !== '') {
      axios.get(`http://localhost:5000/journals/${searchID}`).then((response) => {
      
        console.log(response);
        if (response.status === 204) {
          setOpen(true)
        } else {
          console.log(response.data)
          const addData = response.data.journalData[0]
          const Contributors = response.data.journalData[1].contributors;
          
          history.push('/superadmin/journal/update-journals', {addData,Contributors})

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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={10} display="flex" >
          <img src={booksLogo} alt="books" style={{ marginRight: '15px', height: '30px' }} />
          <Typography style={{
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '25px',
            lineHeight: '29px',

            /* Primary/Primary 800 */

            color: '#0E5814'
          }}>
            Manage Journal Articles
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <   Divider style={{ border: '1px solid #B1B1B1' }} />
        </Grid>
        <Grid item xs={2}><Typography style={{
          fontFamily: 'Raleway',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '23px',
          color: '#0E5814',

        }}>Articles Section</Typography></Grid>
        <Grid item xs={5}><Typography style={{
          fontFamily: 'Lato',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '24px',
          /* identical to box height */


          color: '#9E9E9E',
        }}>2 records found</Typography></Grid>
        <Grid item xs={2}><Button variant="contained" onClick={() => history.push('/superadmin/journal/add-journals')}
          style={{
            backgroundColor: '#0E5814', width: '144px', height: '37px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '25px'
          }}>
          <GroupAddIcon />
        </Button></Grid>
        <Grid item xs={2}>
          <Box
            component="form"
            sx={{ p: '2px 6px', display: 'flex', alignItems: 'center', width: 250, border: '1px solid #9E9E9E', height: '35px' }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search ID"
              onChange={(e) =>
                setSearchID(e.target.value)
              }
            />
            <SearchIcon color="success" style={{ cursor: 'pointer' }} onClick={handleSearchID} />

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
                  <StyledTableCell align="center">Article Title</StyledTableCell>
                  <StyledTableCell align="center">Journal Title</StyledTableCell>
                  <StyledTableCell align="center">Volume</StyledTableCell>
                  <StyledTableCell align="center">Issue</StyledTableCell>
                  <StyledTableCell align="center">Year</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody hover >
                {getJournalData.map((row) => (

                  // eslint-disable-next-line no-underscore-dangle
                  <StyledTableRow style={{ background: 'white' }} hover >

                    <StyledTableCell component="th" scope="row">{row._id}</StyledTableCell>
                    <StyledTableCell align="center">{row.articleTitle}</StyledTableCell>
                    <StyledTableCell align="center">{row.journalTitle}</StyledTableCell>
                    <StyledTableCell align="center">{row.volume}</StyledTableCell>
                    <StyledTableCell align="center">{row.issue}</StyledTableCell>
                    <StyledTableCell align="center">{row.publicationDate}</StyledTableCell>
                    <StyledTableCell align="center" style={{ color: row.publicationStatus === "PUBLISHED" ? 'green' : 'red' }}>{row.publicationStatus}</StyledTableCell>
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
  );
}
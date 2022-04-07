import React, { useEffect, useState } from 'react'
import { Grid, Typography, Button, Divider, Box, InputBase, Table, TableBody, TableRow, TableContainer, TableHead, Paper, Snackbar, Alert } from '@mui/material'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import axios from 'axios'
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
export default function Books() {
  const [getBooks, setBooks] = useState([]);
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/book').then((response) => {
      console.log(response.data.books)
      setBooks(response.data.books)
      // setContributors(response.data.bookData[1]);

    });

  }, [])
  const history = useHistory()
  const classes = useStyles()
  const [searchID, setSearchID] = useState('');
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = useState(0);
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
    if (searchID !== '') {
      axios.get(`http://localhost:5000/book/${searchID}`).then((response) => {

        console.log(response);
        if (response.status === 204) {
          setOpen(true)
        } else {
          console.log(response.data);
          const addData = response.data.bookData[0];
          const Contributors = response.data.bookData[1].contributors;
          history.push('/superadmin/book/update-books', { addData, Contributors })
          
        }
      })


    }
  }

  const getContributors = (id) => {
    console.log(id);
    console.log(getBooks);
    let firstContributor;
    getBooks.map((book) => {
      const contributorList = book.allBooks[0].contributors;
      const contributorId = book.allBooks[0]._id;
      console.log(contributorList);
      console.log(contributorList[0]);
      // if(contributorId === id){
      //   let counter = 0;
      //     for(let i = 0; i>= contributorList.length ; i-=1 ){
      //       if(contributorList[i].type === 'author') {
      //         counter+=1;
      //         if(counter>1) {
      //           firstContributor = `${contributorList[i].initials} ${contributorList[i].lastName}  et al`
      //         }
      //       }
      //     }
      // }


      // if(contributorId === id){
      //   let counter = 0;
      //     for(let i = 0; i>= contributorList.length ; i-=1 ){
      //       if(contributorList[i].type === 'author') {
      //         counter+=1;
      //         if(counter>1) {
      //           firstContributor = `${contributorList[i].initials} ${contributorList[i].lastName}  et al`
      //         }
      //       }
      //     }
      // }
      
      console.log(firstContributor);

      return id;
    })

   
    // let firstAuthor;
    // // let counter = 0;
    // contributors.map((contributor)=>{
    //   if(contributor._id === id) {
    //     const numberOfContributors = contributor.contributors;
    //     for(let index = numberOfContributors.length; index>=0; index -=1){
    //       // if(numberOfContributors[index].type === 'author'){
    //       //   counter +=1;
    //       //   if(counter>1) {
    //       //     // firstAuthor = `${contributor[index].Initials}   ${contributor[index].lastName}  etc`;
    //       //     console.log('helloooooo?');
    //       //     firstAuthor = contributor[index].initials;
    //       //   }
    //       // }
    //     } 
    //   }
      
    //   return firstAuthor;
    // })
    // console.log(firstAuthor);
   
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
            Manage Books
          </Typography>
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
            Books Section
          </Typography>
        </Grid>
        <Grid item xs={4} ml={5} mt={1}>
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
        <Grid item xs={2} ml={5} mt={1}>
          <Button variant="contained" onClick={() => history.push('/superadmin/book/addbooks')}
            style={{
              backgroundColor: '#0E5814', width: '144px', height: '37px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: '25px'
            }}>
            <GroupAddIcon />
          </Button>
        </Grid>
        <Grid item xs={2} mt={1}>
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
                  <StyledTableCell align="center">Title</StyledTableCell>
                  <StyledTableCell align="center">Authors</StyledTableCell>
                  <StyledTableCell align="center">Edition</StyledTableCell>
                  <StyledTableCell align="center">Year</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody hover >
                {getBooks.map((row) => (
                  <StyledTableRow style={{ background: 'white' }} hover>
                    <StyledTableCell component="th" scope="row">{row._id}</StyledTableCell>
                    <StyledTableCell align="center">{row.bookTitle}</StyledTableCell>
                    <StyledTableCell align="center">
                      {
                        getContributors(row.contributorId)
                      }
      
                      </StyledTableCell>
                    <StyledTableCell align="center">{row.bookEdition}</StyledTableCell>
                    <StyledTableCell align="center">{row.bookPublisherDate}</StyledTableCell>
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
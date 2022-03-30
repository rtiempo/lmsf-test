import React, { useState } from 'react'
import { Button, Grid, Typography, Divider, Box, Input, Stack } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import axios from 'axios'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import booksLogo from '../../assets/Books.png'
import InputGroup from '../InputGroup/InputGroup'


export default function AddBooks() {
    const [contributors, setContributors] = useState([]);
    const handleAddContributor = () => {
        setContributors([...contributors, { id: uuid() }]);
    };
    const history = useHistory()

    const [addBooks, setBooks] = useState({

        bookTitle: "",
        bookEdition: "",
        bookVolume: "",
        bookPublisher: "",
        bookPublisherDate: "",
        bookFile: "",

    });
    const createBooks = () => {
        const Contributors = contributors;
        axios.post('http://localhost:5000/book', { addBooks, Contributors }).then((res) => {
            console.log(res);
            alert("Data has been inserted")
            const addData = res.data.book
            history.push('/superadmin/book/update-books', {addData,Contributors})
        })
    }
    return (
        <>
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
                <Grid item xs={2} ml={-3}>
                    <Button onClick={() => history.goBack()}>
                        <ChevronLeftIcon style={{ color: '#780A0A' }} />
                        <Typography style={{
                            fontFamily: 'Raleway',
                            fontStyle: 'italic',
                            fontWeight: 600,
                            fontSize: '14px',
                            lineHeight: '23px',
                            color: '#780A0A',

                        }}>Book Section</Typography>
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <   Divider style={{ border: '1px solid #B1B1B1' }} />
                </Grid>
                <Grid item xs={12} mt={1}>
                    <Typography style={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '20px',
                        lineHeight: '23px',
                        color: '#0E5814',

                    }}>
                        Add New Books
                    </Typography>
                </Grid>
            </Grid>
            <Box
                sx={{
                    p: 5,
                    margin: 'auto',
                    width: '100%',
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Grid container>
                    <Grid item>
                        <Typography style={{
                            fontFamily: 'Raleway',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '40px',
                            lineHeight: '47px',
                            color: '#0E5814',

                        }}>
                            Details
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mt={1}>
                        <Divider style={{ border: '1px solid #B1B1B1' }} />
                    </Grid>
                    <Grid item p={2}>
                        <Typography style={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#0E5814',
                        }}>
                            Title
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mt={-2} p={2}>
                        <Input placeholder="Name of book" fullWidth onChange={(e) =>
                            setBooks({
                                ...addBooks,
                                bookTitle: e.target.value
                            })
                        } />
                    </Grid>
                    <Grid item xs={12} mt={-2} p={2}>
                        <Typography style={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#0E5814',
                        }}>
                            Contributors
                        </Typography>
                    </Grid>
                    <Grid item xs={12} p={2}>
                        {contributors.map((contributor) => (
                            <Box key={contributor.id} sx={{
                                width: '1000px'
                            }}>
                                <InputGroup
                                    contributors={contributors}
                                    setContributors={setContributors}
                                    id={contributor.id}
                                />
                            </Box>
                        ))}

                    </Grid>
                    <Grid item xs={12} p={2}>
                        <Stack>
                            <Button variant="contained" color="success" onClick={handleAddContributor}> Add Contributor</Button>
                        </Stack>
                    </Grid>
                </Grid>
                <Box sx={{ flexGrow: 1 }} p={2}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={8}>
                            <Typography style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '22px',
                                color: '#0E5814',
                            }}>Edition
                            </Typography>
                            <Input placeholder="Edition" style={{ width: '100%', marginTop: '10px' }} onChange={(e) =>
                                setBooks({
                                    ...addBooks,
                                    bookEdition: e.target.value
                                })
                            } />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '22px',
                                color: '#0E5814',
                            }}>Volume
                            </Typography>
                            <Input placeholder="Edition" style={{ width: '100%', marginTop: '10px' }} onChange={(e) =>
                                setBooks({
                                    ...addBooks,
                                    bookVolume: e.target.value
                                })
                            } />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '22px',
                                color: '#0E5814',
                            }}>Publisher
                            </Typography>
                            <Input placeholder="Edition" style={{ width: '100%', marginTop: '10px' }} onChange={(e) =>
                                setBooks({
                                    ...addBooks,
                                    bookPublisher: e.target.value
                                })
                            } />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '22px',
                                color: '#0E5814',
                            }}>Publication Date
                            </Typography>
                            <Input placeholder="Edition" style={{ width: '100%', marginTop: '10px' }} onChange={(e) =>
                                setBooks({
                                    ...addBooks,
                                    bookPublisherDate: e.target.value
                                })
                            } />
                        </Grid>
                        <Grid item xs={6} mt={3} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <Stack>
                                <Button onClick={createBooks} variant="contained" color="success">Upload</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}
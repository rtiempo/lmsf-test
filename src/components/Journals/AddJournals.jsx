import React, { useState, useEffect } from 'react'
import { Button, Grid, Typography, Divider, Box, Input, Stack, FormControl, Select, TextField, MenuItem, IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import Compress from 'compress.js';
import Chip from '@mui/material/Chip';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import booksLogo from '../../assets/Books.png'
import InputGroup from '../InputGroup/InputGroup'
import EventEmitter from "../../utils/EventEmitter";
import AddSubCategoryModal from '../Modals/AddSubCategoryModal/AddSubCategoryModal'
import AddCategoryModal from '../Modals/AddCategoryModal/AddCategoryModal'

export default function AddJournals() {
    const compress = new Compress();
    const [categoryLists, setCategoryLists] = useState([]);
    const [subcategoryLists, setsubCategoryLists] = useState([]);
    const [contributors, setContributors] = useState([]);
    const handleAddContributor = () => {
        setContributors([...contributors, { id: uuid() }]);
    };

    const history = useHistory()
    const [status, setStatus] = React.useState('');
    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    const [addJournals, setAddJournals] = useState({

        articleTitle: "",
        journalTitle: "",
        fromPage: "",
        toPage: "",
        volume: "",
        issue: "",
        publicationStatus: "",
        placeOfPublication: "",
        publicationDate: "",
        file: "",

    });
    async function resizeImageFn(file) {

        const resizedImage = await compress.compress([file], {
            size: 2, // the max size in MB, defaults to 2MB
            quality: 1, // the quality of the image, max is 1,
            maxWidth: 300, // the max width of the output image, defaults to 1920px
            maxHeight: 300, // the max height of the output image, defaults to 1920px
            resize: true // defaults to true, set false if you do not want to resize the image width and height
        })
        const img = resizedImage[0];
        const base64str = img.data
        const imgExt = img.ext
        const resizedFiile = Compress.convertBase64ToFile(base64str, imgExt)
        return resizedFiile;
    }
    const [image, setImage] = useState([]);

    const fileSelectHandler = (e) => {
        const param = e.target.files[0];
        setAddJournals({
            ...addJournals,
            file: param.name
        });

        resizeImageFn(param).then((data) => {
            setImage(data)
        })

    }
    useEffect(() => {
        const getCategories = (categories) => {
            console.log(categories)
            setsubCategoryLists(categories)
            console.log(subcategoryLists)
        }
        const categoryListener = EventEmitter.addListener("categories", getCategories)

        return () => {
            categoryListener.remove()
        }
    })
    const createJournals = () => {

        const file = new File([image], addJournals.file);
        const data = new FormData();
        data.append('image', file);
        const Contributors = contributors;
        axios.post('http://localhost:5000/uploadImage/superadmin/journals', data).then(
            res => console.log(res.data),
            err => console.log(err.message)
        )

        axios.post('http://localhost:5000/journals', { addJournals, Contributors, subcategoryLists }).then((res) => {
            console.log(res);
            alert("Data has been inserted")
            const addData = res.data.journals
            history.push('/superadmin/journals', { addData, Contributors, subcategoryLists })
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
                        Manage Journal Articles
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

                        }}>Articles Section</Typography>
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
                        Add New Article
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
                            Article Title
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mt={-2} p={2}>
                        <Input placeholder="Name of book"
                            onChange={(e) =>
                                setAddJournals({
                                    ...addJournals,
                                    articleTitle: e.target.value
                                })
                            } fullWidth />
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
                            Journal Title
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mt={-2} p={2}>
                        <Input placeholder="Name of book"
                            onChange={(e) =>
                                setAddJournals({
                                    ...addJournals,
                                    journalTitle: e.target.value
                                })
                            } fullWidth />
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
                        <Grid item xs={4}>
                            <Typography style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '22px',
                                color: '#0E5814',
                            }}>From Page</Typography>
                            <Input placeholder="Number"
                                onChange={(e) =>
                                    setAddJournals({
                                        ...addJournals,
                                        fromPage: e.target.value
                                    })
                                } fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                            <Typography style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '22px',
                                color: '#0E5814',
                            }}>To Page</Typography>
                            <Input placeholder="Number"
                                onChange={(e) =>
                                    setAddJournals({
                                        ...addJournals,
                                        toPage: e.target.value
                                    })
                                }
                                fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                            <Typography style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '22px',
                                color: '#0E5814',
                            }}>Volume</Typography>
                            <Input placeholder="Number"
                                onChange={(e) =>
                                    setAddJournals({
                                        ...addJournals,
                                        volume: e.target.value
                                    })
                                }
                                fullWidth />
                        </Grid>
                        <Grid item xs={4} >
                            <Typography style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '22px',
                                color: '#0E5814',
                            }}>Issue</Typography>
                            <Input placeholder="Number"
                                onChange={(e) =>
                                    setAddJournals({
                                        ...addJournals,
                                        issue: e.target.value
                                    })
                                }
                                fullWidth />
                        </Grid>
                        <Grid item xs={5} mt={2}>
                            <Typography style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '22px',
                                color: '#0E5814',
                            }}>Publication Status</Typography>
                            <FormControl variant="standard" fullWidth>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"

                                    onChange={(e) =>
                                        setAddJournals({
                                            ...addJournals,
                                            publicationStatus: e.target.value
                                        })
                                    }
                                    sx={{ color: addJournals.publicationStatus === "PUBLISHED" ? 'green' : 'red' }}
                                >
                                    <MenuItem value='PUBLISHED'>PUBLISHED</MenuItem>
                                    <MenuItem value='IN-PRESS'>IN-PRESS</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={5} mt={2}>
                            <Typography style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '22px',
                                color: '#0E5814',
                            }}>Place of Publication</Typography>
                            <Input placeholder="Name of City"
                                onChange={(e) =>
                                    setAddJournals({
                                        ...addJournals,
                                        placeOfPublication: e.target.value
                                    })
                                } fullWidth />

                        </Grid>
                        <Grid item xs={6} mt={2}>
                            <Typography style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '22px',
                                color: '#0E5814',
                            }}>Publication Date</Typography>
                            <Input placeholder="YYYY"
                                onChange={(e) =>
                                    setAddJournals({
                                        ...addJournals,
                                        publicationDate: e.target.value
                                    })
                                } fullWidth />
                        </Grid>
                        <Grid item xs={16}>
                            <Grid container spacing={3} columns={16}>
                                <Grid item xs={4}>
                                    <Typography style={{ fontFamily: 'Lato', fontStyle: 'normal', color: '#0E5814', fontWeight: 500, fontSize: "20px", marginBottom: '15px' }}>
                                        Main Subject
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography style={{ fontFamily: 'Lato', fontStyle: 'normal', color: '#0E5814', fontWeight: 500, fontSize: "20px", marginBottom: '15px' }}>
                                        Sub-categories
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item xs={16}>
                            <Grid container spacing={3} columns={16}>
                                <Grid item xs={4}>
                                    <Autocomplete
                                        id="size-small-filled"
                                        size="small"
                                        options={categoryLists}
                                        fullWidth
                                        style={{
                                            borderRadius: '4px 4px 4px 4px',
                                            backgroundColor: '#9E9E9E'
                                        }}
                                        defaultValue="None"
                                        renderTags={(value, getTagProps) =>
                                            value.map((option, index) => (
                                                <Chip
                                                    size="small"
                                                    {...getTagProps({ index })}
                                                />
                                            ))
                                        }
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                InputProps={{ ...params.InputProps, disableUnderline: true }}
                                                variant="filled"
                                            />
                                        )}
                                    />
                                    <AddCategoryModal categoryLists={categoryLists} setCategoryLists={setCategoryLists} />
                                    <IconButton style={{ cursor: 'pointer', float: 'right' }} >
                                        <AddCircleIcon onClick={() => EventEmitter.emit("addCategory", true)} variant="contained" color="success" style={{ width: '30px', height: '30px' }} />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={3} columns={16}>
                                        <Grid item xs={4}>
                                            <Autocomplete
                                                id="size-small-filled"
                                                size="small"
                                                options={subcategoryLists}
                                                style={{
                                                    borderRadius: '4px 4px 4px 4px',
                                                    backgroundColor: '#9E9E9E'
                                                }}
                                                defaultValue="None"
                                                renderTags={(value, getTagProps) =>
                                                    value.map((option, index) => (
                                                        <Chip
                                                            size="small"
                                                            {...getTagProps({ index })}
                                                        />
                                                    ))
                                                }
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        InputProps={{ ...params.InputProps, disableUnderline: true }}
                                                        variant="filled"
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Autocomplete
                                                id="size-small-filled"
                                                size="small"
                                                options={subcategoryLists}
                                                style={{
                                                    borderRadius: '4px 4px 4px 4px',
                                                    backgroundColor: '#9E9E9E'
                                                }}
                                                defaultValue="None"
                                                renderTags={(value, getTagProps) =>
                                                    value.map((option, index) => (
                                                        <Chip
                                                            size="small"
                                                            {...getTagProps({ index })}
                                                        />
                                                    ))
                                                }
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        InputProps={{ ...params.InputProps, disableUnderline: true }}
                                                        variant="filled"
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Autocomplete
                                                id="size-small-filled"
                                                size="small"
                                                options={subcategoryLists}
                                                style={{
                                                    borderRadius: '4px 4px 4px 4px',
                                                    backgroundColor: '#9E9E9E'
                                                }}
                                                defaultValue="None"
                                                renderTags={(value, getTagProps) =>
                                                    value.map((option, index) => (
                                                        <Chip
                                                            size="small"
                                                            {...getTagProps({ index })}
                                                        />
                                                    ))
                                                }
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        InputProps={{ ...params.InputProps, disableUnderline: true }}
                                                        variant="filled"
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Autocomplete
                                                id="size-small-filled"
                                                size="small"
                                                options={subcategoryLists}
                                                style={{
                                                    borderRadius: '4px 4px 4px 4px',
                                                    backgroundColor: '#9E9E9E'
                                                }}
                                                defaultValue="None"
                                                renderTags={(value, getTagProps) =>
                                                    value.map((option, index) => (
                                                        <Chip
                                                            size="small"
                                                            {...getTagProps({ index })}
                                                        />
                                                    ))
                                                }
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        InputProps={{ ...params.InputProps, disableUnderline: true }}
                                                        variant="filled"
                                                    />
                                                )}
                                            />
                                            <AddSubCategoryModal subcategoryLists={subcategoryLists} setsubCategoryLists={setsubCategoryLists} />
                                            <IconButton style={{ cursor: 'pointer', float: 'right' }}>
                                                <AddCircleIcon onClick={() => EventEmitter.emit("addSubCategory", true)} variant="contained" color="success" style={{ width: '30px', height: '30px' }} />
                                            </IconButton>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={16} mt={2}>
                            <Typography style={{
                                fontFamily: 'Lato',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '18px',
                                lineHeight: '22px',
                                color: '#0E5814',
                            }}>Add File</Typography>
                            <Input type="file" onChange={fileSelectHandler} fullWidth />
                        </Grid>
                        <Grid item xs={6} mt={3} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <Stack>
                                <Button onClick={createJournals} variant="contained" color="success">Upload</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}
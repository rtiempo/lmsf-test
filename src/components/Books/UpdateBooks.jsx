import React, { useState, useEffect } from 'react'
import { Button, Grid, Typography, Divider, Box, Input, InputBase, Avatar, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import axios from 'axios'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LockIcon from '@mui/icons-material/Lock';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Compress from 'compress.js';
import moment from 'moment'
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import booksLogo from '../../assets/Books.png'
import AuthorModal from '../Modals/ContributorModal/AuthorContributorModal'
import OrganizationModal from '../Modals/ContributorModal/OrganizationContributorModal';
import AdvanceModal from '../Modals/ContributorModal/AdvanceContributorModal';
import AddContributorModal from '../Modals/AddContributorModal/AddContributorModal'
import AddChapterModal from '../Modals/AddChapterModal/AddChapterModal'
import AddCategoryModal from '../Modals/AddCategoryModal/AddCategoryModal'
import EventEmitter from "../../utils/EventEmitter";


export default function UpdateBooks(...props) {
    console.log(props)
    const compress = new Compress();
    const [contributors, setContributors] = useState([]);
    const [oldContributors, setOldContributor] = useState([]);
    const [chapterData, setChapterData] = useState([]);
    const [image, setImage] = useState([]);
    const listOfChapters = [];

    const handleAddContributor = () => {
        setContributors([...contributors, { id: uuid() }]);
    };

    const history = useHistory()

    // trigger author's modal
    const openModal = () => {
        EventEmitter.emit('open');
    }
    const [bookData, setBookData] = useState({
        bookTitle: "",
        bookEdition: "",
        bookVolume: "",
        bookPublisher: "",
        bookPublisherDate: "",
        bookFile: "",
        chapterId: "",
        createdAt: "",
        updatedAt: ""
    })

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

    const fileSelectHandler = (e) => {
        const param = e.target.files[0];
        setChapterData({
            ...chapterData,
            file: param.name
        });

        resizeImageFn(param).then((data) => {
            setImage(data)
        })

    }

    const labelCat = {
        color: '#444444', fontFamily: 'Lato',
        // marginLeft: '%',
        fontWeight: '400 Regular',
        fontSize: '15px',
        lineHeight: '18px',

    };
    const elementCat = <p style={labelCat}>Select category</p>

    const [categoryLists, setCategoryLists] = useState([]);
    const receiveOptions = (data) => {
    }
    // eslint-disable-next-line no-underscore-dangle
    const _filterOptions = createFilterOptions();

    const filterOptions = React.useCallback((options, state) => {
        const results = _filterOptions(options, state);
        return results;
    }, []);


    useEffect(() => {

        if (bookData) {
            setBookData(props[0].location.state.addData)
            setOldContributor(props[0].location.state.Contributors);
            setChapterData(listOfChapters);


        }

        const optionsHandler = EventEmitter.addListener("optionsData", receiveOptions)


        const addContributorData = (contributor) => {

            let newcontributorsData = props[0].location.state.Contributors;


            for (let i = 0; i < contributor.length; i += 1) {
                newcontributorsData = newcontributorsData.concat(contributor[i]);
            }

            console.log(newcontributorsData);
            setOldContributor(newcontributorsData);
            setContributors(newcontributorsData);

        }

        const addContributorListener = EventEmitter.addListener("addcontributors", addContributorData);

        return () => {
            addContributorListener.remove()
            optionsHandler.remove();
        }

    }, []);

    useEffect(() => {

        // update contributors 

        const catchContributor = (contributor) => {

            const previousContributor = oldContributors;

            let listOfContributors = [];

            for (let i = 0; i < previousContributor.length; i += 1) {

                if (previousContributor[i].id === contributor.id) {

                    listOfContributors = listOfContributors.concat(contributor);

                } else {

                    listOfContributors = listOfContributors.concat(previousContributor[i]);
                }
            }

            setOldContributor(listOfContributors);
            setContributors(listOfContributors);

        }
        const contributorListener = EventEmitter.addListener("contributor", catchContributor)
        // end

        // remove contributor
        const removeContributor = (contributor) => {

            const previousContributor = oldContributors;
            let newcontributorsData = [];

            for (let i = 0; i < previousContributor.length; i += 1) {

                if (previousContributor[i].id !== contributor.id) {
                    newcontributorsData = newcontributorsData.concat(previousContributor[i]);
                }
            }

            setOldContributor(newcontributorsData);
            setContributors(newcontributorsData);


        }
        const removeContributorListener = EventEmitter.addListener("removeContributor", removeContributor)
        // end

        const addChapters = (chapter) => {


            let chapters = [];
            let count = 0;
            for (let i = chapterData.length; i >= 0; i -= 1) {
                if (i === 0) {
                    console.log('if ka');
                    console.log(chapter.file.target.files[0].name);
                    chapters = chapters.concat({
                        no: chapter.no,
                        title: chapter.title,
                        file: chapter.file.target.files[0].name,
                        fileParam: chapter.file.target.files[0]
                    });
                } else {
                    console.log('else ka');
                    chapters = chapters.concat(chapterData[count]);
                    count += 1;
                }

            }


            setChapterData(chapters)
            console.log(chapters);
            console.log(chapterData);
        }

        const addChaptersListener = EventEmitter.addListener("chapters", addChapters)

        return () => {
            contributorListener.remove()
            removeContributorListener.remove()
            addChaptersListener.remove()

        }

    }, [oldContributors, listOfChapters, chapterData])


    const updateBooks = () => {
        console.log(chapterData)
        // console.log(moment(new Date()).format("YYYY/MM/DD"))
        // setBookData({...bookData,updatedAt:moment(new Date()).format("YYYY/MM/DD")})
        // for(let i =0; i<= chapterData.length; i +=1) {

        //     resizeImageFn(chapterData[i].fileParam).then((data) => {
        //         setImage(data)
        //     })

        //     const file = new File([image], chapterData[i].file);
        //     const data = new FormData();
        //     data.append('image', file);

        //     axios.post('http://localhost:5000/uploadImage/superadmin/journals', data).then(
        //         res => console.log(res.data),
        //         err => console.log(err.message)
        //     )
        // }


        axios.put(`http://localhost:5000/book/${bookData._id}`, { bookData, contributors, chapterData }).then(
            res => console.log(res.data),
            err => console.log(err.message)
        )
        alert("Data updated successfully")
        history.push('/superadmin/books');
    }
    const deleteBooks = () => {
        axios.delete(`http://localhost:5000/book/${bookData._id}`, bookData).then(
            res => console.log(res.data),
            err => console.log(err.message)
        )
        alert("Data deleted successfully")
        history.push('/superadmin/books');
    }

    const PassContributor = (contributor) => {

        switch (contributor.type) {

            case "author":
                console.log(contributor)
                EventEmitter.emit("author", contributor);
                break;
            case "organization":
                EventEmitter.emit("organization", contributor);
                break;
            case "advanced":
                EventEmitter.emit("advance", contributor);
                break;
            default: break
        }
    }
    // end



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
                        Update Books
                    </Typography>
                </Grid>
                <Box
                    sx={{
                        p: 7,
                        margin: 'auto',
                        width: '100%',
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                >
                    <Grid container mt={-5}>
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
                    </Grid>
                </Box>
            </Grid>
            <Box sx={{ flexGrow: 1 }} p={7} mt={-2}>
                <Grid container spacing={2} columns={16} mt={-7}>
                    <Grid item xs={6}>
                        <Typography style={{ fontFamily: 'Lato', fontStyle: 'normal', color: '#0E5814', fontWeight: 500, fontSize: "20px" }}>
                            ID
                        </Typography>
                        <Input disabled fullWidth value={bookData?._id} />
                        <LockIcon style={{ color: '#515151', height: '20px', marginLeft: '-25px' }} />
                        <Typography style={{ fontFamily: 'Lato', fontStyle: 'normal', color: '#0E5814', fontWeight: 500, fontSize: "20px", marginTop: '10px' }}>
                            Contributors
                        </Typography>

                        <AuthorModal />
                        <OrganizationModal />

                        <AdvanceModal />

                        {
                            oldContributors.map((contributor) =>
                            (
                                <Box component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', backgroundColor: '#F7F7F7', marginTop: '5px' }}>
                                    <InputBase sx={{ ml: 1, flex: 1 }} value={contributor.type !== 'organization' ? `${contributor.initials} ${contributor.lastName}` : contributor.organization} />
                                    <Button onClick={() => PassContributor(contributor)} >
                                        <EditIcon style={{ color: '#7E7E7E' }} />
                                    </Button>
                                </Box>
                            )

                            )
                        }


                        <AddContributorModal />
                        <AddChapterModal />
                        <Button onClick={() => EventEmitter.emit("addContributorModal", true)} variant="contained" color="success" style={{ marginTop: '10px' }} fullWidth><AddIcon /></Button>
                        <Grid mt={1} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={8}>
                                <Typography style={{ fontFamily: 'Lato', fontStyle: 'normal', color: '#0E5814', fontWeight: 500, fontSize: "20px" }}>Edition</Typography>
                                <Input fullWidth value={bookData?.bookEdition || ''} onChange={(e) =>
                                    setBookData({
                                        ...bookData,
                                        bookEdition: e.target.value
                                    })
                                } />
                            </Grid>
                            <Grid item xs={8}>
                                <Typography style={{ fontFamily: 'Lato', fontStyle: 'normal', color: '#0E5814', fontWeight: 500, fontSize: "20px" }}>Volume</Typography>
                                <Input fullWidth value={bookData?.bookVolume || ''} onChange={(e) =>
                                    setBookData({
                                        ...bookData,
                                        bookVolume: e.target.value
                                    })
                                } />
                            </Grid>
                            <Grid item xs={16}>
                                <Typography style={{ fontFamily: 'Lato', fontStyle: 'normal', color: '#0E5814', fontWeight: 500, fontSize: "20px" }}>Publisher</Typography>
                                <Input fullWidth value={bookData?.bookPublisher || ''} onChange={(e) =>
                                    setBookData({
                                        ...bookData,
                                        bookPublisher: e.target.value
                                    })
                                } />
                            </Grid>
                            <Grid item xs={16}>
                                <Typography style={{ fontFamily: 'Lato', fontStyle: 'normal', color: '#0E5814', fontWeight: 500, fontSize: "20px" }}>Publication Date</Typography>
                                <Input fullWidth value={bookData?.bookPublisherDate || ''} onChange={(e) =>
                                    setBookData({
                                        ...bookData,
                                        bookPublisherDate: e.target.value
                                    })
                                } />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography style={{ fontFamily: 'Lato', fontStyle: 'normal', color: '#0E5814', fontWeight: 500, fontSize: "20px", marginBottom: '15px' }}>
                            Categories
                        </Typography> <Autocomplete
                            options={categoryLists}
                            style={{
                                width: "170px", height: 45, marginTop: "-3%", borderRadius: '4px 4px 4px 4px',
                                backgroundColor: '#E5E5E5'
                            }}
                            freeSolo
                            renderInput={(params) => (
                                <TextField {...params} InputProps={{ ...params.InputProps, disableUnderline: true }} label={elementCat}
                                    variant="standard" />
                            )}
                        />

                        <Autocomplete
                            selectOnFocus
                            clearOnBlur
                            handleHomeEndKeys
                            options={categoryLists}
                            style={{
                                width: "170px", height: 45, marginTop: "-13%", marginLeft: "51%", borderRadius: '4px 4px 4px 4px',
                                backgroundColor: '#E5E5E5'
                            }}
                            freeSolo
                            renderInput={(params) => (
                                <TextField {...params} InputProps={{ ...params.InputProps, disableUnderline: true }} label={elementCat}
                                    variant="standard" />
                            )}
                        />


                        <Autocomplete
                            selectOnFocus
                            clearOnBlur
                            handleHomeEndKeys
                            options={categoryLists}
                            style={{
                                width: "170px", height: 45, marginTop: "1%", borderRadius: '4px 4px 4px 4px',
                                backgroundColor: '#E5E5E5'
                            }}
                            freeSolo
                            renderInput={(params) => (
                                <TextField {...params} InputProps={{ ...params.InputProps, disableUnderline: true }} label={elementCat}
                                    variant="standard" />
                            )}
                        />

                        <Autocomplete
                            selectOnFocus
                            clearOnBlur
                            handleHomeEndKeys
                            options={categoryLists}
                            style={{
                                width: "170px", height: 45, marginTop: "-13%", marginLeft: "51%", borderRadius: '4px 4px 4px 4px',
                                backgroundColor: '#E5E5E5'
                            }}
                            freeSolo
                            renderInput={(params) => (
                                <TextField {...params} InputProps={{ ...params.InputProps, disableUnderline: true }} label={elementCat}
                                    variant="standard" />
                            )}
                        />


                        <Autocomplete
                            selectOnFocus
                            clearOnBlur
                            handleHomeEndKeys
                            options={categoryLists}
                            style={{
                                width: "170px", height: 45, marginTop: "1%", borderRadius: '4px 4px 4px 4px',
                                backgroundColor: '#E5E5E5'
                            }}
                            freeSolo
                            renderInput={(params) => (
                                <TextField {...params} InputProps={{ ...params.InputProps, disableUnderline: true }} label={elementCat}
                                    variant="standard" />
                            )}
                        />

                        {/* <AddCategoryModal /> */}
                        <AddCategoryModal categoryLists={categoryLists} setCategoryLists={setCategoryLists} />
                        <Grid mt={1} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={16}>
                                <Button onClick={() => EventEmitter.emit("addCategory", true)} fullWidth variant="contained" color="success"><AddIcon /></Button>
                            </Grid>
                        </Grid>

                        <Typography style={{ fontFamily: 'Lato', fontStyle: 'normal', color: '#0E5814', fontWeight: 500, fontSize: "20px", marginTop: '20px' }}>
                            Chapters
                        </Typography>

                        <Grid mt={1} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} id='chapterContainer'>

                            {
                                chapterData === [] ? '' :
                                    chapterData.map((chapter) => (

                                        <Grid item xs={16}>
                                            <Box component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', backgroundColor: '#9E9E9E' }}>
                                                <InputBase sx={{ ml: 1, flex: 1 }} readOnly value={chapter.title} />
                                                <CloseIcon style={{ color: '#FFFFFF' }} />
                                            </Box>

                                        </Grid>
                                    ))
                            }
                            <Grid item xs>
                                <Button onClick={() => EventEmitter.emit("addChapters", true)} variant="contained" color="success" style={{ width: 170, float: 'right' }}><AddIcon /></Button>
                            </Grid>

                        </Grid>

                    </Grid>
                    <Grid item xs={4}>
                        <Avatar sx={{ width: '216px', height: '295px' }} variant="square" />
                        <Grid mt={3} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={16}>
                                <Typography style={{
                                    fontFamily: 'Oxygen',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    lineHeight: '20px',

                                    color: '#00000',
                                }}>
                                    Date added:
                                </Typography>
                                <Typography>{moment(new Date()).format("YYYY/MM/DD")}</Typography>
                            </Grid>
                            <Grid item xs={16}>
                                <Typography style={{
                                    fontFamily: 'Oxygen',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    lineHeight: '20px',

                                    color: '#00000',
                                }}>
                                    Date updated:
                                </Typography>
                                <Typography>{moment(new Date()).format("YYYY/MM/DD")}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={{ marginTop: '90px', alignItems: 'center', justifyContent: 'center' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <Button onClick={updateBooks} variant="contained" style={{ backgroundColor: '#E9B949', borderRadius: '5px', width: 200 }}><Typography>UPDATE</Typography></Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button onClick={deleteBooks} variant="contained" style={{ backgroundColor: '#BA2525', borderRadius: '5px', width: 200 }}><Typography>REMOVE</Typography></Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
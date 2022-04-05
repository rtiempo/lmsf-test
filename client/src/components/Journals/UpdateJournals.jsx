import React, { useState, useEffect } from 'react'
import { Button, Grid, Typography, Divider, Box, Input, InputBase, Stack, FormControl, Select, MenuItem } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AuthorModal from '../Modals/ContributorModal/AuthorContributorModal'
import OrganizationModal from '../Modals/ContributorModal/OrganizationContributorModal';
import AdvanceModal from '../Modals/ContributorModal/AdvanceContributorModal';
import booksLogo from '../../assets/Books.png'
import InputGroup from '../InputGroup/InputGroup'
import EventEmitter from "../../utils/EventEmitter";


export default function UpdateBooks(...props) {
    console.log(props);
    // const [getContributors,setDataContributors] = useState([])
    const [contributors, setContributors] = useState([]);
    const handleAddContributor = () => {
        setContributors([...contributors, { id: uuid() }]);
    };
    const [status, setStatus] = React.useState('');
    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    const history = useHistory()
    const [journalData, setJournalData] = useState({
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
    })

    const [oldContributorsData, setOldContributorsData] = useState([]);
    useEffect(() => {
        if (journalData) {
            setJournalData(props[0].location.state.addData)
            setOldContributorsData(props[0].location.state.Contributors)
            console.log(journalData);
        }

    }, [])
    // use for update and remove contributors modal
    useEffect(() => {
        const catchContributor = (contributor) => {

            let listOfContributors = [];

            for (let i = 0; i < oldContributorsData.length; i += 1) {

                if (oldContributorsData[i].id === contributor.id) {

                    listOfContributors = listOfContributors.concat(contributor);

                } else {

                    listOfContributors = listOfContributors.concat(oldContributorsData[i]);
                }
            }

            setOldContributorsData(listOfContributors);

        }
        const contributorModalListiner = EventEmitter.addListener("contributor", catchContributor)

        // remove contributor

        const removeContributor = (contributor) => {

            let newcontributorsData = [];

            for (let i = 0; i < oldContributorsData.length; i += 1) {

                if (oldContributorsData[i].id !== contributor.id) {
                    newcontributorsData = newcontributorsData.concat(oldContributorsData[i]);
                }
            }

            setOldContributorsData(newcontributorsData);


        }
        const removeContributorModalListiner = EventEmitter.addListener("removeContributor", removeContributor)

        return () => {
            contributorModalListiner.remove();
            removeContributorModalListiner.remove();
        }

    }, [oldContributorsData])

    // end 

    const updateJournals = () => {

        let newcontributorsData = oldContributorsData;


        for (let i = 0; i < contributors.length; i += 1) {
            newcontributorsData = newcontributorsData.concat(contributors[i]);
        }


        axios.put(`http://localhost:5000/journals/${journalData._id}`, { journalData, newcontributorsData }).then(
            res => console.log(res.data),
            err => console.log(err.message)
        )


        alert("Data updated successfully")
        history.push('/superadmin/journals');
    }


    const deleteJournals = () => {
        axios.delete(`http://localhost:5000/journals/${journalData._id}`, journalData).then(
            res => console.log(res.data),
            err => console.log(err.message)
        )
        alert("Data deleted successfully")
        history.push('/superadmin/journals');
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
                        Update Articles
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
            <Box sx={{ flexGrow: 1 }} p={4} mt={-5}>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={16} p={3}>
                        <Typography style={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#0E5814',
                        }} >Article Title</Typography>
                        <Input placeholder="Article Title" fullWidth value={journalData?.articleTitle || ''}
                            onChange={(e) => setJournalData({
                                ...journalData, articleTitle: e.target.value
                            })} />
                    </Grid>
                    <Grid item xs={16} p={3}>
                        <Typography style={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#0E5814',
                        }}>Journal Title</Typography>
                        <Input placeholder="Article Title"
                            value={journalData?.journalTitle || ''}
                            onChange={(e) => setJournalData({
                                ...journalData, journalTitle: e.target.value
                            })}
                            fullWidth />
                    </Grid>
                    <Grid item xs={16} p={3}>
                        <Typography style={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#0E5814',
                        }}>Contributors</Typography>
                        <AuthorModal />
                        <OrganizationModal />

                        <AdvanceModal />
                        {
                            oldContributorsData.map((contributor) =>
                            (
                                <Box sx={{
                                    width: '1000px'
                                }}>
                                    <Box component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', backgroundColor: '#F7F7F7', marginTop: '5px' }}>
                                        <InputBase sx={{ ml: 1, flex: 1 }} value={contributor.type !== 'organization' ? `${contributor.initials} ${contributor.lastName}` : contributor.organization} />
                                        <Button onClick={() => PassContributor(contributor)}>
                                            <EditIcon style={{ color: '#7E7E7E' }} />
                                        </Button>
                                    </Box>
                                </Box>
                            )

                            )
                        }

                    </Grid>

                    <Grid item xs={16} mt={3}>
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
                    <Grid item xs={16} p={3} mt={3}>
                        <Stack>
                            <Button variant="contained" color="success" onClick={handleAddContributor}> Add Contributor</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={4} p={3}>
                        <Typography style={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#0E5814',
                        }}>From Page</Typography>
                        <Input placeholder="Name of book" fullWidth value={journalData?.fromPage || ''}
                            onChange={(e) => setJournalData({
                                ...journalData, fromPage: e.target.value
                            })}
                        />
                    </Grid>
                    <Grid item xs={4} p={3}>
                        <Typography style={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#0E5814',
                        }}>To Page</Typography>
                        <Input placeholder="Name of book" fullWidth value={journalData?.toPage || ''}
                            onChange={(e) => setJournalData({
                                ...journalData, toPage: e.target.value
                            })}
                        />
                    </Grid>
                    <Grid item xs={4} p={3}>
                        <Typography style={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#0E5814',
                        }}>Volume</Typography>
                        <Input placeholder="Name of book" fullWidth value={journalData?.volume || ''}
                            onChange={(e) => setJournalData({
                                ...journalData, volume: e.target.value
                            })}
                        />
                    </Grid>
                    <Grid item xs={4} p={3}>
                        <Typography style={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#0E5814',
                        }}>Issue</Typography>
                        <Input placeholder="Name of book" fullWidth value={journalData?.issue || ''}
                            onChange={(e) => setJournalData({
                                ...journalData, issue: e.target.value
                            })}
                        />
                    </Grid>
                    <Grid item xs={16}>
                        <Grid container spacing={3} columns={16}>
                            <Grid item xs={4} mt={2} mr={5} p={3}>
                                <Typography style={{
                                    fontFamily: 'Lato',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    lineHeight: '22px',
                                    color: '#0E5814',
                                }}>Publication Status</Typography>
                                <FormControl variant="standard" fullWidth style={{ width: 300 }}>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={journalData?.publicationStatus || ''}
                                        onChange={(e) => setJournalData({
                                            ...journalData, publicationStatus: e.target.value
                                        })}
                                        sx={{ color: journalData.publicationStatus === "PUBLISHED" ? 'green' : 'red' }}
                                    >
                                        <MenuItem value='PUBLISHED'>PUBLISHED</MenuItem>
                                        <MenuItem value='IN-PRESS'>IN-PRESS</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} mt={2} ml={5} mr={5} p={3}>
                                <Typography style={{
                                    fontFamily: 'Lato',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    lineHeight: '22px',
                                    color: '#0E5814',
                                }}>Place of Publication</Typography>
                                <Input placeholder="Name of book" fullWidth value={journalData?.placeOfPublication || ''}
                                    onChange={(e) => setJournalData({
                                        ...journalData, placeOfPublication: e.target.value
                                    })}
                                    style={{ width: 300 }} />
                            </Grid>
                            <Grid item xs={4} mt={2} ml={5} p={3}>
                                <Typography style={{
                                    fontFamily: 'Lato',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    lineHeight: '22px',
                                    color: '#0E5814',
                                }}>Publication Date</Typography>
                                <Input placeholder="Name of book" fullWidth value={journalData?.publicationDate || ''}
                                    onChange={(e) => setJournalData({
                                        ...journalData, publicationDate: e.target.value
                                    })}
                                    style={{ width: 300 }} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography style={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#0E5814',
                        }}>Main Subjects</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography style={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#0E5814',
                        }}>Sub-categories</Typography>
                    </Grid>
                    <Grid item xs={16} mt={2} p={3}>
                        <Typography style={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#0E5814',
                        }}>Add File</Typography>
                        <Input type="file" fullWidth />
                    </Grid>
                    <Grid p={3} mt={3} container style={{ marginLeft: 'auto', marginRight: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Grid item xs={2} mr={3}>
                            <Button fullWidth variant="contained" style={{ backgroundColor: '#E9B949' }} onClick={updateJournals} >UPDATE</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button fullWidth variant="contained" style={{ backgroundColor: '#BA2525' }} onClick={deleteJournals}>REMOVE</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

        </>
    );
}

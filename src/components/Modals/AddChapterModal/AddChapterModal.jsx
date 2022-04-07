import React, { useState, useEffect } from 'react'
import { Grid, Box, Button, Typography, Modal, Divider, Input } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EventEmitter from '../../../utils/EventEmitter'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '475px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    height: '600px',
    borderRadius: '20px',
    p: 0,
    boxSizing: 'border-box'
};

export default function AddChapterModal() {
    const [openModal, setModalOpen] = useState(false);
    const [chapters, setChapters] = useState({
        no : '',
        title:'',
        file: '',
       
    });
    const modalOpen = () => {
        setModalOpen(true);
    };
    const modalClose = () => {
        setModalOpen(false);
    };
    useEffect(() => {
        const addChapters = () => {
            modalOpen();
            
        }
        const addChaptersModalListiner = EventEmitter.addListener("addChapters", addChapters)
        return () => {
            addChaptersModalListiner.remove()
        }
    }, [])

    const HandleChapters = () => {
        EventEmitter.emit('chapters', chapters);
        setModalOpen(false);
    }

    const fileHandler = (e) => {
        console.log(e.target.value)
        const filename = e.target.value
        console.log(filename.slice(12));
       

        setChapters({
            fileParam: e.target.files[0],
            file: e.target.value.slice(12)
        })

        // setChapters({
        //     ...chapters, file: filename.slice(12)
        // })
    }

    return (
        <Modal
            keepMounted
            open={openModal}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <Grid p={5} container spacing={2} columns={16}>
                    <Grid item xs={16} style={{ position: "absolute", marginLeft: '380px' }}><CloseIcon onClick={modalClose} style={{ color: "#0E5814", cursor: "pointer" }} /></Grid>
                    <Grid item xs={16} display="flex" mt={5}>
                        <NoteAddIcon style={{ color: '#0E5814', marginRight: '15px' }} />
                        <Typography style={{
                            fontFamily: 'Raleway',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '23px',

                            /* Primary/Primary 800 */

                            color: '#0E5814',
                        }}>Add Chapters</Typography>
                    </Grid>
                    <Grid item xs={16} mb={4}>
                        <Divider fullWidth style={{ border: '1px solid #B1B1B1' }} />
                    </Grid>
                    <Grid item xs={16}>
                        <Typography style={{color: '#0E5814',fontWeight: 600}}>No.</Typography>
                        <Input fullWidth 
                        onChange={(e) => setChapters({
                            ...chapters, no: e.target.value
                        })} 
                        />
                        <CheckCircleIcon style={{position: 'absolute', left: '412px',color: '#0E5814'}}/>
                    </Grid>
                    <Grid item xs={16}>
                        <Typography style={{color: '#0E5814',fontWeight: 600}}>Title</Typography>
                        <Input fullWidth 
                        onChange={(e) => setChapters({
                            ...chapters, title: e.target.value
                        })} 
                        />
                        <CheckCircleIcon style={{position: 'absolute', left: '412px',color: '#0E5814'}}/>
                    </Grid>
                    <Grid item xs={16}>
                        <Typography style={{color: '#0E5814',fontWeight: 600}}>File</Typography>
                        <Input type= "file" fullWidth
                        onChange={(e) => setChapters({ ...chapters,
                            file: e,
                            
                        })} 
                        />
                    </Grid>
                    <Grid item xs={16} mt={14}>
                        <Button
                            variant="contained"
                            color="success"
                            fullWidth
                            onClick={HandleChapters}
                        > <Typography>
                                SUBMIT
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal >
    )
}
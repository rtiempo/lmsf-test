import React, { useState, useEffect } from 'react'
import { Modal, Box, Stack, Button, Typography, Grid, Divider } from '@mui/material'
import { v4 as uuid } from 'uuid';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import InputGroup from '../../InputGroup/InputGroup';
import EventEmitter from '../../../utils/EventEmitter';

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
export default function AddContributorModal() {
    const [openModal, setModalOpen] = useState(false);
    const modalOpen = () => {
        setModalOpen(true);
    };
    const modalClose = () => {
        setModalOpen(false);
    };
    const [contributors, setContributors] = useState([]);
    const handleAddContributor = () => {
        setContributors([...contributors, { id: uuid() }]);
        console.log(contributors);
    };
    useEffect(() => {
        const addContributorModal = () => {
            modalOpen()
        }
        const addContributorModalListiner = EventEmitter.addListener("addContributorModal", addContributorModal)
        return () => {
            addContributorModalListiner.remove()
        }

    }, [])

    const Submit = () => {
        EventEmitter.emit('addcontributors', contributors);
        setModalOpen(false);
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
                        <PersonAddIcon style={{ color: '#0E5814', marginRight: '15px' }} />
                        <Typography style={{
                            fontFamily: 'Raleway',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '23px',

                            /* Primary/Primary 800 */

                            color: '#0E5814',
                        }}>Update Contributors</Typography>
                    </Grid>
                    <Grid item xs={16}>
                        <Divider fullWidth style={{ border: '1px solid #B1B1B1' }} />
                    </Grid>
                    <div style={{overflowY: 'scroll', height: '350px'}}>
                        {contributors.map((contributor) => (
                            <Box sx={{ marginLeft: '5%' }} key={contributor.id}>
                                <InputGroup
                                    contributors={contributors}
                                    setContributors={setContributors}
                                    id={contributor.id}
                                />
                            </Box>
                        ))}
                    </div>

                    <Grid item xs={16}>
                        <Stack>
                            <Button
                                fullWidth
                                variant="contained"
                                color="success"
                                onClick={handleAddContributor}
                            >Add Contributor</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={16}>
                        <Button
                            variant="contained"
                            color="success"
                            fullWidth
                            onClick={Submit}
                        > <Typography>
                                SUBMIT
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}
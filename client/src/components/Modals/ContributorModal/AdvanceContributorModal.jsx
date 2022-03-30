import React, { useState, useEffect } from 'react'
import { Typography, Grid, Modal, Box, Divider, InputLabel, Button, InputBase } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
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
    boxSizing: 'border-box',
};
export default function AdvanceModal() {
    const [openModal, setModalOpen] = React.useState(false);
    const modalOpen = () => {
        setModalOpen(true);
    };
    const modalClose = () => {
        setModalOpen(false);
    };
    const [getContributor,setContributor] = useState([])
    useEffect(() => {
        const advanceModal = (contributor) => {
            setContributor(contributor)
            modalOpen()
        }
        const advanceModalListiner = EventEmitter.addListener("advance", advanceModal)
        return () => {
            advanceModalListiner.remove()
        }
    }, [])

    const UpdateContributor = () => {
       
        EventEmitter.emit("contributor", getContributor);
        setModalOpen(false);
    }


    const RemoveContributor = () => {
        EventEmitter.emit("removeContributor", getContributor);
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
                    <Grid item xs={16}>
                        <Typography style={{
                            fontSize: '14px',
                            lineHeight: '17px',
                            marginLeft: "5px",
                            fontWeight: 'bold',
                            marginBottom: '20px',
                            /* identical to box height */


                            /* Primary/Primary 800 */

                            color: '#0E5814'
                        }}>Advance</Typography>
                        <Box
                            component="form"
                            sx={{
                                p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,marginTop:'-5px'
                                /* Neutrals/Neutral 300 */

                            }}
                        >

                            <InputLabel sx={{ p: '5px', backgroundColor: "#B1B1B1" }} aria-label="menu">
                                <Typography fontWeight="bold">
                                    Title
                                </Typography>
                            </InputLabel>
                            <InputBase
                            value={getContributor.title}
                            onChange={(e)=> setContributor({
                                ...getContributor,
                                title: e.target.value
                            })}
                                sx={{
                                    flex: 1, background: "#F7F7F7", border: '0.5px solid #B1B1B1',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={16} mt={-2.2}>
                        <Box
                            component="form"
                            sx={{
                                p: '2px 4px', display: 'flex', alignItems: 'center', width: 400
                                /* Neutrals/Neutral 300 */

                            }}
                        >
                            <InputLabel sx={{ p: '5px', backgroundColor: "#B1B1B1" }} aria-label="menu">
                                <Typography fontWeight="bold">
                                    Initials
                                </Typography>
                            </InputLabel>
                            <InputBase
                            value={getContributor.initials}
                            onChange={(e)=> setContributor({
                                ...getContributor,
                                initials: e.target.value
                            })}
                                sx={{
                                    flex: 1, background: "#F7F7F7", border: '0.5px solid #B1B1B1',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={16} mt={-2.2}>
                        <Box
                            component="form"
                            sx={{
                                p: '2px 4px', display: 'flex', alignItems: 'center', width: 400
                                /* Neutrals/Neutral 300 */

                            }}
                        >
                            <InputLabel sx={{ p: '5px', backgroundColor: "#B1B1B1" }} aria-label="menu">
                                <Typography fontWeight="bold">
                                    Infix
                                </Typography>
                            </InputLabel>
                            <InputBase
                             value={getContributor.infix}
                             onChange={(e)=> setContributor({
                                 ...getContributor,
                                 infix: e.target.value
                             })}
                                sx={{
                                    flex: 1, background: "#F7F7F7", border: '0.5px solid #B1B1B1',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={16} mt={-2.2}>
                        <Box
                            component="form"
                            sx={{
                                p: '2px 4px', display: 'flex', alignItems: 'center', width: 400
                                /* Neutrals/Neutral 300 */

                            }}
                        >
                            <InputLabel sx={{ p: '5px', backgroundColor: "#B1B1B1" }} aria-label="menu">
                                <Typography fontWeight="bold">
                                    Last name
                                </Typography>
                            </InputLabel>
                            <InputBase
                             value={getContributor.lastName}
                             onChange={(e)=> setContributor({
                                 ...getContributor,
                                 lastName: e.target.value
                             })}
                                sx={{
                                    flex: 1, background: "#F7F7F7", border: '0.5px solid #B1B1B1',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={16} mt={-2.2}>
                        <Box
                            component="form"
                            sx={{
                                p: '2px 4px', display: 'flex', alignItems: 'center', width: 400
                                /* Neutrals/Neutral 300 */

                            }}
                        >
                            <InputLabel sx={{ p: '5px', backgroundColor: "#B1B1B1" }} aria-label="menu">
                                <Typography fontWeight="bold">
                                    Suffix
                                </Typography>
                            </InputLabel>
                            <InputBase
                             value={getContributor.suffix}
                             onChange={(e)=> setContributor({
                                 ...getContributor,
                                 suffix: e.target.value
                             })}
                                sx={{
                                    flex: 1, background: "#F7F7F7", border: '0.5px solid #B1B1B1',
                                    boxSizing: 'border-box'
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={8} mt={15}>
                        <Button variant="contained" fullWidth 
                        onClick={UpdateContributor}
                        style={{
                            background: '#E9B949',
                            borderRadius: '5px',
                        }}>
                            <Typography>UPDATE</Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={8} mt={15}>
                        <Button variant="contained" fullWidth
                        onClick={RemoveContributor} 
                        style={{
                            background: '#BA2525',
                            borderRadius: '5px',
                        }}>
                            <Typography>REMOVE</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal >
    )

}


import React, { useState, useEffect } from 'react'
import { Grid, Box, Button, Typography, Modal, Divider, InputBase } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import GridViewIcon from '@mui/icons-material/GridView';
import EventEmitter from '../../../utils/EventEmitter'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '430px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    height: '600px',
    borderRadius: '20px',
    p: 0,
    boxSizing: 'border-box'
};

export default function AddSubCategoryModal({ subcategoryLists, setsubCategoryLists }) {
    const [cat, setCat] = React.useState("");
    const [all, setAll] = React.useState(subcategoryLists);


    const [openModal, setModalOpen] = useState(false);
    const modalOpen = () => {
        setModalOpen(true);
    };
    const modalClose = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        const addSubCategory = () => {
            modalOpen()
        }
        const addCategoryListiner = EventEmitter.addListener("addSubCategory", addSubCategory)
        return () => {
            addCategoryListiner.remove()
        }
    }, [])
    const HandleOk = (event) => {
        if (event.key === 'Enter') {
            //     event.preventDefault()
            event.preventDefault();
            const list = subcategoryLists;
            list.push(cat)
            setCat("");
            setsubCategoryLists(list)
            console.log(subcategoryLists);
            // const allData = {list}

        }
        EventEmitter.emit("categories",subcategoryLists)
    }

    const Remove = (index) => {
        subcategoryLists.splice(index, 1)
        EventEmitter.emit("categories",subcategoryLists)
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
                    <Grid item xs={16} style={{ position: "absolute", marginLeft: '330px' }}><CloseIcon onClick={modalClose} style={{ color: "#0E5814", cursor: "pointer" }} /></Grid>
                    <Grid item xs={16} display="flex" mt={5}>
                        <GridViewIcon style={{ color: '#0E5814', marginRight: '15px' }} />
                        <Typography style={{
                            fontFamily: 'Raleway',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '23px',
                            color: '#0E5814',
                        }}>Manage Sub-categories</Typography>
                    </Grid>
                    <Grid item xs={16} mb={4}>
                        <Divider fullWidth style={{ border: '1px solid #B1B1B1' }} />
                    </Grid>
                    <Grid item xs={16} mt={-5}>
                        <Box component="form" sx={{
                            p: '2px 4px', display: 'flex', alignItems: 'center', marginTop: '5px', background: '#F7F7F7',
                            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
                            borderRadius: '3px'
                        }}
                        >
                            <AddIcon style={{ color: '#0E5814' }} />
                            <InputBase value={cat} onChange={(event) => {
                                setCat(event.target.value)
                            }} sx={{ ml: 1, flex: 1 }} onKeyPress={HandleOk} placeholder="Add a sub category and press Enter"
                            />
                            {/* <AddIcon  style={{ color: '#0E5814' }} />
                            <InputBase value={cat} onChange={(event) => {
                                setCat(event.target.value)
                            }} sx={{ ml: 1, flex: 1 }}  onKeyPress={HandleOk} placeholder="Add a category and press Enter"
                            /> */}
                        </Box>
                    </Grid>
                    <br />
                    {/* <Grid item xs={8}>
                        <Typography>Category 1</Typography>

                    </Grid>
                    <Grid item xs={8}>
                        <DeleteIcon style={{ marginLeft: '147px', color: '#0E5814' }} />
                    </Grid> */}
                    <Grid item xs={16} mt={-2}>
                        {subcategoryLists.map((a, i) => <div> <Typography>{a}</Typography>
                            <Grid item xs={16} mt={-2}>
                                <DeleteIcon style={{ marginLeft: '95%', marginTop: '-3%', color: '#0E5814' }} onClick={() => Remove(i)} />

                            </Grid>
                            <Grid item xs={16} mt={-2}>
                                <Divider fullWidth style={{ marginTop: '3%', border: '1px solid #B1B1B1' }} />
                            </Grid><br />
                        </div>)}
                    </Grid>

                </Grid>
            </Box>
        </Modal >
    )
}
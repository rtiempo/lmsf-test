import React, { useState, useEffect } from 'react'
import { Typography, Select, MenuItem, Button, Modal, Box, FormControl, Input, InputAdornment, IconButton, Avatar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import image1 from '../../../assets/joker.png'
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
export default function AddminSearchModal() {
    const [openModal, setModalOpen] = React.useState(false);
    const modalOpen = () => {
        setModalOpen(true);
    };
    const modalClose = () => {
        setModalOpen(false);
    };
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });
    const handleChangeAddAdmin = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const [status, setStatus] = React.useState('');
    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };


    const [getSearchID, setSearchID] = useState([])
    useEffect(() => {
        const AdminSearchModal = (adminData) => {
            setSearchID(adminData)
            modalOpen()
        }
        const adminListener = EventEmitter.addListener("AdminSearchModal", AdminSearchModal)
        return () => {
            adminListener.remove()
        }
    }, [])
    const updateAdmins = () => {
        console.log(getSearchID);
        axios.put(`http://localhost:5000/users/${getSearchID._id}`, getSearchID ).then((response) => {
            console.log(response.data)
            const adminstratorData = response.data.users
            console.log(adminstratorData)   
            setSearchID(adminstratorData)
            setModalOpen(false);
            window.location.reload('/superadmin/user/administrator')

            // console.log('update na');
        })
    }
    const deleteAdmins = ()=>{
        axios.delete(`http://localhost:5000/users/${getSearchID._id}`,getSearchID).then((response)=>{
            console.log(response.data)
            setModalOpen(false);
            window.location.reload('/superadmin/user/administrator')
        })
    }

    return (
        <Modal
            keepMounted
            open={openModal}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <div
                    style={{
                        background: '#0E5814',
                        height: '90px',
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                    }}
                />
                <CloseIcon
                    onClick={modalClose}
                    sx={{
                        position: 'absolute',

                        marginLeft: '88%',
                        marginTop: '-14%',
                        width: '29px',
                        color: 'white',
                        cursor: 'pointer'
                    }}
                />
                <Avatar
                    style={{
                        width: '100px',
                        height: '100px',
                        position: 'absolute',
                        border: '1px solid #fff',
                        boxShadow: 'white',
                        marginLeft: '191px',
                        marginTop: '-57px',
                    }}

                />

                <PersonAddIcon

                    sx={{
                        position: 'absolute',
                        left: '8.33%',
                        right: '8.33%',
                        top: '25.83%',
                        bottom: '20.83%',

                        /* Primary/Primary 800 */

                        color: '#0E5814',
                    }}
                />
                <Typography
                    id="keep-mounted-modal-title"
                    sx={{
                        color: '#0E5814',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontFamily: 'Raleway',
                        position: 'absolute',
                        fontWeight: '600',
                        width: '179px',
                        height: '23px',
                        left: '79px',
                        top: '152px',
                    }}
                >
                    Admin Details
                </Typography>
                <hr
                    style={{
                        position: 'absolute',
                        width: '378px',
                        height: '0px',
                        left: '45px',
                        top: '185px',

                        /* Neutrals/Neutral 300 */

                        border: '1px solid #B1B1B1',
                    }}
                />

                <FormControl
                    disabled
                    variant="standard"
                    sx={{
                        position: 'absolute',
                        left: ' 50px',
                        top: '196px',
                        fontFamily: 'Lato',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '15px',
                        lineHeight: '23px',
                        color: '#05400A',
                    }}
                >
                    Admin ID
                    <Input
                        value={getSearchID._id}
                        onChange={(e) => setSearchID({
                            ...getSearchID,
                            _id: e.target.value
                        })}
                        placeholder="19104903"
                        sx={{
                            width: '373px',
                        }}
                    />
                    <LockIcon
                        sx={{
                            position: 'absolute',
                            left: '359px',
                            // right: '12.5%',
                            top: '50%',
                            // bottom: '12.5%',

                            /* Neutrals/Neutral 600 */

                            color: '#626262',
                            width: '15px',
                        }}
                    />
                </FormControl>
                <FormControl
                    variant="standard"
                    sx={{
                        position: 'absolute',
                        // width: '91px',
                        // height: '23px',
                        left: ' 50px',
                        top: '260px',

                        fontFamily: 'Lato',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '15px',
                        lineHeight: '23px',
                        color: '#05400A',
                    }}
                >
                    First Name
                    <Input
                        value={getSearchID.userFirstName}
                        onChange={(e) => setSearchID({
                            ...getSearchID,
                            userFirstName: e.target.value
                        })}
                        placeholder="Sample"
                        style={{ width: 173 }}
                    />
                    <CheckCircleIcon
                        sx={{
                            position: 'absolute',
                            left: '159px',
                            top: '29px',
                            /* Primary/Primary 400 */
                            color: '#57AE5B',
                            width: '15px',
                        }}
                    />
                </FormControl>
                <FormControl
                    variant="standard"
                    sx={{
                        position: 'absolute',
                        // width: '91px',
                        // height: '23px',
                        left: '250px',
                        top: '260px',

                        fontFamily: 'Lato',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '15px',
                        lineHeight: '23px',
                        color: '#05400A',
                    }}
                >
                    Last Name
                    <Input
                        value={getSearchID.userLastName}
                        onChange={(e) => setSearchID({
                            ...getSearchID,
                            userLastName: e.target.value
                        })}
                        placeholder="Sample"
                        style={{ width: 173 }}
                    />
                    <CheckCircleIcon
                        sx={{
                            position: 'absolute',
                            left: '159px',
                            top: '29px',
                            /* Primary/Primary 400 */
                            color: '#57AE5B',
                            width: '15px',
                        }}
                    />
                </FormControl>
                <FormControl
                    variant="standard"
                    sx={{
                        position: 'absolute',
                        left: ' 50px',
                        top: '385px',
                        fontFamily: 'Lato',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '15px',
                        lineHeight: '23px',
                        color: '#05400A',
                    }}
                >
                    Password
                    <Input
                        disabled
                        type={values.showPassword ? 'text' : 'password'}
                        value={getSearchID.userPassword}
                        onChange={handleChangeAddAdmin('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    {values.showPassword ? (
                                        <Visibility
                                            sx={{
                                                width: '17px',
                                                position: 'absolute',
                                            }}
                                        />
                                    ) : (
                                        <VisibilityOff
                                            sx={{
                                                width: '17px',
                                                position: 'absolute',
                                            }}
                                        />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                        sx={{
                            width: '373px',
                        }}
                    />
                    <p
                        style={{
                            position: 'absolute',
                            top: '65px',
                        }}
                    >
                        Role
                    </p>
                </FormControl>
                <FormControl
                    variant="standard"
                    sx={{
                        position: 'absolute',
                        left: ' 50px',
                        top: '323px',
                        fontFamily: 'Lato',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '15px',
                        lineHeight: '23px',
                        color: '#05400A',
                    }}
                >
                    Email
                    <Input
                        value={getSearchID.userEmail}
                        onChange={(e) => setSearchID({
                            ...getSearchID,
                            userEmail: e.target.value
                        })}
                        placeholder="Sample@sample.sample"
                        sx={{
                            width: '373px',
                        }}
                    />
                    <CheckCircleIcon
                        sx={{
                            position: 'absolute',
                            left: '359px',
                            // right: '12.5%',
                            top: '15%',
                            // bottom: '12.5%',

                            /* Neutrals/Neutral 600 */

                            color: '#57AE5B',
                            width: '15px',
                        }}
                    /><br /><br />  <br /><br />
                    <FormControl variant="standard" sx={{ m: 1, top: "63%", marginLeft: "10%", minWidth: "70%" }}>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={getSearchID?.userRole || ''}
                            onChange={(e) => setSearchID({
                                ...getSearchID,
                                userRole: e.target.value
                            })}
                            sx={{ marginLeft: "-12%" }}
                        >
                            <MenuItem value='Librarian'>Librarian</MenuItem>
                            <MenuItem value='Librarian Assistant'>Librarian Assistant</MenuItem>
                            <MenuItem value='Information Specialist'>Information Specialist</MenuItem>
                            <MenuItem value='Administrative Service Manager'>Administrative Service Manager</MenuItem>
                            <MenuItem value='Collection Development'>Collection Development</MenuItem>
                            <MenuItem value='Archivist'>Archivist</MenuItem>
                            <MenuItem value='Reference Librarian'>Reference Librarian</MenuItem>
                            <MenuItem value='Curator'>Curator</MenuItem>
                            <MenuItem value='Cataloging'>Cataloging</MenuItem>
                            <MenuItem value='Librarian Technician'>Librarian Technician</MenuItem>
                            <MenuItem value='Computer Support Specialist'>Computer Support Specialist</MenuItem>
                        </Select>
                    </FormControl>
                </FormControl>
                <Button
                    onClick={updateAdmins}
                    sx={{
                        width: '123px',
                        height: '43px',
                        left: '93px',
                        top: '528px',

                        /* Yellow/Yellow 500 */

                        background: '#E9B949',
                        borderRadius: '5px',
                        position: 'absolute',
                        color: 'white',
                        '&:hover': {
                            background: '#0E5814',
                        }
                    }}
                >
                    UPDATE
                </Button>
                <Button
                onClick={deleteAdmins}
                    sx={{
                        width: '123px',
                        height: '43px',
                        left: '265px',
                        top: '528px',

                        /* Yellow/Yellow 500 */

                        background: '#BA2525',
                        borderRadius: '5px',
                        position: 'absolute',
                        color: 'white',
                        '&:hover': {
                            background: '#0E5814',
                        }
                    }}
                >
                    REMOVE
                </Button>
            </Box>
        </Modal>
    )

}

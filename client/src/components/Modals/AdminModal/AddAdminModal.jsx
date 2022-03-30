import React, { useState, useEffect } from 'react'
import { Typography, Button, Paper, InputBase, Modal, Box, FormControl, Input, MenuItem, Select } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import styled from 'styled-components';
import axios from 'axios'
import uniqueId from 'react-id-generator';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EventEmitter from '../../../utils/EventEmitter'

const SelectStyles = styled(Select)`
    Select: {
      "&:after": {  
        borderBottomColor: "darkred",
      },
      "& .MuiSvgIcon-root": {
        color: "darkred",
      },
    },
  } 
  marginTop: '150px',
  position: 'absolute',
  width: '390px',
  border: 'none',
  `;

export default function Addmin() {

  const [AdminRegistrationOpenModal, setAdminRegistrationModalOpen] = useState(false);
  const AdminModalOpen = () => {
    setAdminRegistrationModalOpen(true);
  };
  const AdminRegistrationModalClose = () => {
    setAdminRegistrationModalOpen(false);
  };
  useEffect(() => {
    const addAmin = () => {
      AdminModalOpen()
    }

    const addAdminListener = EventEmitter.addListener("addAdmin", addAmin)
    return () => {
      addAdminListener.remove();
    }

  }, [])
  const [addAdmin, setAdmin] = useState({
    schoolId: "",
    userEmail: "",
    userType: "admin",
    userPassword: "",
    userFirstName: "",
    userLastName: "",
    userRole: "",
    userImage: ""
  });

  const createAdmins = () => {
    const adminID = uniqueId();
    setAdmin({...addAdmin,schoolId:adminID})
    axios.post('http://localhost:5000/users', addAdmin).then((response) => {
      
      setAdminRegistrationModalOpen(false);
      window.location.reload('/superadmin/user/administrators')
      
    })
  }
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
  return (
    <Modal
      keepMounted
      open={AdminRegistrationOpenModal}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <div
          style={{
            height: '90px',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
          }}
        />
        <CloseIcon
          onClick={AdminRegistrationModalClose}
          sx={{
            position: 'absolute',
            marginLeft: '88%',
            marginTop: '-14%',
            width: '29px',
            color: '#9E9E9E',
            cursor: 'pointer'
          }}
        />

        <PersonAddIcon
          sx={{
            position: 'absolute',
            left: '48px',
            right: '8.33%',
            top: '71px',
            bottom: '20.83%',

            /* Primary/Primary 800 */

            color: '#3F9142',
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
            width: '214`px',
            height: '23px',
            left: '76px',
            top: '70px',
          }}
        >
          ADMIN REGISTRATION
        </Typography>
        <hr
          style={{
            position: 'absolute',
            width: '378px',
            height: '0px',
            left: '49px',
            top: '97px',

            /* Neutrals/Neutral 300 */

            border: '1px solid #B1B1B1',
          }}
        />

        <FormControl
          variant="standard"
          sx={{
            position: 'absolute',
            // width: '91px',
            // height: '23px',
            left: ' 50px',
            top: '100px',

            fontFamily: 'Lato',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '15px',
            lineHeight: '23px',
            color: '#05400A',
          }}
        >
          <Paper
            sx={{
              position: 'absolute',
              width: '383px',
              height: '40px',
              top: '40px',
              backgroundColor: '#0E5814',
              p: '2px 4px',
              alignItems: 'center',
            }}
          >
            <MailOutlineIcon
              sx={{
                position: 'absolute',
                left: '3.6%',
                right: '6.25%',
                top: '18.75%',
                bottom: '18.75%',
                color: '#FFFFFF',
              }}
            />
            <InputBase
              onChange={(e) => setAdmin({
                ...addAdmin,
                userEmail: e.target.value
              })}
              sx={{
                position: 'absolute',
                width: '333px',
                height: '40px',
                left: '50px',
                top: '0px',
                padding: '10px',
                /* Neutrals/Neutral 50 */

                background: '#F7F7F7',
                boxShadow: 'inset 0px 1px 1px rgba(0, 0, 0, 0.25)',
              }}
              placeholder="Email"
              inputProps={{ 'aria-label': 'Email' }}
            />
          </Paper>

          <Paper
            sx={{
              position: 'absolute',
              width: '383px',
              height: '40px',
              top: '93px',
              backgroundColor: '#0E5814',
              p: '2px 4px',
              alignItems: 'center',
            }}
          >
            <VpnKeyIcon
              sx={{
                position: 'absolute',
                left: '3.6%',
                right: '6.25%',
                top: '18.75%',
                bottom: '18.75%',
                color: '#FFFFFF',
              }}
            />
            <InputBase
              onChange={(e) => setAdmin({
                ...addAdmin,
                userPassword: e.target.value
              })}
              sx={{
                position: 'absolute',
                width: '333px',
                height: '40px',
                left: '50px',
                top: '0px',
                padding: '10px',
                /* Neutrals/Neutral 50 */

                background: '#F7F7F7',
                boxShadow: 'inset 0px 1px 1px rgba(0, 0, 0, 0.25)',
              }}
              placeholder="Password"
              type="password"
              inputProps={{ 'aria-label': 'Password' }}
            />
          </Paper>

          <Paper
            sx={{
              position: 'absolute',
              width: '383px',
              height: '40px',
              top: '145px',
              backgroundColor: '#0E5814',
              p: '2px 4px',
              alignItems: 'center',
            }}
          >
            <VpnKeyIcon
              sx={{
                position: 'absolute',
                left: '3.6%',
                right: '6.25%',
                top: '18.75%',
                bottom: '18.75%',
                color: '#FFFFFF',
              }}
            />
            <InputBase
              onChange={(e) => setAdmin({
                ...addAdmin,
                userPassword: e.target.value
              })}
              sx={{
                position: 'absolute',
                width: '333px',
                height: '40px',
                left: '50px',
                top: '0px',
                padding: '10px',
                /* Neutrals/Neutral 50 */

                background: '#F7F7F7',
                boxShadow: 'inset 0px 1px 1px rgba(0, 0, 0, 0.25)',
              }}
              placeholder="Re-type Password"
              type="password"
              inputProps={{ 'aria-label': 'Re-type Password' }}
            />
          </Paper>
        </FormControl>

        <FormControl
          variant="standard"
          sx={{
            position: 'absolute',
            // width: '91px',
            // height: '23px',
            left: ' 50px',
            top: '290px',

            fontFamily: 'Lato',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '15px',
            lineHeight: '23px',
            color: '#05400A',
          }}
        >
          <Paper
            sx={{
              position: 'absolute',
              width: '180px',
              height: '40px',
              top: '8px',
              backgroundColor: '#0E5814',
              p: '2px 4px',
              alignItems: 'center',
            }}
          >
            <PersonOutlineIcon
              sx={{
                position: 'absolute',
                left: '7%',
                right: '6.25%',
                top: '18.75%',
                bottom: '18.75%',
                color: '#FFFFFF',
              }}
            />
            <InputBase
              onChange={(e) => setAdmin({
                ...addAdmin,
                userFirstName: e.target.value
              })}
              sx={{
                position: 'absolute',
                width: '130px',
                height: '40px',
                left: '50px',
                top: '0px',
                padding: '10px',
                /* Neutrals/Neutral 50 */

                background: '#F7F7F7',
                boxShadow: 'inset 0px 1px 1px rgba(0, 0, 0, 0.25)',
              }}
              placeholder="First Name"
              inputProps={{ 'aria-label': 'First Name' }}
            />
          </Paper>
        </FormControl>
        <FormControl
          variant="standard"
          sx={{
            position: 'absolute',
            // width: '91px',
            // height: '23px',
            left: '250px',
            top: '290px',

            fontFamily: 'Lato',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '15px',
            lineHeight: '23px',
            color: '#05400A',
          }}
        >
          <Paper
            sx={{
              position: 'absolute',
              width: '180px',
              height: '40px',
              top: '8px',
              backgroundColor: '#0E5814',
              p: '2px 4px',
              alignItems: 'center',
            }}
          >
            <PersonOutlineIcon
              sx={{
                position: 'absolute',
                left: '7%',
                right: '6.25%',
                top: '18.75%',
                bottom: '18.75%',
                color: '#FFFFFF',
              }}
            />
            <InputBase
              onChange={(e) => setAdmin({
                ...addAdmin,
                userLastName: e.target.value
              })}
              sx={{
                position: 'absolute',
                width: '130px',
                height: '40px',
                left: '50px',
                top: '0px',
                /* Neutrals/Neutral 50 */
                padding: '10px',

                background: '#F7F7F7',
                boxShadow: 'inset 0px 1px 1px rgba(0, 0, 0, 0.25)',
              }}
              placeholder="Last Name"
              inputProps={{ 'aria-label': 'Last Name' }}
            />
          </Paper>
        </FormControl>
        <FormControl
          variant="standard"
          sx={{
            position: 'absolute',
            left: ' 50px',
            top: '280px',
            fontFamily: 'Lato',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '15px',
            lineHeight: '23px',
            color: '#05400A',
          }}
        >
          <p
            style={{
              position: 'absolute',
              top: '65px',
            }}
          >
            Role
          </p>
          <SelectStyles
            onChange={(e) =>
              setAdmin({
                ...addAdmin,
                userRole: e.target.value
              })
            }
            sx={{
              marginTop: '90px',
              position: 'absolute',
              width: '390px',
              border: 'none',
            }}
            select
            size="small"
            placeholder="Select a Role"
            variant="filled"
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
          </SelectStyles>
        </FormControl>
        <Typography
          style={{
            position: 'absolute',
            top: '420px',
            left: '50px',
          }}
        >
          Image Optional
        </Typography>
        <FormControl
          
          variant="standard"
          sx={{
            position: 'absolute',
            left: ' 50px',
            top: '460px',
            width: '440px',
            height: '136px',
          }}
        >
          <Input type="file" sx={{ position: 'absolute', Top: '506px' }} onChange={(e) =>
            setAdmin({
              ...addAdmin,
              userImage: e.target.value
            })
          }/>
        </FormControl>

        <Button
          onClick={createAdmins}
          variant="contained"
          color="success"
          sx={{
            position: 'absolute',
            width: '390px',
            height: '40px',
            left: '50px',
            top: '530px',

            /* Primary/Primary 800 */
            color: '#FFFFFF',
            background: '#0E5814',
            borderRadius: '5px',
          }}
        >
          SUBMIT
        </Button>
      </Box>
    </Modal>
  )


}


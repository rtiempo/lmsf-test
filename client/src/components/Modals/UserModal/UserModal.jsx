import React, { useState, useEffect } from 'react';
import { Modal, Box, FormControl, Input, Typography, Select, MenuItem, Button, Avatar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import image from '../../../assets/joker.png'
import EventEmitter from '../../../utils/EventEmitter'

export default function UserModal() {
  const [openModal, setModalOpen] = useState(false);
  const modalOpen = () => {
    setModalOpen(true);
  };
  const modalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const onAdd = (data) => {
      modalOpen()

    }

    const addListener = EventEmitter.addListener(
      "searchUser",
      onAdd
    );
    return () => {
      addListener.remove();
    };

  }, [])





  const [status, setStatus] = React.useState('');
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
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
          Student Details
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
          Student ID
          <Input placeholder="19104903" style={{ width: 172 }} />
          <CheckCircleIcon
            sx={{
              position: 'absolute',
              left: '159px',
              top: '50%',


              color: '#57AE5B',
              width: '15px',
            }}
          />
        </FormControl>
        <FormControl
          variant="standard"
          sx={{
            position: 'absolute',
            left: ' 250px',
            top: '196px',

            fontFamily: 'Lato',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '15px',
            lineHeight: '23px',
            color: '#05400A',
          }}
        >
          School
          <Input placeholder="Sample" style={{ width: 172 }} />
          <CheckCircleIcon
            sx={{
              position: 'absolute',
              left: '159px',
              top: '29px',
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
            top: '259px',

            fontFamily: 'Lato',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '15px',
            lineHeight: '23px',
            color: '#05400A',
          }}
        >
          Department
          <Input
            placeholder="Sample"
            sx={{
              width: '105px',
            }}
          />
          <CheckCircleIcon
            sx={{
              position: 'absolute',
              left: '92px',
              top: '29px',
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
            left: ' 185px',
            top: '259px',

            fontFamily: 'Lato',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '15px',
            lineHeight: '23px',
            color: '#05400A',
          }}
        >
          Course
          <Input
            placeholder="Sample"
            sx={{
              width: '105px',
            }}
          />
          <CheckCircleIcon
            sx={{
              position: 'absolute',
              left: '92px',
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
            left: ' 317px',
            top: '259px',

            fontFamily: 'Lato',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '15px',
            lineHeight: '23px',
            color: '#05400A',
          }}
        >
          Year
          <Input
            placeholder="Sample"
            sx={{
              width: '105px',
            }}
          />
          <CheckCircleIcon
            sx={{
              position: 'absolute',
              left: '92px',
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
            top: '320px',

            fontFamily: 'Lato',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '15px',
            lineHeight: '23px',
            color: '#05400A',
          }}
        >
          Firstname
          <Input
            placeholder="Sample"
            sx={{
              width: '105px',
            }}
          />
          <CheckCircleIcon
            sx={{
              position: 'absolute',
              left: '92px',
              top: '29px',
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
            left: ' 185px',
            top: '320px',

            fontFamily: 'Lato',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '15px',
            lineHeight: '23px',
            color: '#05400A',
          }}
        >
          Middlename
          <Input
            placeholder="Sample"
            sx={{
              width: '105px',
            }}
          />
          <CheckCircleIcon
            sx={{
              position: 'absolute',
              left: '92px',
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
            left: ' 317px',
            top: '320px',

            fontFamily: 'Lato',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '15px',
            lineHeight: '23px',
            color: '#05400A',
          }}
        >
          Lastname
          <Input
            placeholder="Sample"
            sx={{
              width: '105px',
            }}
          />
          <CheckCircleIcon
            sx={{
              position: 'absolute',
              left: '92px',
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
            left: ' 50px',
            top: '384px',

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
            placeholder="sample@sample.sample"
            sx={{
              width: '372px',
            }}
          />
          <CheckCircleIcon
            sx={{
              position: 'absolute',
              left: '358px',
              top: '29px',
              /* Primary/Primary 400 */
              color: '#57AE5B',
              width: '15px',
            }}
          />
          <p
            style={{
              marginTop: '10px',
            }}
          >
            Verification Status
          </p>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, top: "63%", marginLeft: "10%", minWidth: "70%" }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={status}
            onChange={handleChange}
            sx={{ color: status === "VERIFIED" ? 'green' : 'red', marginLeft: "10%" }}
          >
            <MenuItem value="" />
            <MenuItem value='VERIFIED'>VERIFIED</MenuItem>
            <MenuItem value='UNVERIFIED'>UNVERIFIED</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="success"
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
          }}
        >
          UPDATE
        </Button>
        <Button
          variant="contained"
          color="success"

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
          }}
        >
          REMOVE
        </Button>
      </Box>
    </Modal>
  )

}
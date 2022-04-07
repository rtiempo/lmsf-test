import * as React from 'react';
import {
  Grid,
  MenuItem,
  Backdrop,
  Modal,
  Fade,
  Input,
  Button,
  Stack,
  Toolbar,
  Drawer,
  List
} from '@mui/material';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import BookIcon from '@mui/icons-material/Book';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LinkIcon from '@mui/icons-material/Link';
import FeedIcon from '@mui/icons-material/Feed';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  USCLogo,
  Header,
  MenuBar,
  ProfileTypo,
  DataTypo,
  MyProfile,
  Bachelor,
  SchoolOf,
  DepartmentOf,
  Verified,
  Password
} from './NavigationBar.styles';
import profile from '../../assets/joker.jpg';
import logo from '../../assets/University-of-San-Carlos-Logo.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '45%',
  bgcolor: 'background.paper',
  border: '1px solid #fff',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px'
};

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // For mobile Menu
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openPassword, setOpenPassword] = React.useState(false);
  const handleOpenPassword = () => setOpenPassword(true);
  const handleClosePassword = () => setOpenPassword(false);
  // Drawer
  // For profileModal
  const renderProfileModalID = 'Profile-Modal';
  const renderProfileModal = (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      id={renderProfileModalID}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <MyProfile
            id="transition-modal-title"
            variant="h6"
            component="h1"
        
          >
            MY PROFILE
          </MyProfile>
          <Divider sx={{ backgroundColor: '#0E5814' }} />
          <Box alignItems="center" justifyContent="center" display="flex">
            <Grid item>
              <Bachelor
                id="transition-modal-description"
                component="h3"
              >
                BACHELOR OF SCIENCE IN COMPUTER SCIENCES
              </Bachelor>
            </Grid>
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            sx={{ mt: -2 }}
          >
            <Grid item>
              <SchoolOf
                id="transition-modal-description"
            >
                SCHOOL OF ARTS AND SCIENCES
              </SchoolOf>
            </Grid>
          </Box>
          <Box
            alignItems="center"
            justifyContent="flex-start"
            sx={{ mt: -2, pl: 5 }}
          >
            <Grid item>
              <DepartmentOf
                id="transition-modal-description"
              >
                DEPARTMENT OF COMPUTER INFORMATION SCIENCES AND MATHEMATICS
              </DepartmentOf>
            </Grid>
          </Box>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Grid container maxWidth="100%">
              <Grid item>
                <img src={profile} alt="Avatar" width="130px" />
              </Grid>
              <Grid item p={2} ml={2}>
                <ProfileTypo>FULL NAME</ProfileTypo>
                <ProfileTypo>STUDENT ID</ProfileTypo>
                <ProfileTypo>EMAIL</ProfileTypo>
                <ProfileTypo>YEAR</ProfileTypo>
                <ProfileTypo>STATUS</ProfileTypo>
              </Grid>
              <Grid item p={2} ml={2}>
                <DataTypo>Victoriano Moya</DataTypo>
                <DataTypo>19104903</DataTypo>
                <DataTypo>19104903@usc.edu.ph</DataTypo>
                <DataTypo>3</DataTypo>
                <Verified >
                  Verified
                </Verified>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
  // Modal Change Password

  const renderChangePasswordID = 'Change-Password';
  const renderChangePassword = (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openPassword}
      onClose={handleClosePassword}
      id={renderChangePasswordID}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={openPassword}>
        <Box sx={style}>
          <Password
            id="transition-modal-title"
            variant="h6"
            component="h1"
          >
            CHANGE PASSWORD
          </Password>
          <Box alignItems="center" display="flex" justifyContent="flex-end">
            <CloseIcon
              sx={{ marginTop: '-35px', color: '#9E9E9E', cursor: 'pointer' }}
              onClick={handleClosePassword}
            />
          </Box>
          <Divider sx={{ backgroundColor: '#CFCFCF', mt: 2 }} />

          <Box alignItems="center" justifyContent="flex-start" display="flex">
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ width: '470px', p: 5 }}
            >
              <Input
                sx={{ width: '470px' }}
                type="password"
                placeholder="Old Password"
              />
            </Box>
          </Box>
          <Box alignItems="center" justifyContent="flex-start" display="flex">
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ width: '470px', p: 5, mt: -5 }}
            >
              <Input
                sx={{ width: '470px' }}
                type="password"
                placeholder="New Password"
              />
            </Box>
          </Box>
          <Box alignItems="center" justifyContent="flex-start" display="flex">
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ width: '470px', p: 5, mt: -5 }}
            >
              <Input
                sx={{ width: '470px' }}
                type="password"
                placeholder="Confirm Password"
              />
            </Box>
          </Box>
          <Box
            justifyContent="flex-end"
            display="flex"
            alignItems="center"
            sx={{ paddingRight: '40px' }}
          >
            <Button
              variant="contained"
              sx={{
                width: '200px',
                backgroundColor: '#0E5814'
              }}
            >
              CHANGE
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
  // For Profile Menu
  const ProfileMenuId = 'Profile-Menu';
  const renderProfileMenu = (
    <Menu
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      id={ProfileMenuId}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0
          }
        }
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={handleOpen}>
        <AccountCircleIcon sx={{ marginRight: '10px', color: '#0E5814' }} /> My
        Profile
      </MenuItem>

      <MenuItem component={Link} to="/bookshelf">
        <BookIcon sx={{ marginRight: '10px', color: '#0E5814' }} />
        Bookshelf
      </MenuItem>
      <MenuItem onClick={handleOpenPassword}>
        <VpnKeyIcon sx={{ marginRight: '10px', color: '#0E5814' }} /> Change
        Password
      </MenuItem>
      <MenuItem component={Link} to ="/">
        <LogoutIcon sx={{ marginRight: '10px', color: '#0E5814' }} /> Logout
      </MenuItem>
    </Menu>
  );

  // For mobile Responsive
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }));
  const theme = useTheme();
  const drawerWidth = '100%';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Toolbar maxWidth="100%">
      <Box justifyContent="space-between" alignItems="center" spacing={2}>
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          id={mobileMenuId}
          keepMounted
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
          sx={{ lineHeight: '50px' }}
        >
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth
              }
            }}
            variant="persistent"
            anchor="right"
            open={isMobileMenuOpen}
          >
            <DrawerHeader>
              <IconButton onClick={handleMobileMenuClose}>
                {theme.direction === 'rtl' ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon sx={{ color: '#0E5814' }} />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <Box display="grid" justifyContent="center" alignItems="center">
              <List>
                <MenuItem>
                  <HomeIcon sx={{ marginRight: '20px', color: '#0E5814' }} />{' '}
                  Home
                </MenuItem>
                <MenuItem sx={{ marginTop: '10px' }}>
                  <InfoIcon sx={{ marginRight: '20px', color: '#0E5814' }} />{' '}
                  About
                </MenuItem>
                <MenuItem sx={{ marginTop: '10px' }}>
                  <LinkIcon sx={{ marginRight: '20px', color: '#0E5814' }} />{' '}
                  Linkages
                </MenuItem>
                <MenuItem sx={{ marginTop: '10px' }}>
                  <FeedIcon sx={{ marginRight: '20px', color: '#0E5814' }} />{' '}
                  News
                </MenuItem>
                <MenuItem sx={{ marginTop: '10px' }}>
                  <LiveHelpIcon
                    sx={{ marginRight: '20px', color: '#0E5814' }}
                  />{' '}
                  FAQS
                </MenuItem>
              </List>
            </Box>
          </Drawer>
        </Menu>
      </Box>
    </Toolbar>
  );

  return (
    <Grid container maxWidth="100%">
      <Box sx={{ flexGrow: 1 }}>
        <Header
          display="flex"
          justifyContent="space-between"
          spacing={2}
          sx={{ marginTop: '-20px' }}
        >
          <Grid item>
            <USCLogo src={logo} />
          </Grid>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <MenuItem component={Link} to="/homepage">
              <Typography>Home</Typography>
            </MenuItem>
            <MenuItem>
              <Typography>About</Typography>
            </MenuItem>
            <MenuItem>
              <Typography>Linkages</Typography>
            </MenuItem>
            <MenuItem>
              <Typography>News</Typography>
            </MenuItem>
            <MenuItem>
              <Typography>FAQs</Typography>
            </MenuItem>
            <MenuItem>
              <Typography>
                <BookmarksIcon sx={{ color: '#0E5814' }} />
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography>
                <AccountCircleIcon
                  onClick={handleClick}
                  sx={{ color: '#0E5814' }}
                  fontSize="large"
                />
              </Typography>
            </MenuItem>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              onClick={handleMobileMenuOpen}
              aria-haspopup="true"
              color="inherit"
            >
              <MenuBar
                sx={{ color: '#0E5814', fontSize: '30px', marginTop: '-10px' }}
              />
            </IconButton>
          </Box>
        </Header>

        {renderProfileMenu}
        {renderMobileMenu}
        {renderProfileModal}
        {renderChangePassword}
      </Box>
    </Grid>
  );
}

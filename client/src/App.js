import React, { useState } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { Grid, Typography, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ClassIcon from '@mui/icons-material/Class';
import Users from './components/Users/Users'
import Books from './components/Books/Books';
import Journals from './components/Journals/Journals';
import AddBooks from './components/Books/AddBooks';
import Administrator from './components/Users/Administrator';
import UpdateBooks from './components/Books/UpdateBooks';
import AddJournals from './components/Journals/AddJournals';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Homepage from './pages/Homepage/Homepage'
import UpdateJournal from './components/Journals/UpdateJournals'
// import BookDetails from './pages/BookDetailsPage/BookDetailsPage';
// import Bookshelf from './pages/BookDetailsPage/BookDetailsPage'
import route from './constants/route';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {

  const superadminpath = window.location.pathname.substr(window.location.pathname.indexOf("/")).slice(0, 12)
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const sideBar = [
    {
      path: '/superadmin/users',
      text: 'Users',
      icon: <PeopleAltIcon style={{ color: '#FFFFFF' }} />
    },
    {
      path: '/superadmin/books',
      icon: <LibraryBooksIcon style={{ color: '#FFFFFF' }} />,
      text: 'Books'
    },
    {
      path: '/superadmin/journals',
      icon: <ClassIcon style={{ color: '#FFFFFF' }} />,
      text: 'Journals'
    }
  ]

  const routes = [


    // Superadmin routes
    // side bar routes
    {
      path: '/superadmin/users',
      main: Users
    },
    {
      path: '/superadmin/books',
      main: Books
    },
    {
      path: '/superadmin/journals',
      main: Journals
    },
    // end sidebar routes

    // Books
    {
      path: '/superadmin/book/addbooks',
      main: AddBooks
    },
    {
      path: '/superadmin/book/update-books',
      main: UpdateBooks
    },
    // Journals
    {
      path: '/superadmin/journal/add-journals',
      main: AddJournals
    },

    {
      path: '/superadmin/journal/update-journals',
      main: UpdateJournal
    },

    // Users
    {
      path: '/superadmin/user/administrators',
      main: Administrator
    }


  ]
  const [active, setActive] = useState('Users')
  return (
    <>
      {

        superadminpath !== '/superadmin/'  ?

          <BrowserRouter>
            <Switch>
              <Route exact path={route.LOGIN} component={Login} />
              <Route exact path={route.SIGNUP} component={Signup} />
              <Route exact path={route.HOME} component={Homepage} />
              {/* <Route exact path={route.BOOKDETAILSPAGE} component={BookDetails} /> */}
              {/* <Route exact path={route.BOOKSHELF} component={Bookshelf} /> */}
            </Switch>
          </BrowserRouter>

          :

            <BrowserRouter>
              <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open} style={{ background: 'white' }}>
                  <Toolbar>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      edge="start"
                      sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                      <MenuIcon style={{ color: 'black' }} />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" style={{ color: 'black' }}>
                      USC Library Management
                    </Typography>
                  </Toolbar>
                </AppBar>
                <Drawer
                  sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                      width: drawerWidth,
                      boxSizing: 'border-box',
                      background: '#0E5814'
                    },
                  }}
                  variant="persistent"
                  anchor="left"
                  open={open}
                >
                  <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                      {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                  </DrawerHeader>

                  <Grid container mb={2}>
                    <Grid item ml={5}>
                      <Typography style={{
                        fontFamily: 'Raleway',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '30px',
                        lineHeight: '35px',
                        color: '#FFFFFF'
                      }}>
                        USC D'Lib
                      </Typography>
                      <Grid item ml={1.5}>
                        <Typography style={{

                          fontFamily: 'Lato',
                          fontStyle: 'italic',
                          fontWeight: 400,
                          fontSize: '13px',
                          lineHeight: '18px',
                          color: '#FFFFFF',
                        }}>
                          Super Administrator
                        </Typography>

                      </Grid>
                      <Grid item mt={2.3}>
                        <Divider style={{ border: ' 1px solid rgba(255, 255, 255, 0.3)' }} />
                      </Grid>
                    </Grid>
                  </Grid>
                  <List>
                    {sideBar.map((row) => (
                      <Link to={row.path} style={{ textDecoration: 'none', color: '#FFFFFF' }} onClick={() => setActive(row.text)}>
                        <ListItem button style={{ background: active === row.text ? 'linear-gradient(270deg, rgba(196, 196, 196, 0) 0%, rgba(247, 247, 247, 0.5) 100%)' : '' }} >
                          <ListItemIcon>
                            {row.icon}
                          </ListItemIcon>
                          <ListItemText primary={row.text} />
                        </ListItem>
                      </Link>
                    ))}

                  </List>


                </Drawer>
                <Main open={open}>
                    
                  <DrawerHeader />
                  {routes.map((router) => (

                    <Route
                      path={router.path}
                      exact={router.exact}
                      component={router.main}
                    />
                  ))}
                </Main>
              </Box>
            </BrowserRouter> 
      }

    </>
  );
}
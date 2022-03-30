import React from 'react';
import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Login,
  Signup,
  Search,
  Admin,
  Books,
  UploadBook,
  UploadArticle,

  Homepage,
  SuperAdmin
} from '../../pages';
// import BooksAdmin from './pages/Books/BooksAdmin';
// import routes from './constants/route';
// import Bookshelf from './components/Bookshelf/Bookshelf';
import Journals from '../Journals/Journal/Journal';
// import UpdateJournals from './components/Journals/UploadArticle/UploadArticle'
// import BookDetailsPage from './pages/BookDetailsPage/BookDetailsPage';
import PeopleIcon from '@mui/icons-material/People';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Administrator from '../Tab/UserTab';


const drawerWidth = 240;

const theme = createTheme({
    typography: {
      h1: { fontFamily: 'Raleway' },
      h2: { fontFamily: 'Raleway' },
      h3: { fontFamily: 'Raleway' },
      h4: { fontFamily: 'Raleway' },
      h5: { fontFamily: 'Oxygen' },
      h6: { fontFamily: 'Oxygen' },
      subtitle1: { fontFamily: 'Lato' },
      subtitle2: { fontFamily: 'Lato' },
      body1: { fontFamily: 'Lato' },
      body2: { fontFamily: 'Lato' },
      button: { fontFamily: 'Lato' },
      caption: { fontFamily: 'Lato' },
      overline: { fontFamily: 'Lato' }
    }
  });

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
  })
);

const route = [
  {
    text: 'Users',
    icon: <PeopleIcon sx={{ color: 'white' }} />,
    path: '/superadmin/users',
    main: Administrator,
  },
  {
    text: 'Books',
    icon: <LibraryBooksIcon sx={{ color: 'white' }} />,
    path: '/superadmin/books',
    main: Administrator,
  },
  {
    text: 'Journals',
    icon: <CollectionsBookmarkIcon sx={{ color: 'white' }} />,
    path: '/superadmin/journals',
    main: Journals,
  },
];



function DrawerContainer () {
    const history = useHistory();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  

    return (
        <>
         <div className='main'>
            <AppBar position="fixed" open={open}>
              <Toolbar sx={{ backgroundColor: 'white', color: '#0E5814' }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    mr: 2,
                    ...(open && {
                      display: 'none',
                    }),
                  }}
                >
                  <ChevronRightIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  HOME
                </Typography>
                <IconButton
                  color="inherit"
                  sx={{
                    position: 'absolute',
                    left: '94%',
                    right: '2.15%',
                    top: '30%',
                    bottom: '94.92%',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>

            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                  backgroundColor: '#0E5814',
                  color: 'white',
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}

            >
              <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'ltr' ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </DrawerHeader>
              <List>
                <p
                  style={{
                    color: '#FFFFFF',
                    marginLeft: '-5px',
                    position: 'absolute',
                    width: '140px',
                    height: '35px',
                    left: '50px',
                    top: '-30px',
                    fontFamily: 'Raleway',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: '170%',
                    lineHeight: '35px',
                  }}
                >
                  USC-DLib
                </p>
                <p
                  style={{
                    fontFamily: 'Lato',
                    fontWeight: 'normal',
                    fontSize: '13px',
                    lineHeight: '18px',
                    /* identical to box height */
                    marginLeft: '50px',
                    color: '#FFFFFF',
                  }}
                >
                  Super Administrator
                </p>
              </List>
              <Divider
                sx={{
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  marginLeft: '23px',
                  width: '11rem',
                  marginTop: '20px',
                }}
              />
              <List
                sx={{
                  marginTop: '3rem',
                }}
              >
                {route.map((item) => (
                  <Link to={item.path} style={{ textDecoration: 'none', color: 'white' }}>
                    <ListItem
                      button
                      key={item.text}

                    >
                      <ListItemIcon sx={{ color: 'white', marginLeft: '2rem' }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  </Link>
                ))}
              </List>

            </Drawer>

            <div className="content" style={{marginLeft: '15rem', marginTop: '5rem'}}>
              <Main open={open}>
                {route.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </Main>
            </div>

          </div>

        </>
    )
}

export default DrawerContainer
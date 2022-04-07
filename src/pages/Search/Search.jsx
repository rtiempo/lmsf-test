import React from 'react';
import { Typography, Grid, Toolbar } from '@mui/material';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import SourceType from '../../components/SourceType/SourceType';
import PublicationDate from '../../components/PublicationDate/PublicationDate';
import BookCard from '../../components/SearchResults/SearchResults';

// import image1 from '../../assets/book1.png';
// import image2 from '../../assets/book2.png';
// import image3 from '../../assets/book3.png';
// import image4 from '../../assets/book4.png';
import {
    USClogo,
    Menu,
    SearchBar,
    PaperBox,
    WhitePaper,
    Typo,
    DividerHr,
    ElasticCarousel,
    CarouselItems,
} from './Search.styles';
import logo from '../../assets/University-of-San-Carlos-Logo.png';

const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
export default function Search() {
    const [sorted, setSorted] = React.useState('');

    const handleChange = (event) => {
        setSorted(event.target.value);
    };
  
    return (
        <>
            <Grid container>
                <Grid item md={12}>
                    <div style={{ justifyContent: 'center', marginLeft: '10px' }}>
                        <Toolbar variant="regular">
                            <USClogo
                                src={logo}
                                alt="icon"
                                style={{
                                    position: 'absolute',
                                    width: '256px',
                                    height: '128.61px',
                                    left: '69px',
                                    top: '-10px',
                                }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    display: 'flex',

                                    left: '58%',
                                    top: '47%',
                                    right: '70px',
                                }}
                            >
                                <Menu>
                                    <Typography>Home</Typography>
                                </Menu>
                                <Menu>
                                    <Typography>About</Typography>
                                </Menu>
                                <Menu>
                                    <Typography>Linkages</Typography>
                                </Menu>
                                <Menu>
                                    <Typography>News</Typography>
                                </Menu>
                                <Menu>
                                    <Typography>FAQS</Typography>
                                </Menu>
                                <Menu>
                                    <BookmarksIcon sx={{ color: '#0E5814' }} />
                                </Menu>
                                <Menu>
                                    <AccountCircleIcon fontSize="large" sx={{ color: '#0E5814' }} />
                                </Menu>
                            </div>
                        </Toolbar>
                    </div>
                </Grid>
                <Grid item sx={{ marginLeft: '16rem' }}>
                    <div>
                        <SearchBar
                            component="form"
                            sx={{
                                padding: '2px 4px',
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                width: '54rem',
                                height: '3.5rem',
                                marginTop: '4rem',
                                backgroundColor: '#E3F9E5',
                            }}
                        >
                            <InputBase
                                sx={{
                                    ml: 1,
                                    flex: 1,
                                    padding: '20px',
                                }}
                                placeholder="UI/UX"
                            />
                            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon sx={{ color: '#0E5814' }} />
                            </IconButton>
                        </SearchBar>
                        {/* <Divider sx={{ marginTop: "30px" }} /><br /> */}
                     
                        
                        <Typography
                            sx={{
                                color: '#9E9E9E',
                                fontStyle: 'normal',
                                marginTop: '30px',
                                fontWeight: '400',
                                fontSize: '15px',
                                position: 'absolute',
                                left: '24.5%',
                            }}
                        >
                            27 results
                        </Typography>
                       
                    </div>
                </Grid>
                <Box sx={{ width: "130px", marginTop: "150px", marginRight: "10px" }}>
                            <FormControl fullWidth >
                                <InputLabel sx={{ fontSize: "15px" }} id="demo-simple-select-label">Sorted by</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={sorted}
                                    label="Sorted by"
                                    sx={{ fontSize: "15px" }}
                                    onChange={handleChange}
                                >
                                    <MenuItem sx={{ fontSize: "10px" }} value={10}>Date Ascending</MenuItem>
                                    <MenuItem sx={{ fontSize: "10px" }} value={20}>Date Descending</MenuItem>
                                    <MenuItem sx={{ fontSize: "10px" }} value={30}>Relevance</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                <BookCard />
            </Grid>
            <SourceType />
            <PublicationDate />
        </>
    );
};

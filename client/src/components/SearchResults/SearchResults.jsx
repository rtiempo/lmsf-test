import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from  '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';


export default function BookCard() {
    const theme = useTheme();

    return (
        <>
            <Card sx={{marginTop: "20px", marginLeft: "330px",marginRight: "100px", backgroundColor: "#ececec", width: "90%"}}>
                <Card sx={{ display: 'flex', marginTop: "40px", marginLeft: "30px",  marginRight: "30px" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        src={image1}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Don't Make Me Think, Revisited: A Common Sense To Web Usability
          </Typography>
                            <Typography sx={{ marginTop: "20px" }} variant="subtitle1" color="text.secondary" component="div">
                                Steve Krug
          </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <Typography sx={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "14px",
                                color: "#3F9142",
                                lineHeight: "24px",
                                marginLeft: "10px"
                            }} variant="subtitle1" color="text.secondary" component="div">
                                New Riders; United States, December 2013
          </Typography>
                        </Box>
                    </Box>
                </Card>
                <Card sx={{ display: 'flex', marginTop: "30px", marginLeft: "30px",  marginRight: "30px" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        src={image2}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                The Design of Everyday Things
          </Typography>
                            <Typography sx={{ marginTop: "20px" }} variant="subtitle1" color="text.secondary" component="div">
                                Don Norman
          </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <Typography sx={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "14px",
                                color: "#3F9142",
                                lineHeight: "24px",
                                marginLeft: "10px"
                            }} variant="subtitle1" color="text.secondary" component="div">
                                Basic Books; United States, December 2013
          </Typography>
                        </Box>
                    </Box>
                </Card>
                <Card sx={{ display: 'flex', marginTop: "30px", marginLeft: "30px",  marginRight: "30px" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        src={image3}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                About Face: The Essentials of Interactive Design
          </Typography>
                            <Typography sx={{ marginTop: "20px" }} variant="subtitle1" color="text.secondary" component="div">
                                Alan Cooper, Robert Reiman, David Cronin, and Christophel Noessel
          </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <Typography sx={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "14px",
                                color: "#3F9142",
                                lineHeight: "24px",
                                marginLeft: "10px"
                            }} variant="subtitle1" color="text.secondary" component="div">
                                Basic Books; United States, December 2013
          </Typography>
                        </Box>
                    </Box>
                </Card>
                <Card sx={{ display: 'flex', marginTop: "30px" , marginLeft: "30px",  marginRight: "30px"}}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        src={image4}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Thinking, Fast and Slow
          </Typography>
                            <Typography sx={{ marginTop: "20px" }} variant="subtitle1" color="text.secondary" component="div">
                                Daniel Kahneman
          </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <Typography sx={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "14px",
                                color: "#3F9142",
                                lineHeight: "24px",
                                marginLeft: "10px"
                            }} variant="subtitle1" color="text.secondary" component="div">
                                Farrar, Straus and Giroux; United States, December 2011
          </Typography>
                        </Box>
                    </Box>
                </Card>
                <Card sx={{ display: 'flex', marginTop: "30px", marginLeft: "30px",  marginRight: "30px" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        src={image1}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Don't Make Me Think, Revisited: A Common Sense To Web Usability
          </Typography>
                            <Typography sx={{ marginTop: "20px" }} variant="subtitle1" color="text.secondary" component="div">
                                Steve Krug
          </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <Typography sx={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "14px",
                                color: "#3F9142",
                                lineHeight: "24px",
                                marginLeft: "10px"
                            }} variant="subtitle1" color="text.secondary" component="div">
                                New Riders; United States, December 2013
          </Typography>
                        </Box>
                    </Box>
                </Card>
                <Card sx={{ display: 'flex', marginTop: "30px", marginLeft: "30px",  marginRight: "30px" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        src={image1}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Don't Make Me Think, Revisited: A Common Sense To Web Usability
          </Typography>
                            <Typography sx={{ marginTop: "20px" }} variant="subtitle1" color="text.secondary" component="div">
                                Steve Krug
          </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <Typography sx={{
                                fontFamily: "Lato",
                                fontStyle: "normal",
                                fontWeight: "normal",
                                fontSize: "14px",
                                color: "#3F9142",
                                lineHeight: "24px",
                                marginLeft: "10px"
                            }} variant="subtitle1" color="text.secondary" component="div">
                                New Riders; United States, December 2013
          </Typography>
                        </Box>
                    </Box>
                </Card>
                <br /><br />
            </Card>
            <Grid sx={{marginLeft: "320px", marginTop: "30px"}}>
            <Stack spacing={2}>
                <Pagination count={5} size="small" />
            </Stack>
            <br /> <br />
            </Grid>
           
        </>
        
    );
}

import React from 'react';
import { Grid, Box, Toolbar } from '@mui/material';
import Search from '../../components/Search/Search';
import image1 from '../../assets/book1.png';
import image2 from '../../assets/book2.png';
import image3 from '../../assets/book3.png';
import image4 from '../../assets/book4.png';
import { ElasticCarousel, CarouselItems } from './Homepage.styles';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import HomeContent from '../../components/HomeContent/HomeContent';

const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];
const Home = () => (
  <>
    <Grid container maxWidth="100%">
      <Box sx={{ flexGrow: 1 }}>
        <Grid item xs={12}>
          <NavigationBar />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '-50px' }}>
          <Search />
        </Grid>
        <Grid item xs={12}>
          <HomeContent />
        </Grid>
        <Grid
          item
          md={12}
          p={0}
          sx={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '-310px'
          }}
        >
          <Grid container xs={12}>
            <ElasticCarousel
              breakPoints={breakpoints}
              initialActiveIndex={false}
              pagination={false}
            >
              <CarouselItems src={image1} alt="Picture" />
              <CarouselItems src={image2} alt="Picture" />
              <CarouselItems src={image3} alt="Picture" />
              <CarouselItems src={image4} alt="Picture" />
              <CarouselItems src={image1} alt="Picture" />
              <CarouselItems src={image2} alt="Picture" />
              <CarouselItems src={image3} alt="Picture" />
              <CarouselItems src={image4} alt="Picture" />
            </ElasticCarousel>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  </>
);
export default Home;

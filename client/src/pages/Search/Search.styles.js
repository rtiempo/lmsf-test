import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Carousel from 'react-elastic-carousel';

export const USClogo = styled.img`
  @media screen and (max-width: 768px) {
    width: 211px !important;
    height: 114px !important;
    left: 49px !important;
  }
`;
export const Menu = styled(MenuItem)`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SearchBar = styled(Paper)`
  @media screen and (max-width: 768px) {
    width: 457px !important;
    margin-left: -150px !important;
    margin-top: 100px !important;
    height: 50px !important;
  }
`;
export const PaperBox = styled(Box)`
  @media screen and (max-width: 768px) {
    width: 290px !important;
    height: 174px !important;
    margin-top: -30px !important;
  }
`;
export const WhitePaper = styled(Paper)`
  @media screen and (max-width: 768px) {
    width: 290px !important;
    height: 174px !important;
    left: 400px !important;
    margin-top: -30px !important;
  }
`;
export const Typo = styled(Typography)`
  @media screen and (max-width: 768px) {
    font-size: 30px !important;
    top: 23rem !important;
  }
`;
export const DividerHr = styled.hr`
  @media screen and (max-width: 768px) {
    width: 26.3rem !important;
    left: 277px !important;
    top: 385px !important;
  }
`;

export const ElasticCarousel = styled(Carousel)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  margin-top: 20rem;
  @media screen and (max-width: 768px) {
    margin-left: -36rem;
    width: 50% !important;
  }
  .rec.rec-arrow {
    color: #0e5814;
    outline: none !important;
    box-shadow: none !important;
    background-color: inherit;
  }
  .rec.rec-arrow-left {
    margin-left: 10px;
  }
  .rec.rec-arrow-right {
    margin-right: 10px;
  }
  .rec.rec-arrow:hover:enabled {
    background-color: #0e5814;
    color: white;
  }
`;
export const CarouselItems = styled.img`
  width: 200px;
  height: 240px;
  left: 0px;
  top: 0.28px;

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 140px;
  }
`;


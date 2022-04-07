import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';

export const ElasticCarousel = styled(Carousel)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
  margin-top: 20rem;
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
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    margin-top: 14rem
  }
`;
export const CarouselItems = styled.img`
  width: 94%;
  height: 400px;
  left: 0px;
  top: 0.28px;
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
    width: 150px;
    height: 190px;
  }
`;

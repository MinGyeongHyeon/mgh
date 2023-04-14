import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { JpTour } from "../../../const/MenuConst";
import { CjTour } from "../../../const/MenuConst";

const TourPictures = (): JSX.Element => {
  const settings = {
    dots: false
    ,infinite: true
    ,speed: 1300
    ,slidesToShow: 1
    ,slidesToScroll: 1
    ,arrows: true
    ,autoplay: true
    ,autoplaySpeed:2500
  };

  return (
    <div>
      <div style={{ marginLeft: "5%" }}>
      <h2> 일본(오사카) 여행 23.03.11 ~ 23.03.15</h2>
        <Slider {...settings}>
          {
            JpTour.map((obj,number)=>{
              return <img key={number} style={{width:"450px"}} src={process.env.PUBLIC_URL + obj.path} />;
            })
          }
        </Slider>
      </div>
      <br/>
      <div style={{ marginLeft: "5%" }}>
      <h2> 제주도 여행 21.07.16 ~ 21.07.21</h2>
        <Slider {...settings}>
          {
            CjTour.map((obj,number)=>{
              return <img key={number} style={{width:"450px;"}} src={process.env.PUBLIC_URL + obj.path} />;
            })
          }
        </Slider>
      </div>
      <br />
    </div>
  )

}

export default TourPictures;
import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navabr";
import Logo from "../../assests/logoBlack.svg";
import SliderWork from "../../components/homeComponents/sliderWork/SliderWork";
import SearchIcon from "@mui/icons-material/Search";
import slide from "../../assests/slid.svg";
import MostPopularWorker from "../../components/homeComponents/mostPopularWorkers/MostPopularWorker";
import RequestWork from "../../components/serviceComponents/requestWork/RequestWork";
import Footer from "../../components/landingComponents/footer/Footer";
import SliderImage from "../../components/homeComponents/sliderImage/SliderImage";
function Home() {
  return (
    <div className='home'>
      <Navbar logoprop={Logo} color='black' />
      <div className='searchBar'>
        <div className='searchBarContainer'>
          <div className='searchBarinputContainer'>
            <input
              type='text'
              placeholder='ابحث عن الخدمات والعروض!.............'
            />
            <SearchIcon />
          </div>
          <div className='icon'>
            <img src={slide} alt='' />
          </div>
        </div>
      </div>
      <div className='sliderImage'>
        <SliderImage />
      </div>
      <div className='sliderPopularJops'>
        <h1>
          <span>الخدمات</span> الأكثر استخدامًا
        </h1>
        <div className='sliderWorkContainer'>
          <SliderWork />
        </div>
      </div>
      <div className='mostpopularWrokers'>
        <h1>
          <span>أشهر</span> السباكين حواليك
        </h1>
        <div className='mostpopularWrokersConatiner'>
          <MostPopularWorker />
          <MostPopularWorker />
          <MostPopularWorker />
        </div>
      </div>
      <div className='requestWorks'>
        <h1>
          <span>طالبي</span> خدمات السباكة
        </h1>
        <div className='requestWorkContainer'>
          <RequestWork />
          <RequestWork />
          <RequestWork />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;

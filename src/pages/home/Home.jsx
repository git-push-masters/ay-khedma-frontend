import React, { useEffect, useState } from "react";
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
import axiosInstsnce from "../../configs/axiosInstanse";
import { useSelector } from "react-redux";
function Home() {
  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const section = useSelector((state) => state.section.currentSection);
  let sectionId = section.sectionId;
  let sectionName = section.name;
  const getUsers = async () => {
    try {
      const res = await axiosInstsnce.get("/users", {
        params: { sectionId, limit: 10 },
      });
      setUsers(res.data.body);
    } catch (e) {
      console.log(e);
    }
  };
  const getRequests = async () => {
    try {
      const res = await axiosInstsnce.get("/requests", {
        params: { sectionId, limit: 10 },
      });
      setRequests(res.data.body);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUsers();
    getRequests();
  }, [sectionId]);
  console.log(requests);
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
          <span>أشهر</span> {sectionName} حواليك
        </h1>
        <div className='mostpopularWrokersConatiner'>
          {users.map((user) => (
            <MostPopularWorker
              key={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
              phone={user.phone}
              imgUrl={user.avatar}
            />
          ))}
        </div>
      </div>
      <div className='requestWorks'>
        <h1>
          <span>طالبي</span> خدمات السباكة
        </h1>
        <div className='requestWorkContainer'>
          {requests.map((request) => (
            <RequestWork
              key={request.id}
              title={request.title}
              address={request.address}
              description={request.description}
              id={request.id}
              imgUrl={request.thumbnails[0]}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;

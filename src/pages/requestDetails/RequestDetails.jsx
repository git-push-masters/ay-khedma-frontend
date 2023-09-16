import React, { useEffect, useState } from "react";
import "./requestDetails.scss";
import Navbar from "../../components/navbar/Navabr";
import { Carousel } from "../../slider/index";
import MostPopularWorker from "../../components/homeComponents/mostPopularWorkers/MostPopularWorker";
import ReplaceImg from "../../assests/imgs/Rectangle 106.png";
import { useLocation } from "react-router-dom";
import axiosInstsnce from "../../configs/axiosInstanse";
let img;
let slides = [
  <img src={img ? img : ReplaceImg} alt='' />,
  <img src={img ? img : ReplaceImg} alt='' />,
  <img src={img ? img : ReplaceImg} alt='' />,
];

const RequestDetails = () => {
  const requestId = useLocation().pathname.split("/")[2];
  const [request, setRequest] = useState();

  const getRequest = async () => {
    try {
      const res = await axiosInstsnce.get(`/requests/${requestId}`);
      setRequest(res.data.body);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getRequest();
  }, []);
  console.log(request);
  return (
    <div className='RequestDetails'>
      <div className='navbarConatiner'>
        <Navbar />
        <h1 className='title'>تفاصيل عن الخدمة</h1>
      </div>
      <div className='requestDetailsContainer'>
        <div className='requsetDetailsSlider'>
          <div style={{ direction: "ltr" }} className='slider'>
            <Carousel
              slides={slides}
              autoplay={true}
              interval={2000}
              arrows={false}
            />
          </div>
          <div className='sliderTexts'>
            <h1> {request ? request.title : "لا يوجد"}</h1>
            <p>100ج قابلة للنقاش</p>
            <button>تواصل</button>
          </div>
        </div>
        <div className='requestDetailsTexts'>
          <h1>تفاصيل عن الخدمة</h1>
          <p>{request ? request.description : "لا يوجد"}</p>
        </div>
        <div className='requster'>
          <h1>تفاصيل عن طالب الخدمة</h1>
          <MostPopularWorker
            email={request?.User?.email}
            address={request?.User?.address}
            phone={request?.User?.phone}
            name={request?.User?.name}
          />
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;

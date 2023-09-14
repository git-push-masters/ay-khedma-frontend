import React from "react";
import "./Service.scss";
import Navbar from "../../components/navbar/Navabr";
import MosetServices from "../../components/serviceComponents/mostServices/MosetServices";
import img1 from "../../assests/Ic-Roof-Filled.svg";
import img2 from "../../assests/Ic-repair-Filled.svg";
import img3 from "../../assests/ic-hamer-Filled.svg";
import img4 from "../../assests/Ic-Wall-Filled.svg";
import img5 from "../../assests/ic-Door-Filled.svg";
import AllWorkerUsers from "../../components/serviceComponents/allWorkerUsers/AllWorkerUsers";
import RequestWork from "../../components/serviceComponents/requestWork/RequestWork";
import Footer from "../../components/landingComponents/footer/Footer";

const serviceData = [
  {
    id: 1,
    img: img1,
    title: "خدمات المنازل",
    desc:
      "تن با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک اا و متون بلکه",
  },
  {
    id: 2,
    img: img2,
    title: " خدمات السباكة",
    desc:
      "تن با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک اا و متون بلکه",
  },
  {
    id: 3,
    img: img3,
    title: "خدمات النجارة ",
    desc:
      "تن با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک اا و متون بلکه",
  },
  {
    id: 4,
    img: "",
    title: "المزيد  ",
    desc: "",
  },
  {
    id: 5,

    img: img5,
    title: "خدمات التقنيه",
    desc:
      "تن با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک اا و متون بلکه",
  },
  {
    id: 6,
    img: img4,
    title: " خدمات البناء",
    desc:
      "تن با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک اا و متون بلکه",
  },
];
const Service = () => {
  return (
    <div className='serviceContainer'>
      <div className='navbarConatiner'>
        <Navbar />
        <h1 className='title'>الخدمات</h1>
      </div>
      <div className='mostUse'>
        <h1>
          <span>الخدمات</span> الأكثر استخدامًا
        </h1>
        <div className='mostUseContainer'>
          {serviceData.map((item) => (
            <MosetServices
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
      <div className='allWorker'>
        <h1>
          <span>جميع</span> السباكين حواليك
        </h1>
        <div className='allWorkerContainer'>
          <AllWorkerUsers />
          <AllWorkerUsers />
          <AllWorkerUsers />
          <AllWorkerUsers />
          <AllWorkerUsers />
          <AllWorkerUsers />
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
};

export default Service;

import React, { useEffect, useState } from "react";
import "./addRequest.scss";
import axiosInstsnce from "../../configs/axiosInstanse";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
const AddRequest = ({ setOpen }) => {
  const [sections, setSections] = useState([]);
  const [sectionId, setSectionId] = useState();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [durationRange, setDurationRange] = useState("");
  const [thumbnails, setThumbnails] = useState([]);
  const [currentLocation, setCurrentLocation] = useState();
  const [thumbnailPhoto, setThumbnailPhoto] = useState([]);
  const [res, setRes] = useState();
  const userRedux = useSelector((state) => state.user.currentUser);
  const geoLocationJs = () => {
    navigator.geolocation.getCurrentPosition((postion) => {
      const { latitude, longitude } = postion.coords;
      setCurrentLocation({ locationLat: latitude, locationLong: longitude });
    });
  };
  // console.log(userRedux);
  // const locationLat = userRedux?.locationLat;
  // const locationLong = userRedux?.locationLong;
  const request = {
    sectionId,
    title,
    address,
    description,
    minPrice,
    maxPrice,
    durationRange,
    thumbnails,
    ...currentLocation,
  };
  const uploadPhoto = async () => {
    const formData = new FormData();
    Array.from(thumbnailPhoto).forEach((file) => {
      formData.append("thumbnail", file);
    });
    // formData.append("thumbnail", thumbnailPhoto);
    try {
      const res = await axiosInstsnce.post("/thumbnails", formData);
      const url = res.data.url;
      console.log(url);
      setThumbnails(url);
      toast.success(`تم الرفع بنجاح  `);
      geoLocationJs();
    } catch (e) {
      console.log();
      toast.error(e.response.data.msgs[0]);
    }
  };
  console.log(thumbnails);
  const getSections = async () => {
    try {
      const res = await axiosInstsnce.get("/sections");
      console.log(res.data.body);
      setSections(res.data.body);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSections();
    if (thumbnailPhoto.length) {
      uploadPhoto();
    }
  }, [thumbnailPhoto]);

  const sendRequest = async (e) => {
    e.preventDefault();
    try {
      await uploadPhoto();
      const res = await axiosInstsnce.post("requests", request);
      setRes(res);
      toast.success(`تم انشاء الطلب بنجاح `);
      console.log(res.data);
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.msgs[0]);
    }
  };
  console.log(thumbnails);
  if (res) {
    setOpen(false);
    document.body.style.overflow = "auto";
  }
  console.log(request);
  return (
    <div className='addRequest'>
      <div className='addRequestContainer'>
        <form onSubmit={sendRequest}>
          <div className='requestInput'>
            <label htmlFor='typeRequest'>نوع الخدمة</label>
            <select
              id='typeRequest'
              onChange={(e) => setSectionId(e.target.value)}
            >
              <option defaultValue={null}> سباكة , نجارة , .... </option>
              {sections.map((item) => (
                <option key={item.id} value={item.id}>
                  {" "}
                  {item.name}
                </option>
              ))}
              {/* <option value='سباك'> سباك</option>
              <option value='نجار'> نجار</option>
              <option value='جزار'> جزار</option> */}
            </select>
          </div>
          <div className='requestInput'>
            <label htmlFor='titleRequest'>اسم الخدمة</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              id='titleRequest'
              placeholder='ادخل اسم الخدمه'
            />
          </div>
          <div className='priceBox'>
            <div className='requestInputPriceBox'>
              <label htmlFor='minPrice'>الحد الأدنى</label>
              <input
                onChange={(e) => setMinPrice(e.target.value)}
                id='minPrice'
                type='number'
                placeholder='50ج'
              />
            </div>
            <div className='requestInputPriceBox'>
              <label htmlFor='maxPrice'> الحد الأقصى</label>
              <input
                onChange={(e) => setMaxPrice(e.target.value)}
                id='maxPrice'
                type='number'
                placeholder='600ج'
              />
            </div>
          </div>
          <div className='requestInput'>
            <label htmlFor='time'>المدة</label>
            <input
              onChange={(e) => setDurationRange(e.target.value)}
              type='text'
              id='time'
              placeholder='الوقت المتوقع  '
            />
          </div>
          <div className='requestInput'>
            <label htmlFor='address'>العنوان</label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type='text'
              id='address'
              placeholder='ادخل العنوان'
            />
          </div>
          <div className='requestInput'>
            <label htmlFor='details'>تعريف بسيط عن تفاصيل الخدمة</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              type='text'
              id='details'
              raw={15}
              placeholder='تصليح أمبوبة بوتجاز .....'
            />
          </div>
          <div className='requestInput'>
            <label htmlFor='thumnail'>
              <UploadFileIcon />
              ارفع صور للخدمه
            </label>
            <input
              type='file'
              id='thumnail'
              style={{ display: "none" }}
              onChange={(e) => setThumbnailPhoto(e.target.files)}
              required={true}
              multiple={true}
            />
          </div>
          <div className='buttonsRequest'>
            {" "}
            <button className='btn right' type='submit'>
              طلب
            </button>
            <button
              className='btn left'
              onClick={() => {
                setOpen(false);
                document.body.style.overflow = "auto";
              }}
            >
              نسيان
            </button>
          </div>
        </form>
        <ToastContainer position='top-right' />
      </div>
    </div>
  );
};

export default AddRequest;

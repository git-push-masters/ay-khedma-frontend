import React, { useEffect, useState } from "react";
import "./addRequest.scss";
import axiosInstsnce from "../../configs/axiosInstanse";
import UploadFileIcon from "@mui/icons-material/UploadFile";
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
  const [thumbnailPhoto, setThumbnailPhoto] = useState({});
  const userRedux = useSelector((state) => state.user.currentUser);
  const locationLat = userRedux.locationLat;
  const locationLong = userRedux.locationLong;
  const request = {
    sectionId,
    title,
    address,
    description,
    minPrice,
    maxPrice,
    durationRange,
    thumbnails,
    locationLat,
    locationLong,
  };
  const uploadPhoto = async (file) => {
    const formData = new FormData();
    formData.append("thumbnail", file);
    try {
      const res = await axiosInstsnce.post("/thumbnails", formData);
      const url = res.data.url;
      console.log(url);
      return Promise.resolve(url);
    } catch (e) {
      console.log(e);
      return Promise.reject("Error uploading img");
    }
  };

  const getSections = async () => {
    try {
      const res = await axiosInstsnce.get("/sections");
      console.log(res.data.body);
      setSections(res.data.body);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(thumbnailPhoto);

  useEffect(() => {
    getSections();
    // uploadPhoto();
  }, []);

  const sendRequest = async (e) => {
    e.preventDefault();
    try {
      // if (thumbnailPhoto?.files?.length > 0) {
      //   await thumbnailPhoto.files.forEach(async (file) => {
      //     const uri = await uploadPhoto(file);
      //     setThumbnails((curr) => [...curr, uri]);
      //   });
      // }

      await uploadPhoto();
      const res = await axiosInstsnce.post("requests", request);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

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
      </div>
    </div>
  );
};

export default AddRequest;

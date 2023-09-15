import React, { useContext, useEffect, useState } from "react";
import "./userRegisterInfo.scss";
import Input from "../../input/Input";
import GoogleAndApple from "../GoogleandApple/GoogleAndApple";
import SpechialButton from "../../specialButton/SpechialButton";
import { MultiStepContext } from "../../../authstatemang/StepContext";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import axiosInstsnce from "../../../configs/axiosInstanse";
import { useDispatch } from "react-redux";

const UserRegisterInfo = () => {
  const [inputsTarget, setInputTarget] = useState({
    name: "",
    phone: "",
    email: "@gmail.com",
    password: "",
  });
  const [idPhoto, setIdPhoto] = useState();
  const [selected, setSelected] = useState("acceptor");
  const [identity, setIdentity] = useState();
  const { setUserData, setCurrentStep } = useContext(MultiStepContext);

  const user = { ...inputsTarget, identity };
  console.log(user);
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "ادخل اسمك...",
      // erroMessage:
      //   "يجب أن يتكون اسم المستخدم من 3 إلى 16 حرفًا ويجب ألا يتضمن أي حرف خاص!",
      label: "اسم المستخدم",
      // pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "phone",
      type: "text",
      placeholder: "ادخل رقم الهاتف الخاص بك",
      // errorMessage: "",
      label: "رقم الهاتف",
      //   pattern: "",
      required: true,
      minLength: 11,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "ادخل الإيميل الخاص بك",
      // errorMessage: "يجب أن يكون عنوان بريد إلكتروني صالحًا!",
      label: "الإيميل",
      //   pattern: "",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "يجب أن تكون كلمة مرورك من 8 ألي 15 حرفا و بها حروف مميزه",
      // errorMessage: "يجب أن تكون كلمة مرورك من 8 ألي 15 حرفا",
      label: "كلمة المرور",
      // pattern:
      //   "(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
  ];

  const handleChange = (e) => {
    setInputTarget({ ...inputsTarget, [e.target.name]: e.target.value });
  };
  const handleChangeSelect = (e) => {
    const val = e.target.value;
    setSelected(val);
  };
  const uploadPhoto = async () => {
    const formData = new FormData();
    formData.append("identity", idPhoto[0]);
    try {
      const res = await axiosInstsnce.post("/identities", formData);
      const url = res.data.url;
      console.log(url);
      setIdentity(url);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (idPhoto) {
      const upload = async () => {
        await uploadPhoto();
      };
      upload();
    }
  }, [idPhoto]);
  const handleClick = async (e) => {
    e.preventDefault();
    await setUserData(user);
    console.log(identity);
    if (selected === "acceptor") {
      setCurrentStep(3);
      console.log("step 3 called");
    } else {
      setCurrentStep(2);
      console.log("step 2 called");
    }
  };

  return (
    <form onSubmit={handleClick} className='userRegisterInfo'>
      {inputs.map((input) => (
        <Input
          key={input.id}
          value={inputsTarget[input.name]}
          onChange={handleChange}
          {...input}
        />
      ))}
      <div className='selection'>
        <label>اختار نوع الحساب </label>
        <select onChange={handleChangeSelect}>
          <option disabled defaultValue={null}>
            اختار
          </option>
          <option value={"acceptor"}>طالب خدمه</option>
          <option value={"creator"}>مقدم خدمه</option>
        </select>
        <div className='idPhoto'>
          <label htmlFor='idPhoto'>ادخل صورة البطاقة الشخصية</label>
          <input
            style={{ display: "none" }}
            type='file'
            onChange={(e) => setIdPhoto(e.target.files)}
            id='idPhoto'
            required={true}
            multiple={true}
          />
          <label style={{ cursor: "pointer" }} htmlFor='idPhoto'>
            <UploadFileIcon />
          </label>
        </div>
      </div>
      <SpechialButton type='submit' text='تسجيل الدخول' />
      <GoogleAndApple />
    </form>
  );
};

export default UserRegisterInfo;

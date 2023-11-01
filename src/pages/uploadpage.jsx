
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { exists } from "../redux/actions/user";
import { Label, InputBox, BoxContainer, SubmitButton } from '../components';
import { ColorPicker, } from 'antd';
import { companyDetail } from "../redux/actions";

export const UploadPage = () => {
  const company = useSelector(state => state.company.name);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const [logo, setLogo] = useState('');
  const [exsit, setExist] =useState(0);
  
  const [star, setStar] = useState('#1677ff');
  const [button, setButton] = useState('#1677ff');
  const [manager1, setManager1] = useState('');
  const [manager2, setManager2] = useState('');
  const [manager3, setManager3] = useState('');
  const [manager4, setManager4] = useState('');
  const [goolgeId, setGoogleId] = useState('');
  const toast = useRef(null);
  const onSubmitUpload = () => {
    companyDetail(
      {
        company: params.id,
        star: star,
        button: button,
        manager: [manager1, manager2, manager3, manager4],
        googleId: 'http://search.google.com/local/writereview?placeid=' + goolgeId,
        logo: logo,
      }
    );
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setLogo(reader.result);
    };
  };
  useEffect(() => {
    console.log(params.id)
    exists(
      params.id,
      (result) => setExist(exsit + 1),
      (result) => {
        setLogo(result.logo); 
        console.log(result.logo)
        setStar(result.star);
        setButton(result.button);
        setGoogleId(result.google.split('=')[1]);
        setManager1(result.managers[0])
        setManager2(result.managers[1])
        setManager3(result.managers[2])
        setManager4(result.managers[3])
      }
    );
  }, [params.id]);

  return (
    <BoxContainer>
      <br />
      {logo !== undefined && <img src={logo} style={{width: '350px'}} alt="logo" />}
      <br />
      <br />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      
      <Label text="Star Color" />
      <ColorPicker 
        value={star}
        onChangeComplete={(color) => {
          setStar(color.toHexString());
        }}
        showText 
      />
      <Label text="Button Color" />
      <ColorPicker 
        value={button}
        onChangeComplete={(color) => {
          setButton(color.toHexString());
        }}
        showText 
      />
      <Label text="Manager1" />
      <InputBox value={manager1} func={setManager1} />
      <Label text="Manager2" />
      <InputBox value={manager2} func={setManager2} />
      <Label text="Manager3" />
      <InputBox value={manager3} func={setManager3} />
      <Label text="Manager4" />
      <InputBox value={manager4} func={setManager4} />
      <Label text="Google review placeID" />
      <InputBox value={goolgeId} func={setGoogleId} />
      <SubmitButton button={button} onClick={onSubmitUpload}>
        Upload
      </SubmitButton>
    </BoxContainer>
  );
};
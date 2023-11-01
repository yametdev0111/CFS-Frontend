import Rating from '@mui/material/Rating';
import {
  InputBox,
  Label,
  SubmitButton,
  BoxContainer,
} from "../components";
import { useDispatch } from "react-redux";

export const Homepage = ( props ) => {
  const dispatch = useDispatch();
  const { rating, setRating, review, setReview, logo, star, button } = props;

  const onSubmit = () => {
    if(!rating){
      alert("Please rate the services.");
      return;
    }
    dispatch({
      type: "Status",
      payload: ( rating === 5 ? 1 : 2 ),
    })
  }

  return (
    <BoxContainer>
      <br />
      {logo !== undefined && <img src={logo} style={{width: '65%'}} alt="logo" />}
      <br />
      <br />
      <Label text="How was our service today?" lineHeight={0} />
      <Label text="(choose 1 to 5 stars)" lineHeight={0} fontSize={15} fontWeight={500} />
      <Rating
        value={rating}
        size="large"
        onChange={(event, newValue) => {
          setRating(newValue || 0);
        }}
        style={{ color: star, fontSize: 44 }}
      />
      <br />
      <br />
      <Label text="Tell us about your experience. What did you like? What could we do better?" />
      
      <InputBox value={review} func={setReview} multiline placeholder="Additional comments or suggestions"/>

      <SubmitButton onClick={onSubmit} button={button}>
        Submit
      </SubmitButton>
    </BoxContainer>
  );
};
import Rating from '@mui/material/Rating';
import {
  InputBox,
  Label,
  LabelSpace,
  SubmitButton,
  BoxContainer,
} from "../components";
import { useDispatch } from "react-redux";

export const Homepage = ( props ) => {
  const dispatch = useDispatch();
  const { rating, setRating, review, setReview } = props;

  const onSubmit = () => {
    if(!rating){
      alert("Please rate any score");
      return;
    }
    // send({ rating: rating, review: review })
    dispatch({
      type: "Status",
      payload: ( rating === 5 ? 1 : 2 ),
    })
  }

  return (
    <BoxContainer>
      <LabelSpace text="How was our service today?"/>
      <LabelSpace text="Choose 1 to 5 stars."/>
      <Rating
        value={rating}
        size="large"
        onChange={(event, newValue) => {
          setRating(newValue || 0);
        }}
        style={{ color: "#FFC000", fontSize: 44 }}
      />

      <Label text="Tell us about your experience. What did you like? What could we do better?" />
      
      <InputBox value={review} func={setReview} multiline placeholder="Additional comments or suggestions"/>

      <SubmitButton onClick={onSubmit}>
        Submit
      </SubmitButton>
    </BoxContainer>
  );
};
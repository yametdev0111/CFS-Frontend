import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../assets/images/logo.png"
import Rating from '@mui/material/Rating';
import { send } from "../redux/actions";
import {
  DrawerHeader, InputBox, Label, LinkItem, PageContainer, SubmitButton, BoxContainer, PageBox } from "../components";

const Homepage = () => {
  // const colors = ['#ffea00', '#ba000d', '#ff7500', '#ffea00', '#a0ff00', '#06ff00'];
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const onSubmit = () => {
    if(!rating){
      alert("Please rate any score");
      return;
    }
    send({ rating: rating, review: review })
    navigate( rating === 5 ? "/google" : "/detail" );
  }

  return (
    <PageContainer>
      <PageBox>
        <DrawerHeader sx={{ justifyContent: "center", mt: 1 }}>
          <LinkItem to="/"><img src={LogoIcon} alt="Logo" /></LinkItem>
        </DrawerHeader>
        <BoxContainer>
          <Label text="How was our service?" />
          
          <Rating
            value={rating}
            size="large"
            onChange={(event, newValue) => {
              setRating(newValue || 0);
            }}
            style={{ color: "#FFC000" }}
          />

          <Label text="Tell us about your experience. What did you like? What could we do better?" />
          
          <InputBox value={review} func={setReview} />

          <SubmitButton
            variant="contained"
            fullWidth
            disableElevation
            sx={{
              borderRadius: "10px",
              background: "linear-gradient(92deg, #6C13B6 35.74%, #6166C5 100%)",
              mt: 1,
              color: "#FFF",
            }}
            onClick={onSubmit}
          >
            Submit
          </SubmitButton>
        </BoxContainer>
      </PageBox>
    </PageContainer>
  );
};

export default Homepage;

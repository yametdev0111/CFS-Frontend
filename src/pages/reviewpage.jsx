import { useState } from "react";
import LogoIcon from "../assets/images/logo.png"

import { sendDetailReview } from "../redux/actions/review";
import { detailReviewKey, detailReviewRating } from "../constants";
import {
  Label,
  FaceRating,
  LinkItem,
  SubmitButton,
  DrawerHeader,
  InputBox,
  PageContainer,
  BoxContainer,
  PageBox
} from "../components";

const ReviewPage = () => {
  const [rating, setRating] = useState(detailReviewRating);
  const [review, setReview] = useState("");

  const onSubmit = () => {
    if(
      rating.cleanliness &&
      rating.friendliness &&
      rating.price &&
      rating.quality &&
      rating.wait
    ) {
      sendDetailReview({
        review_score: rating,
        review_text: review
      });
    } else {
      alert("Please rate all the scores");
    }
  }

  return (
    <PageContainer>
      <PageBox>
        <DrawerHeader sx={{ justifyContent: "center", mt: 1 }}>
          <LinkItem to="/"><img src={LogoIcon} alt="Logo" /></LinkItem>
        </DrawerHeader>
        <BoxContainer>
          <Label text="We will use your valuable feedback to improve our service and make the overall experience better." />
          <Label text="Please show us how you feel about each part of our service by selecting an expression:" />
          
          { detailReviewKey.map(val => 
            <FaceRating
              text={val.text}
              rkey={val.rkey}
              value={rating}
              func={setRating}
            />
          )}

          <InputBox value={review} func={setReview} />

          <SubmitButton onClick={onSubmit}>
            Submit
          </SubmitButton>
        </BoxContainer>
      </PageBox>
    </PageContainer>
  );
};

export default ReviewPage;

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { detailReviewRating } from "../constants";
import { modify, send } from "../redux/actions";
import LogoIcon from "../assets/images/logo.png"
import {
  Homepage,
  GoogleReviewPage,
  ReviewPage,
  InfoPage
} from './';
import {
  LinkItem,
  DrawerHeader,
  PageContainer,
  PageBox
} from "../components";
import { useNavigate, useParams } from "react-router-dom";

export const ClientPage = () => {
  const params = useParams();
  const status = useSelector(state => state.status);
  const company = useSelector(state => state.company);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  
  const [drating, setDRating] = useState(detailReviewRating);
  const [dreview, setDReview] = useState("");

  const [infoID, setInfoID] = useState("");
  const [sign, setSign] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitReview = () => {
    send(
      {
        company: params.id,
        rating: rating,
        review: review,
        review_score: drating,
        review_text: dreview
      },
      id => {
        setInfoID(id);
        dispatch({ type: "Status", payload: 3 });
      }
    );
  }

  const onSubmitInfo = () => {
    modify(
      {
        id: infoID,
        name: sign,
        email: email
      },
      () => { dispatch({type: "Status", payload: 0}) }
    )
  }

  useEffect(() => {

  }, [])

  return (
    
    <PageContainer>
      <PageBox>
        <DrawerHeader sx={{ justifyContent: "center", mt: 1 }}>
          <LinkItem to="/"><img src={LogoIcon} alt="Logo" /></LinkItem>
        </DrawerHeader>
        {(status === 0) &&
          <Homepage
            rating={rating}
            setRating={setRating}
            review={review}
            setReview={setReview}
          />
        }
        {(status === 1) &&
          <GoogleReviewPage
            onSubmit={onSubmitReview}
          />
        }
        {(status === 2) &&
          <ReviewPage
            rating={drating}
            setRating={setDRating}
            review={dreview}
            setReview={setDReview}
            onSubmit={onSubmitReview}
          />
        }
        {(status === 3) &&
          <InfoPage
            name={sign}
            setName={setSign}
            email={email}
            setEmail={setEmail}
            onSubmit={onSubmitInfo}
          />
        }
      </PageBox>
    </PageContainer>
  );
}
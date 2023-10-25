import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { detailReviewRating } from "../constants";
import { modify, send } from "../redux/actions";
// import LogoIcon from "../assets/images/logo.png"
import {
  Homepage,
  GoogleReviewPage,
  ReviewPage,
  InfoPage
} from './';
import {
  // LinkItem,
  // DrawerHeader,
  PageContainer,
  PageBox,
  Label
} from "../components";
import { useParams } from "react-router-dom";
import { exists } from "../redux/actions/user";

export const ClientPage = () => {
  const params = useParams();
  const status = useSelector(state => state.status);
  // const company = useSelector(state => state.company);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const [exist, setExist] = useState(0);

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
    exists(params.id, result => {
      setExist(result + 1);
    })
  }, [params.id])

  return (
    
    <PageContainer>
      <PageBox>
        {/* <DrawerHeader sx={{ justifyContent: "center", mt: 1 }}>
          <LinkItem to="/"><img src={LogoIcon} alt="Logo" /></LinkItem>
        </DrawerHeader> */}
        {(status === 0 && exist === 2) &&
          <Homepage
            rating={rating}
            setRating={setRating}
            review={review}
            setReview={setReview}
          />
        }
        {(status === 1 && exist === 2) &&
          <GoogleReviewPage
            onSubmit={onSubmitReview}
          />
        }
        {(status === 2 && exist === 2) &&
          <ReviewPage
            rating={drating}
            setRating={setDRating}
            review={dreview}
            setReview={setDReview}
            onSubmit={onSubmitReview}
          />
        }
        {(status === 3 && exist === 2) &&
          <InfoPage
            name={sign}
            setName={setSign}
            email={email}
            setEmail={setEmail}
            onSubmit={onSubmitInfo}
          />
        }
        {(exist === 1) &&
          <Label text="Oops !\nCannot find page" />
        }
      </PageBox>
    </PageContainer>
  );
}
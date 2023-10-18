import { Box, Container, Typography, Button } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import LogoIcon from "../assets/images/logo.png"
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { sendDetailReview } from "../redux/actions/review";

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon sx={{color: "#ba000d"}} />
  },
  2: {
    icon: <SentimentSatisfiedIcon sx={{color: "#ffea00"}} />
  },
  3: {
    icon: <SentimentVerySatisfiedIcon sx={{color: "#06ff00"}} />
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

const SubmitButton = styled(Button)`
  padding: 0.6rem 0;
  background-color: #f9d13e;
  color: #2363eb;
  font-weight: 500;

  &:hover {
    background-color: #ebc22c;
  }
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: #2363eb;
  &:hover {
    text-decoration: underline;
  }
`;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const ReviewPage = () => {
  const [rating, setRating] = useState({
    wait: 2,
    friendliness: 2,
    cleanliness: 2,
    price: 2,
    quality: 2
  });
  const [review, setReview] = useState("");

  const onSubmit = () => {
    sendDetailReview({
      review_score: rating,
      review_text: review
    });
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(90deg, #08010F 0%, #05050A 100%)"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <DrawerHeader sx={{ justifyContent: "center", mt: 1 }}>
          <LinkItem to="/"><img src={LogoIcon} alt="Logo" /></LinkItem>
        </DrawerHeader>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          maxWidth="27rem"
          width="100%"
          sx={{
            p: { xs: "1rem", sm: "2rem" },
            borderRadius: "15px",
            border: "1px solid #0089ff",
            background: "linear-gradient(72deg, #007eff 0%, #5e81a5 100%);"
          }}
        >
          <Typography
            component="h1"
            sx={{
              color: "#FFF",
              fontWeight: 800,
              mb: 2,
              letterSpacing: 1,
              mt: 3
            }}
          >
            We will use your valuable feedback to improve our service and make the overall experience better.
          </Typography>

          <Typography
            component="p"
            sx={{
              color: "#FFF",
              fontWeight: 800,
              mb: 2,
              letterSpacing: 1,
              mt: 3
            }}
          >
            Please show us how you feel about each part of our service by selecting an expression:
          </Typography>
          
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <StyledRating
              value={ rating.wait }
              onChange={(event, newValue) => {
                setRating({
                  ...rating,
                  wait: newValue || 0
                });
              }}
              max={3}
              IconContainerComponent={IconContainer}
              highlightSelectedOnly
              size="large"
            />
            <Box sx={{ ml: 2, color: "white" }}> Wait Time </Box>
          </Box>
          
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <StyledRating
              value={ rating.friendliness }
              onChange={(event, newValue) => {
                setRating({
                  ...rating,
                  friendliness: newValue || 0
                });
              }}
              max={3}
              IconContainerComponent={IconContainer}
              highlightSelectedOnly
              size="large"
            />
            <Box sx={{ ml: 2, color: "white" }}> Staff Friendliness </Box>
          </Box>
          
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <StyledRating
              value={ rating.cleanliness }
              onChange={(event, newValue) => {
                setRating({
                  ...rating,
                  cleanliness: newValue || 0
                });
              }}
              max={3}
              IconContainerComponent={IconContainer}
              highlightSelectedOnly
              size="large"
            />
            <Box sx={{ ml: 2, color: "white" }}> Cleanliness </Box>
          </Box>
          
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <StyledRating
              value={ rating.price }
              onChange={(event, newValue) => {
                setRating({
                  ...rating,
                  price: newValue || 0
                });
              }}
              max={3}
              IconContainerComponent={IconContainer}
              highlightSelectedOnly
              size="large"
            />
            <Box sx={{ ml: 2, color: "white" }}> Value and Price </Box>
          </Box>
          
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <StyledRating
              value={ rating.quality }
              onChange={(event, newValue) => {
                setRating({
                  ...rating,
                  quality: newValue || 0
                });
              }}
              max={3}
              IconContainerComponent={IconContainer}
              highlightSelectedOnly
              size="large"
            />
            <Box sx={{ ml: 2, color: "white" }}> Quality of Products </Box>
          </Box>
          
          <TextField
            id="outlined-multiline-static"
            label=""
            placeholder="Write a review what you felt."
            focused
            multiline
            rows={5}
            fullWidth
            defaultValue=""
            value={review}
            color="primary"
            inputProps={{
              style: { color: 'white' }
            }}
            onChange={(event) => {
              setReview(event.target.value);
            }}
          />

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
        </Box>
      </Box>
    </Container>
  );
};

export default ReviewPage;

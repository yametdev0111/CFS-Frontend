import { Box, Container, Typography, Button } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import LogoIcon from "../assets/images/logo.png"
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import TextField from '@mui/material/TextField';
import { send } from "../redux/actions";

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

const Homepage = () => {
  const colors = ['#ffea00', '#ba000d', '#ff7500', '#ffea00', '#a0ff00', '#06ff00'];
  const navigate = useNavigate();
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");

  const onSubmit = () => {
    send({ rating: rating, review: review })
    navigate( rating === 5 ? "/google" : "/detail" );
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
            How was our service?
          </Typography>
          
          <Rating
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue || 0);
            }}
            style={{ color: colors[rating] }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          
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
            Tell us about your experience. What did you like? What could we do better?
          </Typography>
          
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
            onChange={ event => {
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

export default Homepage;

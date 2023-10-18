import { Box, Container, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import LogoIcon from "../assets/images/logo.png"
import { Link } from "react-router-dom";

const SubmitButton = styled(Button)`
  padding: 0.6rem 0;
  background-color: linear-gradient(92deg, #6C13B6 35.74%, #6166C5 100%);
  border-radius: 10px;
  color: #FFF;
  font-weight: 500;
  margin-top: 16px;

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

const GoogleReviewPage = () => {

  const onSubmit = () => {
    window.location.href = "http://search.google.com/local/writereview?placeid=ChIJQU8OXXDYQIYRY7y5o327fiA";
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
            We appreciate your feedback and 5-star rating! Our team aims to make our customers happy.
          </Typography>
          
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
            Please also leave a public review on Google, so everyone can hear about what you liked.
          </Typography>

          <SubmitButton
            variant="contained"
            fullWidth
            disableElevation
            onClick={onSubmit}
          >
            Review on Google
          </SubmitButton>
        </Box>
      </Box>
    </Container>
  );
};

export default GoogleReviewPage;

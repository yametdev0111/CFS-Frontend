import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
export const Footer = (props) => {
  const { } = props;

  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[0]
              : theme.palette.grey[0],
          p: 0,
          position: "fixed",
          bottom: 0,
          height: 50,
          width: "100%",
          zIndex: 1023,
          display: "flex"
        }}
        component="footer"
      >
        <Typography margin="auto" variant="body2" color="text.secondary" align="center" >
          {"Copyright © "}
          {"LeaveFeedback "}
          {new Date().getFullYear()}
        </Typography>
      </Box>
    </>
  );
};

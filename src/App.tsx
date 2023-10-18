import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminPage from "./pages/adminpage";
import ReviewPage from "./pages/reviewpage";
import GoogleReviewPage from "./pages/googlereview";


const theme = createTheme({

});

function App() {
  return (
    <>
      <CssBaseline />
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="admin" element={<AdminPage />} />
          <Route path="detail" element={<ReviewPage />} />
          <Route path="google" element={<GoogleReviewPage />} />
          <Route path="" element={<Homepage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

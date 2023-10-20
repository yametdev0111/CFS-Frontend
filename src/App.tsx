import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import "react-toastify/dist/ReactToastify.css";
import ReviewPage from "./pages/reviewpage";
import GoogleReviewPage from "./pages/googlereview";


const theme = createTheme({

});

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/detail" element={<ReviewPage />} />
            <Route path="/google" element={<GoogleReviewPage />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

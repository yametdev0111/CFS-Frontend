import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/reducers";
import { AdminPage, UploadPage, ClientPage, RegisterPage, LandingPage } from "./pages";
import { Footer } from "./components";

const theme = createTheme({

});

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App-main">
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/:id/dashboard/" element={<AdminPage />} />
                <Route path="/:id/admin/" element={<UploadPage />} />
                <Route path="/:id/" element={<ClientPage />} />
                <Route path="/admin" element={<RegisterPage />} />
              </Routes>
            </BrowserRouter>
          </Provider>
        </ThemeProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;

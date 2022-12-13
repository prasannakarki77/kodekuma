import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./scrollToTop/ScrollToTop";
import ChallengeList from "./components/ChallengeList";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Solutions from "./components/Solutions";
import { ChallengeProvider } from "./context/ChallengeContext";
import { UserProvider } from "./context/UserContext";
import Challenge from "./pages/Challenge";
import Challenges from "./pages/Challenges";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Resources from "./pages/Resources";
import WebChallenges from "./pages/WebChallenges";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      {" "}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ChallengeProvider>
        <UserProvider>
          <BrowserRouter>
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="/web_challenges" element={<WebChallenges />}>
                <Route path="" element={<ChallengeList />} />
                <Route path="solutions" element={<Solutions />} />
              </Route>
              <Route path="/challenge/:id" element={<Challenge />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </UserProvider>
      </ChallengeProvider>
    </>
  );
}

export default App;

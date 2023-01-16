import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./config/ScrollToTop";
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
import Profile from "./pages/Profile";
import PrivateRoute from "./config/PrivateRoute";
import SolutionSubmit from "./pages/SolutionSubmit";
import Solution from "./pages/Solution";
import Leaderboard from "./pages/Leaderboard";
function App() {
  return (
    <>
      {" "}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <UserProvider>
        <ChallengeProvider>
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
              <Route path="/solution_submit/:id" element={<SolutionSubmit />} />
              <Route
                path="/solution/:user_id/:challenge_id"
                element={<Solution />}
              />
              <Route path="/resources" element={<Resources />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ChallengeProvider>
      </UserProvider>
    </>
  );
}

export default App;

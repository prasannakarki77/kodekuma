import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ChallengeList from "./components/ChallengeList";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { UserProvider } from "./context/UserContext";
import Challenges from "./pages/Challenges";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Resources from "./pages/Resources";
import WebChallenges from "./pages/WebChallenges";
function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/web_challenges" element={<WebChallenges />}>
              <Route path="" element={<ChallengeList />} />
            </Route>
            <Route path="/resources" element={<Resources />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;

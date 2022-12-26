import { createContext, useEffect, useState } from "react";
import axios from "axios";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((res) => {
          if (res.status === 200) return res.json();
          throw new Error("authentication has been failed");
        })
        .then((resObject) => {
          setUser(resObject.user);
          localStorage.setItem("user", JSON.stringify(resObject.user));
          getUserId(resObject.user.id);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  const getUserId = (id) => {
    axios
      .get("http://localhost:5000/user/profile/" + id)
      .then((res) => {
        setProfile(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const value = { user, setUser, profile };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;

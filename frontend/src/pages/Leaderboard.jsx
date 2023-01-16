import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdLeaderboard } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
import { AiTwotoneStar, AiFillSafetyCertificate } from "react-icons/ai";
import { TiArrowSortedUp } from "react-icons/ti";
import axios from "axios";
const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [topThree, setTopThree] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/user/all_users")
      .then((res) => {
        setUsers(res.data.data.slice(3));
        setTopThree([res.data.data[0], res.data.data[1], res.data.data[2]]);
        console.log(topThree);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <h1 className="font-cubano text-3xl flex items-center gap-3 justify-center text-primary-content">
        <MdLeaderboard className=" text-yellow-400 " /> Leaderboard
      </h1>
      <div className=" p-4 sm:p-8">
        <div className=" flex justify-center mb-8 flex-wrap gap-5">
          {topThree?.map((user, index) => (
            <div className="p-4 bg-base-200 rounded-lg shadow-lg ">
              <p className="font-poppins text-3xl font-bold">{index + 1}</p>
              <div className="flex flex-col gap-3 justify-center w-full items-center">
                <div className="avatar">
                  <div className="w-16 rounded-full">
                    <img src={user.profileImg} alt="profile_img" />
                  </div>
                </div>
                <p className="font-poppins text-lg font-bold">
                  {user.username}
                </p>
                <div className="stats shadow max-w-lg mb-4 ">
                  <div className="stat sm:p-2 md:p-4  ">
                    <div className="stat-title text-xs font-bold uppercase">
                      Certificates
                    </div>
                    <div className="stat-value md:text-2xl text-base sm:text-lg flex justify-center items-center gap-2">
                      {user.stats.certificates.length}
                      <AiFillSafetyCertificate
                        size={25}
                        className=" text-green-400 "
                      />
                    </div>
                  </div>
                  <div className="stat sm:p-2 md:p-4  ">
                    <div className="stat-title text-xs font-bold uppercase">
                      Upvotes
                    </div>
                    <div className="stat-value md:text-2xl text-base sm:text-lg flex items-center gap-2">
                      {user.stats.upvotes}
                      <TiArrowSortedUp size={25} className="text-secondary" />
                    </div>
                  </div>
                  <div className="stat sm:p-2 md:p-4 ">
                    <div className="stat-title text-xs font-bold uppercase">
                      Badges
                    </div>
                    <div className="stat-value md:text-2xl text-base sm:text-lg flex items-center gap-2">
                      {user.stats.badges.length}{" "}
                      <HiBadgeCheck size={25} className=" text-accent " />
                    </div>
                  </div>
                  <div className="stat sm:p-2 md:p-4  ">
                    <div className="stat-title text-xs font-bold uppercase">
                      Stars
                    </div>
                    <div className="stat-value md:text-2xl text-base sm:text-lg flex items-center gap-2">
                      {user.stats.stars}
                      <AiTwotoneStar size={25} className="text-orange-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full text-center text-base font-poppins font-bold">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Challengers</th>
                <th>Certificates</th>
                <th>Upvotes</th>
                <th>Badges</th>
                <th>Stars</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th>{index + 4}</th>
                  <td className="flex items-center gap-2">
                    {" "}
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <img src={user.profileImg} alt="profile_img" />
                      </div>
                    </div>{" "}
                    {user.username}
                  </td>
                  <td>
                    <div className="flex items-center justify-center gap-1">
                      {" "}
                      {user.stats.certificates.length}{" "}
                      <AiFillSafetyCertificate
                        size={20}
                        className=" text-green-400 "
                      />
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center gap-1">
                      {user.stats.upvotes}{" "}
                      <TiArrowSortedUp size={20} className="text-secondary" />
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center gap-1">
                      {user.stats.badges.length}{" "}
                      <HiBadgeCheck size={20} className=" text-accent " />
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center gap-1">
                      {user.stats.stars}{" "}
                      <AiTwotoneStar size={20} className="text-orange-500" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

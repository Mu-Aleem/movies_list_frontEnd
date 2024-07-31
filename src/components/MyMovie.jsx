import React from "react";
import FooterIconComp from "./FooterIconComp";
import addIcon from "../assets/svg/add.svg";
import logoutIcon from "../assets/svg/logout.svg";
import { Link, useNavigate } from "react-router-dom";
import httpRequest from "../axios/index";
import { LOGOUT } from "../constants/apiEndPoints";
import { useAppDispatch } from "../lib/store/hook";
import { clearAuthStorage } from "../lib/store/slice/user/UserSlice";

const MyMovie = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await httpRequest.post(`${LOGOUT}`);
    if (response?.status === 200) {
      localStorage.clear();
      dispatch(clearAuthStorage());
      navigate("/");
    }
  };

  return (
    <div className="bg-[#093545] w-full h-auto flex flex-col gap-24 justify-between">
      <div className="w-[85%] mx-auto flex flex-col  mt-[120px]">
        {/* Upper section  */}
        <div className="flex justify-between">
          <Link className="flex items-center gap-4" to="/add-movie">
            <div className="text-[48px] font-semibold text-white text-start ">
              My Movies
            </div>
            <img src={addIcon} alt="" className="w-[32px] h-[32px] mt-[8px]" />
          </Link>

          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleLogout}
          >
            <div className="text-[16px] font-bold text-white">Logout</div>
            <img src={logoutIcon} alt="" className="w-[32px] h-[32px]" />
          </div>
        </div>

        {/* Movie Table Card */}
        <div className="w-[282px] mt-[120px] h-[510px] bg-[#092C39] rounded-xl">
          <img
            src={logoutIcon}
            alt=""
            className="w-[266px] h-[400px] border-2 mx-auto mt-2 rounded-xl"
          />
          <div className="pl-3 flex flex-col gap-3 my-4 text-white">
            <div className="text-[20px]">Movie 1</div>
            <div className="font-normal text-sm">2021</div>
          </div>
        </div>
      </div>

      <FooterIconComp />
    </div>
  );
};

export default MyMovie;

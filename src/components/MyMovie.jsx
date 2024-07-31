import React, { useState, useEffect } from "react";
import FooterIconComp from "./FooterIconComp";
import addIcon from "../assets/svg/add.svg";
import logoutIcon from "../assets/svg/logout.svg";
import Pagination from "./Pagination";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../lib/store/hook";
import { clearAuthStorage } from "../lib/store/slice/user/UserSlice";
import httpRequest from "../axios/index";
import { LOGOUT } from "../constants/apiEndPoints";

const MyMovie = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(8);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

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
          <Link to="/add-movie" className="flex items-center gap-4">
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
        <div className="flex flex-wrap gap-3 mt-[120px] ">
          {currentPosts.map((ele, index) => (
            <div
              className="w-[282px]  h-[510px] bg-[#092C39] rounded-xl mb-6"
              key={index}
            >
              <img
                src={ele.image}
                alt=""
                className="w-[266px] h-[400px] border-2 mx-auto mt-2 rounded-xl"
              />
              <div className="pl-3 flex flex-col gap-3 my-4 text-white">
                <div className="text-[20px]">{ele.category}</div>
                <div className="font-normal text-sm">{ele.price}</div>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          totalPosts={products.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>

      <FooterIconComp />
    </div>
  );
};

export default MyMovie;

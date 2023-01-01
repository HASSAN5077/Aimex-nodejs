import React from "react";
import { logo } from "../images";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/userSlice/userSlice";
import axiosFetch from "../axios/axios";
const navLinkStyle = "mr-7 text-lg hover:text-slate-600 font-semibold";
const Navbar = () => {

  const { isAuthenticatedUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = async()=>{
    try{

      const response = await axiosFetch.get('/logout')
      dispatch(logoutUser())
      console.log(response)
      navigate('/login')
    }catch(er){
      
    }
  }
  return (
    <header className="flex justify-between items-center px-24 py-2 absolute w-screen">
      <Link to="/">
        <img src={logo} className="w-24 cursor-pointer" />
      </Link>
      <div className="flex items-center">
        <Link to="/market" className={navLinkStyle}>
          Market
        </Link>
        <Link to="/nft_marketplace" className={navLinkStyle}>
          NFT Marketplace
        </Link>
        <Link to="/profile" className={navLinkStyle}>
          Online Trade
        </Link>
        <Link to="/" className={navLinkStyle}>
          Support
        </Link>
        {isAuthenticatedUser || (
          <Link to="/login" className={navLinkStyle}>
            Login
          </Link>
        )}
        {isAuthenticatedUser || (
          <Link to="/signup" className={navLinkStyle}>
            Sign up
          </Link>
        )}
        {isAuthenticatedUser && (
          <button onClick={handleLogOut} className="bg-green-400 px-5 py-2 rounded-lg shadow-lg text-lg font-semibold">Log Out</button>
        )}
      </div>
    </header>
  );
};

export default Navbar;

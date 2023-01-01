import { memo } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {logo} from '../../images'
import NavbarButton from "./NavbarButton";
import axiosFetch from "../../axios/axios";
import { useDispatch } from "react-redux";
import {logoutUser} from '../../store/userSlice/userSlice'

const Navbar = memo(() => {
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
    <nav className="navbar-inner no-select">
      <div className="logo">
        {/* <Link to="/market">
          <img src="/images/logo.png" alt="Crypto Exchange" draggable="false" />
        </Link> */}
      </div>
      <h3>Menu</h3>
      <ul>
        <li>
          <NavbarButton url="/market" icon="dashboard" title="Dashboard" />
        </li>
        <li>
          <NavbarButton
            url="/wallet"
            icon="account_balance_wallet"
            title="My wallet
"
          />
        </li>
        <li>
          <NavbarButton url="/transactions" icon="sync" title="Transactions" />
        </li>
        <li>
          <NavbarButton url="/trading" icon="paid" title="Trade" />
        </li>
        <li>
          <NavbarButton url="/capital" icon="equalizer" title="Market" />
        </li>
      </ul>
      <h3>Others</h3>
      <ul>
        <li>
          <NavbarButton url="/profile" icon="account_circle" title="Profile" />
        </li>
        <li>
          <NavbarButton url="/settings" icon="settings" title="Settings" />
        </li>
      </ul>
      <button onClick={handleLogOut} className="bg-gray-700 text-white text-lg py-3 px-8 font-semibold ml-12 rounded-lg hover:bg-gray-800">Log Out</button>
      <div className="copyright">
        <strong>Crypto Exchange</strong>
        <p>
          2021 &copy; Aimex Exchange.
          <br />
          <br />
          Made with <span>❤</span> by OOSE Team
        </p>
      </div>
    </nav>
  );
});

export default Navbar;

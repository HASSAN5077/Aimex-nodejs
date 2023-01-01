import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import MarketScreen from "./pages/MarketScreen";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import store from "./store/store";
import { loadUser } from "./store/userSlice/userSlice";
import Loader from "./components/Loader";
import CapitalScreen from "./pages/CapitalScreen";
import TransactionsScreen from "./pages/TransactionsScreen";
import Wallet from "./pages/Wallet";
import Trade from "./pages/Trade";
import Settings from "./pages/Settings";
const ProfileScreen = lazy(() => import("./pages/ProfileScreen"));
const NftMarket = lazy(() => import("./pages/NftMarket"));
const NftDetails = lazy(() => import("./pages/NftDetails"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <div className="App bg-green-300">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route
            exact
            path="/market"
            element={<ProtectedRoute Component={MarketScreen} />}
          />
          <Route
            exact
            path="/nft_marketplace"
            element={<ProtectedRoute Component={NftMarket} />}
          />
          <Route
            exact
            path="/profile"
            element={<ProtectedRoute Component={ProfileScreen} />}
          />
          <Route
            exact
            path="/nft/:id"
            element={<ProtectedRoute Component={NftDetails} />}
          />
          <Route exact path="/forgot" element={<ForgotPassword />} />
          <Route
            exact
            path="/password/reset/:token"
            element={<ResetPassword />}
          />
          <Route
            exact
            path="/wallet"
            element={<Wallet />}
          />
          <Route
            exact
            path="/trading"
            element={<Trade />}
          />
          <Route
            exact
            path="/settings"
            element={<Settings />}
          />
          <Route exact path="/transactions" element={<TransactionsScreen />} />
          <Route exact path="/capital" element={<CapitalScreen />} />
          <Route exact path="/*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

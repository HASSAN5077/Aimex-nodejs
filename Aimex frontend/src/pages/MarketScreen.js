import { useState, useEffect } from "react";

import MainLayout from "../layouts/MainLayout";

import Market from "../components/Widgets/Market/Market";
import BuySell from "../components/Widgets/BuySell/BuySell";
import BuyOrders from "../components/Widgets/BuyOrders/BuyOrders";
import SellOrders from "../components/Widgets/SellOrders/SellOrders";
import TradeHistory from "../components/Widgets/TradeHistory/TradeHistory";
import CoinVertical from "../components/Widgets/Coin/CoinVertical";
import CoinHorizontal from "../components/Widgets/Coin/CoinHorizontal";
import CandleStick from "../components/Widgets/CandleStick/CandleStick";
import axios from "axios";
import Header from "../components/Header/Header";

const MarketScreen = () => {
  const [keyword, setKeyword] = useState("");
  const [coinInfo, setCoinInfo] = useState(null);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearchValue = (e) => {
    const { value } = e.target;

    setKeyword(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <MainLayout>
      <div className="content">
        <Header />
        <div className="flex flex-destroy mt-16">
          <div className="content-30 box-right-padding">
            <Market coins={coins} />

            {coinInfo && <CoinVertical item={coinInfo} />}
          </div>
          <div className="content-70 flex-1">
            <CoinHorizontal />

            <div className="flex flex-destroy">
              <div className="content-70 flex-1 box-right-padding">
                <CandleStick />
              </div>
              {/* <div className="content-30">
                <BuySell />
              </div> */}
            </div>

            <div className="flex flex-destroy flex-space-between">
              <div className="flex-1 box-right-padding">
                <TradeHistory />
              </div>
              <div className="flex-1 box-right-padding">
                <BuyOrders />
              </div>
              <div className="flex-1">
                <SellOrders />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MarketScreen;

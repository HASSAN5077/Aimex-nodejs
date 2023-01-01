import { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Box from "../../Common/Box";
import axios from "axios";

const CoinHorizontal = () => {
  const [BtcCoin, setBtcCoin] = useState("");
  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/bitcoin")
      .then((res) => {
        setBtcCoin(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    BtcCoin && (
      <Box>
        <div className="box-content box-vertical-padding box-horizontal-padding">
          <div className="widget-coin-horizontal flex flex-center flex-space-around nowrap">
            <div>
              <div
                className="icon cover"
                style={{ backgroundImage: `url('${BtcCoin.image.small}')` }}
              />
            </div>
            <div>
              <label>{BtcCoin.name}</label>
              <strong>BTC/USD</strong>
            </div>
            <div className="divider" />
            <div>
              <label className="gray">Coin price</label>
              <strong>
                {"$"} {BtcCoin.market_data.current_price.usd}
                <em
                  style={{
                    color:
                      BtcCoin.market_data.market_cap_change_percentage_24h < 0
                        ? "text-red"
                        : "text-green",
                  }}
                >
                  {BtcCoin.market_data.market_cap_change_percentage_24h} {"%"}
                </em>
              </strong>
            </div>
            <div className="divider responsive-hide2" />
            <div className="responsive-hide2">
              <label className="gray"> Finance Rate</label>
              <strong>
                {BtcCoin.market_data.price_change_percentage_7d}/7d
              </strong>
            </div>
            <div className="divider responsive-hide2" />
            <div className="responsive-hide2">
              <label className="gray">Volume</label>
              <strong>{BtcCoin.market_data.total_volume.usd}</strong>
            </div>
            <div className="divider responsive-hide" />
          </div>
        </div>
      </Box>
    )
  );
};

export default CoinHorizontal;

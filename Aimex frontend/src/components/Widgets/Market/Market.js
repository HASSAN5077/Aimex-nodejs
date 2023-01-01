import { memo, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Box from "../../Common/Box";
import MarketRow from "./MarketRow";

const Market = memo(({ coins }) => {
  return (
    <Box>
      <div className="box-title box-vertical-padding box-horizontal-padding no-select">
        Coin Market
      </div>
      <div className="box-content box-content-height">
        {coins &&
          coins.map((item) => (
            <MarketRow key={item.id.toString()} item={item} />
          ))}
      </div>
    </Box>
  );
});

export default Market;

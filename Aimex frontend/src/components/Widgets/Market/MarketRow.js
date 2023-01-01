import { memo, useState, useEffect } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import PropTypes from "prop-types";

const MarketRow = memo(({ item }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (item.market_cap_change_percentage_24h > 0) {
      setColor("green");
    } else {
      setColor("red");
    }
  }, []);

  return (
    <div className="market-row flex flex-center flex-space-between">
      <div>
        <div
          className="icon cover"
          style={{ backgroundImage: `url('${item.image}')` }}
        />
      </div>
      <div className="text-center w-24">
        <p>
          <strong>{item.name}</strong>
          <span className="gray">
            {new Date().getFullYear() +
              "-" +
              (new Date().getMonth() + 1) +
              "-" +
              new Date().getDate()}
          </span>
        </p>
      </div>
      <div className="w-24 ">
        <p className="right text-center">
          <strong>
            {"$"}
            {item.current_price}
          </strong>
        </p>
      </div>
      <div>
        <p className={color}>{item.market_cap_change_percentage_24h}%</p>
      </div>
    </div>
  );
});

MarketRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default MarketRow;

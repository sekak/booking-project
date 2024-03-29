import { useEffect, useState } from "react";
import FetchData from "../../fetching/FetchData";
import "./featuredProperties.css";
import Sketeton from "../../skeleton/Sketeton";
import Error from "../../error/Error";
import { Link } from "react-router-dom";

const FeaturedProperties = () => {
  const [delay, setDelay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, 1000);
  }, []);
  const { loading, data, error } = FetchData(
    "/hotel/find?featured=true&limit=4"
  );
  console.log(data);
  return (
    <div className="fp">
      {!error ? (
        !loading && delay ? (
          data.map((items, i) => (
            <Link className="fpItem"  key={i} to={`/hotels/${items._id}`}>
              <div className="fpItem">
                <img src={items?.photos[0]} alt="" className="fpImg" />
                <span className="fpName">{items.name}</span>
                <span className="fpCity">{items.city}</span>
                <span className="fpPrice">
                  Starting from ${items.cheapestPrice}
                </span>
                <div className="fpRating">
                  <button>{items.rating}</button>
                  <span>Excellent</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <Sketeton type="featuredPr" />
        )
      ) : (
        <Error type="data" message="can't fetch data" />
      )}
    </div>
  );
};

export default FeaturedProperties;

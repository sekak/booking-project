import { useEffect, useState } from "react";
import FetchData from "../../fetching/FetchData";
import "./featuredProperties.css";
import Sketeton from "../../skeleton/Sketeton";
import Error from "../../error/Error";

const FeaturedProperties = () => {
  const [delay, setDelay] = useState(false)
  useEffect(() => {
    setTimeout(() => { setDelay(true) }, 2000)
  }, [])
  const { loading, data, error } = FetchData("/hotel/find?featured=true&limit=4")
  console.log(data)
  return (
    <div className="fp">
      {!error ? (!loading && delay) ?
          (data.map((items,i) => {
            return (
              <div className="fpItem" key={i}>
                <img
                  src={items?.photos[0]}
                  alt=""
                  className="fpImg"
                />
                <span className="fpName">{items.name}</span>
                <span className="fpCity">{items.city}</span>
                <span className="fpPrice">Starting from ${items.cheapestPrice}</span>
                <div className="fpRating">
                  <button>{items.rating}</button>
                  <span>Excellent</span>
                </div>
              </div>
            )
          }))
         
        :
        (<Sketeton type='featuredPr'/>)
        :
        (<Error type="data"  message="can't fetch data" />)

      }
    </div>
  );
};

export default FeaturedProperties;

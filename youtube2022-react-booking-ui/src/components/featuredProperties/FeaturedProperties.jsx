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
  const { loading, data, error } = FetchData("/hotel/find?featured=true")
  console.log(data)
  return (
    <div className="fp">
      {!error ? (!loading && delay) ?
         
          (data.map((items,i) => {
            return (
              <div className="fpItem" key={i}>
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
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

import { Link } from "react-router-dom";
import "./searchItem.css";
import { useEffect, useState } from "react";
 
const SearchItem = ({item}) => {
  const [statusRating, setStatusRating] = useState("");
  useEffect(() => {
    const CheckStatusRating = () => {
      if (item.rating < 10 && item.rating > 8)
        setStatusRating("Fabulous");
      else if (item.rating > 6.5)
        setStatusRating("Very good");
      else if (item.rating > 5)
        setStatusRating("Good");
      else if (item.rating > 3.5)
        setStatusRating("Excellent");
      else if (item.rating > 1)
        setStatusRating("Review score");
    }

    CheckStatusRating();
  }, []); 
  
  return (
    <div className="searchItem">
      <img
        src={item?.photos[0] ? item?.photos[0] : "https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.title}</h1>
        <span className="siDistance">{item.distance}km from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
        {item.desc}
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
       {item.rating && <div className="siRating">
          <span>{statusRating}</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`} className="siCheckButton">See availability</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

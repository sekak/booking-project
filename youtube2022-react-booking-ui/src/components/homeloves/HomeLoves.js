import { Link } from "react-router-dom";
import FetchData from "../../fetching/FetchData";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import "./homeLoves.css";

const HomeLoves = () => {
  const { data, loading, error } = FetchData("/hotel/find");
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="homelv">
        <div className="homelvWrapper">
          <h1>Discover all the hotels you might like</h1>
          <div className="carts">
            {data.map((item) => (
              <div className="homeCart">
                <img
                  src={item?.photos[0]}
                  alt=""
                />
              </div>
            ))}
            {data.map((item) => (
              <div className="homeCart">
                <Link>
                  <img
                    src="https://cf.bstatic.com/xdata/images/district/300x240/50629.jpg?k=01fc7e8ffa1b3e51c4f6d28cc47e8d99a95e84b2a218080c23a5a7c64e931ba0&o="
                    alt=""
                  />
                </Link>
              </div>
            ))}
            {data.map((item) => (
              <div className="homeCart">
                <img
                  src="https://cf.bstatic.com/xdata/images/district/300x240/50629.jpg?k=01fc7e8ffa1b3e51c4f6d28cc47e8d99a95e84b2a218080c23a5a7c64e931ba0&o="
                  alt=""
                />
              </div>
            ))}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomeLoves;

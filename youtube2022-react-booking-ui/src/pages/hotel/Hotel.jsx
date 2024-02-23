import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import FetchData from "../../fetching/FetchData";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/searchContext";
import { AuthContext } from "../../Context/authContext";
import Reserve from "../../components/reserve/Reserve";
import { TbPhotoSquareRounded } from "react-icons/tb";
import Error from "../../error/Error";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, error, loading } = FetchData(`/hotel/find/${id}`);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const consumer = useContext(SearchContext);
  const { state } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [photos, setPhotos] = useState(false);
  const navigate = useNavigate();

  const diffDates = (date1, date2) => {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  const days = diffDates(
    consumer.dates[0]?.startDate,
    consumer.dates[0]?.endDate
  );
  if (days) {
    localStorage.setItem("days", days);
    localStorage.setItem("rooms", consumer.options.room);
  }

  const getDays = localStorage.getItem("days");
  const rooms = localStorage.getItem("rooms");

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber =
        slideNumber === 0 ? data.photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber =
        slideNumber === data.photos.length - 1 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    state.user ? setOpenModal(true) : navigate("/login");
  };

  localStorage.setItem("path", window.location.pathname);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {!error ? 
        !loading ? 
          <div className="hotelContainer">
            {open && (
              <div className="slider">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="closeSlide"
                  onClick={() => setOpen(false)}
                />
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  className="arrow"
                  onClick={() => handleMove("l")}
                />
                <div className="sliderWrapper">
                  <img
                    src={data.photos[slideNumber]}
                    alt=""
                    className="sliderImg"
                  />
                </div>
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="arrow"
                  onClick={() => handleMove("r")}
                />
              </div>
            )}
            <div className="hotelWrapper">
              <button className="bookNow" onClick={handleClick}>Reserve or Book Now!</button>
              <h1 className="hotelTitle">{data.title}</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data.address}</span>
              </div>
              <span className="hotelDistance">
              Excellent location – {data.distance}m from center
              </span>
              <span className="hotelPriceHighlight">
              Book a stay over $124 at this property and get a free airport
              taxi
              </span>
              {
                !photos && (
                  <div className="NoPhoto">
                    <h1 className="noPhotos">Oops... No photos </h1>
                    <TbPhotoSquareRounded style={{fontSize:"40px"}}/>
                  </div>
                )
              }
              <div className="hotelImages">
                {data.photos?.map((photo, i) => (
                  <div className="hotelImgWrapper" key={i}>
                    <img
                      onClick={() => handleOpen(i)}
                      src={photo}
                      alt=""
                      className="hotelImg"
                      onLoad={()=>setPhotos(true)}
                    />
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                  <h1 className="hotelTitle">Stay in the heart of City</h1>
                  <p className="hotelDesc">{data.desc}</p>
                </div>
                <div className="hotelDetailsPrice">
                  <h1>Perfect for a 9-night stay!</h1>
                  <span>
                    Located in the real heart of Krakow, this property has an
                    excellent location score of 9.8!
                  </span>
                  <h2>
                    <b>${getDays * rooms * data.cheapestPrice}</b> ({getDays}{" "}
                    nights)
                  </h2>
                  <button className="bookButton" onClick={handleClick}>
                    Reserve or Book Now!
                  </button>
                </div>
              </div>
            </div>
            <MailList />
            <Footer />
          </div>
      
        : <div className="loadingHome hotelLoadin">
        <span className="cercelHome first"></span>
        <span className="cercelHome second"></span>
        <span className="cercelHome third"></span>
        </div>
      : 
      <Error type="" message="Not found 404!"/>
      }
      {openModal && <Reserve setOpenModal={setOpenModal} id={id} />}
    </div>
  );
};

export default Hotel;

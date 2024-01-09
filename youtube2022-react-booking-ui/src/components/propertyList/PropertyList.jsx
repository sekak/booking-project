import { useEffect, useState } from "react";
import FetchData from "../../fetching/FetchData";
import "./propertyList.css";
import Sketeton from "../../skeleton/Sketeton";


const images = [
  "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
  "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
]

const PropertyList = () => {
  const { data, loading, error } = FetchData("/hotel/countByType")
  console.log(data)
  const [delay, setDelay] = useState(false)
  useEffect(() => {
    setTimeout(() => { setDelay(true) }, 2000);
  }, [])


  return (
    <div className="pList">
      {!error ? (delay && !loading) ? <>
        {images.map((img,i) => {
          return(
          <div className="pListItem">
            <img
              src={img}
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{data[i].type}</h1>
              <h2>{data[i].count} {data[i].type}</h2>
            </div>
          </div>
        )})}
      </> :
        (<Sketeton type="property"/>) :
        (<h1>Error...</h1>)

      }
      {/* <Sketeton type="property"/> */}
    </div>
  );
};

export default PropertyList;

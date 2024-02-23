import { useEffect, useState } from "react";
import FetchData from "../../fetching/FetchData";
import "./featured.css";
import Sketeton from "../../skeleton/Sketeton";
import Error from "../../error/Error";
import { useNavigate } from "react-router-dom";



const Featured = () => {
  const [delay, setDelay] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => { setDelay(true) }, 1000)
  }, [])
  const { data, loading, error } = FetchData("/hotel/countByCity?city=London,Berlin,Madrid")

  const handleClick = (destination) => {
    navigate("/hotels", {state:{destination, date:[{startDate: new Date(),endDate: new Date(),key: "selection",}],
      options:{room:0,adulte:0,children:0}
    }})
  }
  
  return (
    <div className="featured">
      {!error ? (delay && !loading) ? <>
      <div className="featuredItem" onClick={()=>handleClick("London")} >
        <img
          src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
        <div className="featuredItem" onClick={()=>handleClick("Berlin")}>
          <img
            src="https://images.unsplash.com/photo-1546726747-421c6d69c929?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Berlin</h1>
            <h2>{data[1]} properties</h2>
          </div>
        </div>
        <div className="featuredItem" onClick={()=>handleClick("Madrid")}>
          <img
            src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Madrid</h1>
            <h2>{data[2]} properties</h2>
          </div>
        </div></> : 
        ( 
          <Sketeton type="featured" />
         ) :  
          <Error type="data" message="can't fetch data" />
         
        }
    </div>
  );
};

export default Featured;

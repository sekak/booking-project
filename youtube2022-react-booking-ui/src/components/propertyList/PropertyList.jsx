import { useEffect, useState } from "react";
import FetchData from "../../fetching/FetchData";
import "./propertyList.css";
import Sketeton from "../../skeleton/Sketeton";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const PropertyList = () => {
  const { data, loading, error } = FetchData("/hotel/countByType");
  console.log(data);
  const [delay, setDelay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, 1000);
  }, []);

  return (
    <div className="pList">
      {!error ? (
        delay && !loading ? (
          <>
            {images.map((img, i) => (
              <Link to={`/homeloves?${data[i].type}`} className="pListItem" key={i}>
                <div >
                  <img src={img} alt="" className="pListImg" />
                  <div className="pListTitles">
                    <h1>{data[i].type}</h1>
                    <h2>
                      {data[i].count} {data[i].type}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </>
        ) : (
          <Sketeton type="property" />
        )
      ) : (
        <h1>Error...</h1>
      )}
      {/* <Sketeton type="property"/> */}
    </div>
  );
};

export default PropertyList;

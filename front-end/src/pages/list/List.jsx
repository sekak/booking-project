import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import FetchData from "../../fetching/FetchData";
import SearchItem from "../../components/searchItem/SearchItem";
import Sketeton from "../../skeleton/Sketeton";
import Error from "../../error/Error";
import { format,parseISO } from 'date-fns';
import { SearchContext } from "../../Context/searchContext";


const List = () => {

  const consumer = useContext(SearchContext)
  const location = JSON.parse(localStorage.getItem('search'))
  console.log(location)
  console.log("object",consumer)
  
  let path = useLocation();  
  localStorage.setItem("path",path.pathname)
  
  const [max, setMax] = useState(undefined)
  const [min, setMin] = useState(undefined)
  const [destination, setDestination] = useState(location.city);
  const [date, setDate] = useState(
    [{
        startDate:parseISO(location.dates[0]?.startDate) ||  new Date(),
        endDate: parseISO(location.dates[0]?.endDate) || new Date(),
        key: "selection",
      }
    ]);
    console.log(parseISO(location?.dates[0]?.startDate))
    const [openDate, setOpenDate] = useState(false);
    const options = location.options
    const [delay, setDelay] = useState(false)
    
    
    // console.log(destination.slice(0, 1).toUpperCase() + destination.toLowerCase().slice(1))
    console.log(destination)
    const { data, loading, error, reFetch } = FetchData(`/hotel/find?city=${destination.slice(0, 1).toUpperCase() + destination.toLowerCase().slice(1)}&min=${min || 0}&max=${max || 9999}`)
    const handleClick = () => { 
      document.getElementById("#city").value && setDestination(document.getElementById("#city").value)
      document.getElementById("#min").value && setMin(document.getElementById("#min").value) 
      document.getElementById("#max").value && setMax(document.getElementById("#max").value)
      setDestination((prev)=> prev)
      setMax((prev)=> prev)
      setMin((prev)=> prev)
      reFetch()
    }
    useEffect(() => {
    consumer.dispatch({type:"NEW_SEARCH",payload: { city: destination, dates: date, options: options }})
    setTimeout(() => { setDelay(true) }, 1000)
  }, [date])

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" id="#city" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
              {`${format((date[0]?.startDate), "MM/dd/yyyy")} to ${format((
                date[0]?.endDate),
                "MM/dd/yyyy")}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" id="#min" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" id="#max" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {!error ? (!loading && delay) ? (data.length !== 0 ? data.map((item) => (
              <SearchItem item={item}  key={item._id}/>
            )) 
             : <Error type="data" message="not found this destination!"/>
            ): <Sketeton type="searchItem" />
              : <Error type="data"  message="can't fetch data" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
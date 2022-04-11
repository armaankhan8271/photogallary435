import "./App.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useState } from "react";
import Nav from "./Components/Nav";

function App() {
  const [image, setimage] = useState([]);
  const [search, setsearch] = useState([])
  const api = `https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=WbHbsT0exIa_rIiZlu2i92iQufzyRmy7eXKMFooTYms`;

  const getapi = () => {
    axios.get(api).then((value) => {
      console.log(value);
      setimage(value.data.results);
    });
  };

  return (
    <>
    <Nav/>
      <div className="text-center  color-white">
        <h1 className="display-1 fw-bolder my-3  text-white">
          {" "}
          PHOTO GALLARY {" "}
        </h1 >
        <hr />
      </div>
      <div className="container bb">
        <div className="fontpassword d-flex container">
          <input
            className="form-control bg-dark bds fs-3 border-0 text-light"
            type="text"
            placeholder="serach"
            name="psw"
            value={search}
            id="borderdemo"
            onChange={(e) => setsearch(e.target.value)}
            required
          />
          
         
      <button onClick={getapi} className="fs-1 borderdemo  bg-dark">
      <SearchIcon style={{ width: "90px", height: "60px",color:"white" }} />
      </button>
        </div>
      </div>
      <div className="container  ">
        <div className="row ">
          {image.map((value, index) => {
            return (
              <div className="col-6 my-5   ">
                <div className="card box  bg-dark border-0" style={{width: "25rem"}}>
                  <img src={value.urls.small} className="card-img-top rounded-circle " alt="request is over" />
                  
    
    
    <a href={value.links.download} class="btn btn-light bg-dark text-light fw-bolder down fs-1 "rel="noreferrer" target="_blank">Download</a>
  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const [hrs, sethrs] = useState(0);
  const handlechange = (e) => {
    sethrs(e.target.value);
  };
  return (
    <div>
      <div className="card m-3 text-center" style={{ width: "20rem" }}>
        <img
          src={props.image}
          className="card-img-top"
          alt="..."
          style={{ height: "200px" }}
        />

        <div className="card-body">
          <h2 className="card-title">{props.toolName}</h2>
          <h5 className="card-text">{props.dealerName}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Phone no: <b>{props.contactno}</b>
          </li>
        </ul>
        <div className="container w-100">
          <label>Enter No. of Hrs:</label>
          <input
            onChange={handlechange}
            className="h-20 m-2"
            name="hrs"
            style={{ "width": "35px"}}
            value={hrs}
          />
        </div>
        <div>
          <h5 className="container w-100">
            <h5>Total Prize: {hrs * 500}</h5>
          </h5>
        </div>
        <Link to="/Login">
          <button class="btn btn-success center m-3 mt-1" type="submit">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}

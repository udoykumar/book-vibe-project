import React from "react";
import BookImg from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="flex justify-around items-center p-12 w-screen">
      <div>
        <h1>Books to freshen up your bookshelf</h1>
        <button className="btn btn-primary">View the List</button>
      </div>
      <div>
        <img className="w-9/12" src={BookImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";
import ReactiveButton from "reactive-button";

const Book = ({ singleBook }) => {
  const {
    bookName,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
    bookId,
  } = singleBook;

  //   console.log(singleBook);
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-full mx-auto shadow-sm border ">
        <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
          <img
            src={image}
            alt="Shoes"
            className=" h-[400px] bg-cover bg-center "
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            {tags.map((tag, ind) => (
              // <button>{tag}</button>
              <ReactiveButton key={ind} color="red" idleText={tag} />
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>{publisher}</p>
          <div className="border-t border-dashed"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating}
              <FaRegStarHalfStroke />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

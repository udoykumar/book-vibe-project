import React from "react";

import { useLoaderData, useParams } from "react-router";
import ReactiveButton from "reactive-button";
import { addToStoredDB } from "../../utilite/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    bookName,
    image,
    yearOfPublishing,
    totalPages,
    review,
    rating,
    publisher,
    category,
    author,
  } = singleBook;

  const handleMarkAsRead = (id) => {
    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
    addToStoredDB(id);
  };
  return (
    <div className="flex justify-between items-center gap-6 my-20">
      <div className=" w-1/2">
        <img
          className="bg-gray-200 rounded-2xl w-[500px] bg-cover "
          src={image}
          alt="Album"
        />
      </div>
      <div className="w-1/2 ">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">{bookName}</h2>
          <p className="text-2xl">
            <span className="font-bold mr-2">By:</span>
            {author}
          </p>
          <p className="border-t-2  border-b-2 border-dashed py-3 font-bold">
            {category}
          </p>
          <p className="text-gray-500 font-semibold">
            <span className="font-bold text-black">Review: </span>
            {review}
          </p>
          <p className="text-lg font-semibold">
            Number of Pages:<span className="font-bold "> {totalPages}</span>
          </p>
          <p className="text-lg font-semibold">
            Publisher:<span className="font-bold "> {publisher}</span>
          </p>
          <p className="text-lg font-semibold">
            Year of Publishing:
            <span className="font-bold "> {yearOfPublishing}</span>
          </p>
          <p className="text-lg font-semibold">
            Rating:<span className="font-bold "> {rating}</span>
          </p>
          <div className="space-x-6">
            <ReactiveButton
              onClick={() => handleMarkAsRead(id)}
              idleText="Read"
              size="large"
              color="red"
              rounded
            />
            <ReactiveButton
              shadow
              color="red"
              rounded
              size="large"
              idleText="Wishlist"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

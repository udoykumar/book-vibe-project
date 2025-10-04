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
  const { bookName, image } = singleBook;
  console.log(singleBook);

  const handleMarkAsRead = (id) => {
    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
    addToStoredDB(id);
  };
  return (
    <div className="w-2/3 mx-auto m-6 text-center">
      <img src={image} alt="" className="w-79 mx-auto" />
      <h4>{bookName}</h4>
      <div className="space-x-2 flex justify-center">
        <div>
          <ReactiveButton
            onClick={() => handleMarkAsRead(id)}
            outline
            color="red"
            idleText="Read"
          />
        </div>
        <ReactiveButton shadow rounded color="red" idleText="Add To WishList" />
      </div>
    </div>
  );
};

export default BookDetails;

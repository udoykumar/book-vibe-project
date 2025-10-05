import React from "react";
import ReactiveButton from "reactive-button";

const ReadBook = ({ book }) => {
  const {
    image,
    bookName,
    author,
    rating,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
  } = book;
  return (
    <div className="border border-gray-100 rounded-2xl m-5">
      <div className="flex items-center gap-6 p-3">
        <div className="">
          <img
            className="bg-gray-200 rounded-2xl w-[200px]  bg-cover "
            src={image}
            alt="Album"
          />
        </div>
        <div className="">
          <div className="space-y-4">
            <h2 className=" font-bold">{bookName}</h2>
            <p className="text-xl">
              <span className="font-bold mr-2">By:</span>
              {author}
            </p>

            <div className="flex gap-3 flex-wrap">
              <p className=" font-semibold">
                Number of Pages:
                <span className="font-bold "> {totalPages}</span>
              </p>
              <p className=" font-semibold">
                Publisher:<span className="font-bold "> {publisher}</span>
              </p>
              <p className=" font-semibold">
                Year of Publishing:
                <span className="font-bold "> {yearOfPublishing}</span>
              </p>
            </div>
            <div className="flex gap-6">
              <p
                className={`text-lg font-semibold rounded-2xl px-5 py-2 ${
                  rating < 4.5
                    ? "bg-red-200 text-red-500"
                    : "bg-green-200 text-green-500"
                }`}
              >
                Rating:<span className="font-bold "> {rating}</span>
              </p>
              <button
                className={`${
                  category === "Fiction"
                    ? "bg-green-200 text-green-500"
                    : category === "Fantasy"
                    ? "bg-yellow-200 text-yellow-500"
                    : "bg-red-200 text-red-500"
                } px-9 py-2 rounded-2xl`}
              >
                {category}
              </button>
              <div className="space-x-6">
                <ReactiveButton
                  idleText="View Details"
                  size="large"
                  color="red"
                  rounded
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;

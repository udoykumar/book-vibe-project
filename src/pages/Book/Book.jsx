import React, { use } from "react";

const Book = ({ singleBook }) => {
  const { bookName, author, image } = singleBook;
  //   const data = use(bookPromise);
  //   console.log(data);
  console.log(singleBook);
  return (
    <div className="card bg-base-100 w-full mx-auto shadow-sm border ">
      <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
        <img
          src={image}
          alt="Shoes"
          className=" h-[400px] bg-cover bg-center "
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Card Title
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;

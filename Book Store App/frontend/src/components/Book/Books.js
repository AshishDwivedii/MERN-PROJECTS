import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import './Book.css';
const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books)); //.books = is the collection name thats why we are setting books to db.collection(books)
  }, []); // second [] is given to run useEffect only once

  console.log(books);

  return (
    <div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li className="book" key={i}>
              <Book book={book} />
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;

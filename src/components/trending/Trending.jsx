import React, { useState } from "react";
import "./trending.css";
import Home from "../Homes/Home";
import { trending } from "../../homeData";
export const Trending = () => {
  const [items, setitems] = useState(trending);
  return (
    <>
      <section className="trending">
        <h1>Trending Movies</h1>
        <Home items={items} />
      </section>
    </>
  );
};

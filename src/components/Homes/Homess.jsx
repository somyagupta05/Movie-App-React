import React, { useState } from "react";
import "./homes.css";
import { homeData } from "../../homeData";
import Home from "./Home";

const Homes = () => {
  const [items, setItems] = useState(homeData);

  return (
    <>
      <section className="home">
        <Home items={items} />
      </section>
      <div className="mragin"></div>
    </>
  );
};

export default Homes;

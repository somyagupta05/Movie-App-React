import React, { useState } from "react";
import Homess from "../components/Homes/Homess";
import { Upcoming } from "../components/upcoming/Upcoming";
import { Trending } from "../components/trending/Trending";

import { latest, recommended } from "../homeData";
import { upcome } from "../homeData";
export default function HomePage() {
  const [items, setitems] = useState(upcome);
  const [item, setitem] = useState(latest);
  const [rec, setrec] = useState(recommended);
  return (
    <>
      <Homess />
      <Upcoming items={items} title="Upcoming Movies" />
      <Upcoming items={item} title="Latest Movies" />
      <Trending />
      <Upcoming items={rec} title="Recommended Movies" />
    </>
  );
}

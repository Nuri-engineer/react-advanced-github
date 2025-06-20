import React from "react";
import { useAppSelector } from "../hooks/redux";

function FavouritesPage() {
  const { favorites } = useAppSelector((state) => state.github);

  if (favorites.length === 0)
    return <p className="text-center">No favourites...</p>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favorites.map((item) => (
          <li key={item}>
            <a href={item} target="_blank" rel="noreferrer">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavouritesPage;

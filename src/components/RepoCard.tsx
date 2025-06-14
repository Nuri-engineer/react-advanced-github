import React, { useState } from "react";
import { IRepo } from "../models/models";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavourite, removeFavorite } = useActions();
  const { favorites } = useAppSelector((state) => state.github);

  const [isFav, setIsFav] = useState(favorites.includes(repo.html_url));

  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavourite(repo.html_url);
    setIsFav(true);
  };

  const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavorite(repo.html_url);
    setIsFav(false);
  };

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadov-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold">{repo.forks_count}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo.description}</p>

        {!isFav && (
          <button
            className="py-2 px-4 bg-yellow-400 mr-4 rounded hover:shadow-md transition-all"
            onClick={addToFavorite}
          >
            Add
          </button>
        )}

        {isFav && (
          <button
            className="py-2 px-4 bg-red-400  rounded hover:shadow-md transition-all"
            onClick={removeFromFavorite}
          >
            Remove
          </button>
        )}
      </a>
    </div>
  );
}

export default RepoCard;

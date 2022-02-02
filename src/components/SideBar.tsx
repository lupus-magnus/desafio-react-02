import { Dispatch, useState } from "react";
import { Button } from "./Button";
import { Genre } from "../models/Genre";

import "../styles/sidebar.scss";

type SidebarProps = {
  genres: Genre[];
  selectedGenreId: number;
  setSelectedGenreId: Dispatch<React.SetStateAction<number>>;
};

export const SideBar = ({
  genres,
  selectedGenreId,
  setSelectedGenreId,
}: SidebarProps) => {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};

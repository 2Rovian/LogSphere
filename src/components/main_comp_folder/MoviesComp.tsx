import { useState } from "react";

function MoviesComp() {
  const [mode, setMode] = useState<"search" | "create" | "mymovies">("search");

  return (
    <section className="flex flex-col gap-6 w-full">

      <div className="flex justify-between items-center">

        <div className="flex gap-2">
          <button
            onClick={() => setMode("search")}
            className={`${mode === "search" ? "primary-button" : "primary-outline"}`}
          >
            Search TMDB
          </button>

          <button
            onClick={() => setMode("create")}
            className={`${mode === "create" ? "primary-button" : "primary-outline"}`}
          >
            Add manually
          </button>
        </div>

        <button className={`${mode == "mymovies" ? "primary-button" : "primary-outline"}`}
        onClick={() => setMode("mymovies")}
        >
          My movies
        </button>

      </div>

      {mode === "search" && <div>Search component here</div>}
      {mode === "create" && <div>Manual form here</div>}
      {mode === "mymovies" && <div>All your movies here</div>}

    </section>
  );
}

export default MoviesComp;
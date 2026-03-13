import HomeComp from "./maincompfolder/HomeComp";

function MainComp() {
  return (
    <main className="mx-7 my-10 px-4 py-6 custom-border surface-color flex flex-col items-center text-center gap-4">
      {/* <h2 className="text-2xl font-bold text-[#3a3a3a]">
        Track everything you watch, read or play
      </h2>

      <p className="text-[#5a5a5a] max-w-xl">
        LogSphere lets you keep track of movies, series, books, games and more.
        Build your personal media history in one place.
      </p>

      <button className="mt-4 px-6 py-3 primary-color text-color font-medium cursor-pointer">
        Start logging media
      </button> */}
      <HomeComp />
    </main>
  );
}

export default MainComp;
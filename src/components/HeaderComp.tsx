function HeaderComp() {
  return (
    <header className="mx-5 mt-10 custom-border surface-color">
      
      {/* navigation */}
      <nav className="px-4 py-2 border-b border-[#d0d0d0] flex gap-6 text-[#4a4a4a] font-medium">
        <button className="cursor-pointer">Home</button>
        <button className="cursor-pointer">Movies</button>
        <button className="cursor-pointer">Series</button>
        <button className="cursor-pointer">Books</button>
        <button className="cursor-pointer">Games</button>
        <button className="cursor-pointer">Anime</button>
      </nav>

      {/* main header */}
      <div className="px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-[#4a4a4a]">
          LogSphere
        </h1>

        <div className="flex gap-2">
          <button className="primary-button">
            Login
          </button>
          <button className="primary-button">
            Register
          </button>
        </div>
      </div>

    </header>
  );
}

export default HeaderComp;
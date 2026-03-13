
function SidebarComp() {
  return (
    <aside className="mr-7 hidden lg:flex flex-col w-[240px]  my-10 px-4 py-2 custom-border surface-color gap-6">

      {/* Profile */}
      <div className="flex gap-2  pb-2">

        <img
          src="public/imgs/lainpfp-1.jpeg"
          alt="User avatar"
          className="size-16 object-cover grayscale"
        />

        <div className="flex flex-col">
            <span className="font-semibold text-[#4a4a4a]">
              guest_username
            </span>
            <span className="text-xs text-[#6a6a6a]">
              Guest mode
            </span>
        </div>

      </div>

      {/* Stats */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="font-semibold text-lg text-[#4a4a4a]">
          Activity
        </span>

        <div className="flex justify-between text-[#5a5a5a]">
          <span>Movies</span>
          <span>0</span>
        </div>

        <div className="flex justify-between text-[#5a5a5a]">
          <span>Series</span>
          <span>0</span>
        </div>

        <div className="flex justify-between text-[#5a5a5a]">
          <span>Books</span>
          <span>0</span>
        </div>

        <div className="flex justify-between text-[#5a5a5a]">
          <span>Games</span>
          <span>0</span>
        </div>

        <div className="flex justify-between text-[#5a5a5a]">
          <span>Anime</span>
          <span>0</span>
        </div>
      </div>

      {/* Quick actions */}
      <div className="flex flex-col gap-2 pt-2 ">

        <span className="font-semibold text-[#4a4a4a] text-lg">
          Quick actions
        </span>

        <button className="primary-outline text-sm">
          Log media
        </button>

        <button className="primary-outline text-sm">
          Random pick
        </button>

        <button className="primary-outline text-sm">
          Lain
        </button>
      </div>

    </aside>
  );
}

export default SidebarComp;
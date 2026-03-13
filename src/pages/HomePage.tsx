// import { useState } from "react";
// import MediaFormComp from "../components/MediaFormComp";
import MainComp from "../components/MainComp";
import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";
import SidebarComp from "../components/SidebarComp";

function HomePage() {
  // const [openMediaForm, setOpenMediaForm] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col max-w-[1400px] mx-auto w-full">
      {/* <div className="flex justify-center">
        <button className="text-color text-xl primary-color font-semibold w-fit px-8 py-2 cursor-pointer custom-border"
          onClick={() => setOpenMediaForm(true)}
        >
          Click to Log your first media
        </button>
      </div> */}

      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <HeaderComp />
          <MainComp />
        </div>

        <SidebarComp />
      </div>
      <FooterComp />

      {/* {
        openMediaForm && <MediaFormComp closeModal={() => setOpenMediaForm(false)}/> 
      } */}

    </div>
  )
}

export default HomePage;

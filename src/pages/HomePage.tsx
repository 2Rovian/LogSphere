import { useState } from "react";
import MediaFormComp from "../components/MediaFormComp";
import MainComp from "../components/MainComp";
import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";

function HomePage() {
  const [openMediaForm, setOpenMediaForm] = useState<boolean>(false);

  return (
    <div className="h-screen flex flex-col">
      {/* <div className="flex justify-center">
        <button className="text-color text-xl primary-color font-semibold w-fit px-8 py-2 cursor-pointer custom-border"
          onClick={() => setOpenMediaForm(true)}
        >
          Click to Log your first media
        </button>
      </div> */}
      <HeaderComp />
      <MainComp />
      <FooterComp />

      {
        openMediaForm && <MediaFormComp closeModal={() => setOpenMediaForm(false)}/> 
      }

    </div>
  )
}

export default HomePage;

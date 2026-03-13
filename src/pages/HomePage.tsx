import MainComp from "../components/MainComp";
import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";
import SidebarComp from "../components/SidebarComp";
import UpdatesComp from "../components/UpdatesComp";

function HomePage() {

  return (
    <div className="min-h-screen flex flex-col max-w-350 mx-auto w-full">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <HeaderComp />
          <MainComp />
          <div className="hidden md:block">
            <UpdatesComp />
          </div>
        </div>

        <SidebarComp />

        <div className="md:hidden z-10 mb-48">
          <UpdatesComp />
        </div>

      </div>
      
      <FooterComp />

    </div>
  )
}

export default HomePage;

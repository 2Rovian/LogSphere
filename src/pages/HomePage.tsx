import MainComp from "../components/MainComp";
import HeaderComp from "../components/HeaderComp";
import FooterComp from "../components/FooterComp";
import SidebarComp from "../components/SidebarComp";

function HomePage() {

  return (
    <div className="min-h-screen flex flex-col max-w-[1400px] mx-auto w-full">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <HeaderComp />
          <MainComp />
        </div>

        <SidebarComp />
      </div>
      <FooterComp />

    </div>
  )
}

export default HomePage;

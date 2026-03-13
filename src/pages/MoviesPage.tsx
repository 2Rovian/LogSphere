import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";
import MainComp from "../components/MainComp";
import SidebarComp from "../components/SidebarComp";

function MoviesPage() {

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

export default MoviesPage;
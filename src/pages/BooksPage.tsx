import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";
import MainComp from "../components/MainComp";
import SidebarComp from "../components/SidebarComp";

function BooksPage() {

    return (
        <div className="min-h-screen flex flex-col max-w-350 mx-auto w-full">
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

export default BooksPage;
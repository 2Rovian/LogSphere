import HomeComp from "./main_comp_folder/HomeComp";
import { useLocation } from "react-router-dom";
import MoviesComp from "./main_comp_folder/MoviesComp";
import BooksComp from "./main_comp_folder/BooksComp";
import AnimesComp from "./main_comp_folder/AnimesComp";

function MainComp() {
    const url_path: string = useLocation().pathname;
    let content;
    switch(url_path) {
        case "/movies":
            content = <MoviesComp />
            break;
        case "/books":
            content = <BooksComp />
            break;
        case "/animes":
            content = <AnimesComp />
            break;
        default:
            content = <HomeComp />
    }

    return (
        <main className="mx-7 my-10 px-4 py-6 custom-border surface-color flex flex-col items-center text-center gap-4">
            {content}
        </main>
    );
}

export default MainComp;
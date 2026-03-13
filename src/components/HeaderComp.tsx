import { Link, useLocation } from "react-router-dom";

function HeaderComp() {

    const localation = useLocation();
    const url_path = localation.pathname;

    interface nav_array_props {
        label: string;
        path: string;
        id: number;
    }

    const nav_array: nav_array_props[] = [
        { label: "Home", path: "/", id: 1 },
        { label: "Movies", path: "/movies", id: 1 },
        { label: "Books", path: "/books", id: 3 },
        { label: "Games", path: "/games", id: 4 },
        { label: "Animes", path: "/animes", id: 5 },
    ];   

    return (
        <header className="mx-7 mt-10 custom-border surface-color">

            {/* navigation */}
            <nav className="px-4 py-2 border-b border-[#d0d0d0] flex gap-6 text-[#4a4a4a] font-medium">
                {
                    nav_array.map(navlink => 
                        <Link key={navlink.id} to={navlink.path} className={`cursor-pointer ${url_path == navlink.path ? "font-bold" : ""}`}>
                            {navlink.label}
                        </Link>
                    )
                }
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
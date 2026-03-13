import { Link } from "react-router-dom";

interface buttons_array_props {
    label: string;
    path: string;
    id: number;
}

function HomeComp() {

    const buttons_array: buttons_array_props[] = 
    [
        { label: "Movies", path: "Movies", id: 1 },
        { label: "Series", path: "Series", id: 2 },
        { label: "Books", path: "Books", id: 3 },
        { label: "Games", path: "Games", id: 4 },
        { label: "Anime", path: "Anime", id: 5 }
    ]

    return (
        <section className="flex flex-col gap-8 w-full">

            <div className="flex flex-col items-start gap-3 text-left">
                <h2 className="text-3xl font-bold text-[#3a3a3a]">
                    Welcome to LogSphere
                </h2>

                <p className="text-[#5a5a5a] leading-relaxed">
                    LogSphere is a place to keep track of the media you consume.
                    Organize movies, series, books, games and anime in your personal log.
                </p>

                <p className="text-[#5a5a5a] leading-relaxed">
                    You can use LogSphere with an account or as a guest using your
                    browser's localStorage for persistence.
                </p>
            </div>

            <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-2">
                {
                    buttons_array.map(button =>
                        <Link
                            key={button.id}
                            className="primary-outline"
                            to={button.path}>
                            {button.label}
                        </Link>
                    )
                }
                <button className="primary-outline">LainBtn</button>
                {/* { label: "some_button", path: "/", id: 6 } */}
                {/* <button className="primary-outline hover:bg-[#4a4a4a] hover:text-[#e9e9e9]">Movies</button>
        <button className="primary-outline">Series</button>
        <button className="primary-outline">Books</button>
        <button className="primary-outline">Games</button>
        <button className="primary-outline">Anime</button> */}
            </div>

            <p className="text-sm text-[#6a6a6a] text-left">
                Choose a category above to explore and start logging your media.
            </p>

        </section>
    );
}

export default HomeComp;
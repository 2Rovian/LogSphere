import { Link } from "react-router-dom";

interface buttons_array_props {
    label: string;
    path: string;
    id: number;
}

function HomeComp() {

    const buttons_array: buttons_array_props[] = 
    [
        { label: "Movies", path: "/movies", id: 1 },
        { label: "Books", path: "/books", id: 3 },
        { label: "Games", path: "/games", id: 4 },
        { label: "Anime", path: "/anime", id: 5 },
    ]

    return (
        <section className="flex flex-col gap-8 w-full">

            <div className="flex flex-col items-start gap-3 text-left">
                <h2 className="text-3xl font-bold text-[#3a3a3a]">
                    Welcome to LogSphere
                </h2>

                <p className="text-[#5a5a5a] leading-relaxed">
                    LogSphere is a place to keep track of the media you consume.
                    Organize movies, books, games and anime in your personal log.
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
            </div>

            <p className="text-sm text-[#6a6a6a] text-left">
                Choose a category above to explore and start logging your media.
            </p>

        </section>
    );
}

export default HomeComp;
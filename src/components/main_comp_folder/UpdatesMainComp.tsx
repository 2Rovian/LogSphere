function UpdatesMainComp() {

    interface updates_items_array_props {
        id: number;
        date: string;
        title: string;
        changes: string[];
    }

    const updates_items_array: updates_items_array_props[] = [
        {
            id: 1,
            date: "Mar 10, 2026",
            title: "This page. Updates page",
            changes: [
                "Created updates page"
            ]
        },
        {
            id: 2,
            date: "Mar 10, 2026",
            title: "Movie search using TMDB",
            changes: [
                "Added TMDB movie search",
                "Implemented movie results grid",
                "Users can add movies to their log"
            ]
        }
    ];

    return (
        <section className="flex flex-col gap-y-6 w-full text-left">

            {/* Header */}
            <div className="flex flex-col items-start gap-3">
                <h2 className="text-3xl font-bold text-[#3a3a3a]">
                    Updates
                </h2>

                <p className="text-[#5a5a5a] leading-relaxed">
                    Follow the development of LogSphere. Here you can see new
                    features, improvements and changes made to the platform.
                </p>
            </div>

            <div className="flex flex-col gap-8">
                {updates_items_array.map(item => (
                    <div key={item.id} className="flex flex-col gap-2 border-l-2 border-[#d0d0d0] pl-4">

                        <span className="text-sm text-[#6a6a6a]">
                            {item.date}
                        </span>

                        <h3 className="text-lg font-semibold text-[#3a3a3a]">
                            {item.title}
                        </h3>

                        <ul className="list-disc ml-5 text-[#5a5a5a] text-sm flex flex-col gap-1">
                            {item.changes.map((change_element, index) => (
                                <li key={index}>
                                    {change_element}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default UpdatesMainComp;
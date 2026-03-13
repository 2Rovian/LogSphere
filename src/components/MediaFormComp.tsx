import { useState } from "react";

type MediaType = "movie" | "book" | "series" | "games" | "anime";

type StatusType = "planned" | "consuming" | "completed";

type closeModalProps = {
  closeModal: () => void;
};

function MediaFormComp({ closeModal }: closeModalProps) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState<MediaType>("movie");
  const [status, setStatus] = useState<StatusType>("planned");
  const [rating, setRating] = useState<number | "">("");
  const [review, setReview] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md">
      <div className="bg-[#aeaeae] p-6 custom-border w-100">
        <button onClick={closeModal} className="mb-4 text-sm cursor-pointer">
          close
        </button>

        <form className="flex flex-col gap-3">
          <input
            className="p-2"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <select
            className="p-2"
            value={type}
            onChange={(e) => setType(e.target.value as MediaType)}
          >
            <option value="movie">Movie</option>
            <option value="book">Book</option>
            <option value="series">Series</option>
            <option value="games">Game</option>
            <option value="anime">Anime</option>
          </select>

          <select
            className="p-2"
            value={status}
            onChange={(e) => setStatus(e.target.value as StatusType)}
          >
            <option value="planned">Planned</option>
            <option value="consuming">Consuming</option>
            <option value="completed">Completed</option>
          </select>

          <input
            type="number"
            min="1"
            max="10"
            placeholder="Rating (optional)"
            className="p-2"
            value={rating}
            onChange={(e) =>
              setRating(e.target.value ? Number(e.target.value) : "")
            }
          />

          <textarea
            placeholder="Review (optional)"
            className="p-2"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />

          <button
            type="submit"
            className="primary-color text-color py-2 cursor-pointer "
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default MediaFormComp;
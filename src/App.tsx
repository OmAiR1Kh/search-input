import { useState } from "react";
import "./App.css";
import articles from "./assets/articles";
import { MdCancel } from "react-icons/md";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <main className="w-[95%] m-auto flex flex-col gap-5 pt-5">
      <h1>Superhero Articles</h1>
      <header className="input-header flex flex-col md:flex-row gap-3 w-full items-center">
        <div className="relative w-full md:w-[60%]">
          <input
            type="text"
            placeholder="Search articles..."
            value={inputValue}
            className="w-full outline-none p-2 border border-black rounded"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <MdCancel
            size={25}
            className="absolute top-[50%] translate-y-[-50%] right-[15px] cursor-pointer"
            onClick={() => setInputValue("")}
            color="darkgray"
          />
        </div>
      </header>
      <section className="articles-section flex flex-col items-center gap-4">
        {articles.map((article) => (
          <div key={article.id}>
            <HighlightText
              searchQuery={inputValue}
              text={article.data}
              title={article.title}
            />
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;

const HighlightText = ({
  text,
  searchQuery,
  title,
}: {
  text: string;
  searchQuery: string;
  title?: string;
}) => {
  if (!searchQuery) {
    return (
      <div className="flex flex-col gap-3">
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        <span>{text}</span>
      </div>
    );
  }
  const regex = new RegExp(`(${searchQuery})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      <div className="flex flex-col gap-3">
        {title && <h3 className="font-bold text-lg">{title}</h3>}
        <span>
          {parts.map((part, i) =>
            regex.test(part) ? (
              <span className="bg-yellow-300" key={i}>
                {part}
              </span>
            ) : (
              part
            )
          )}
        </span>
      </div>
    </>
  );
};

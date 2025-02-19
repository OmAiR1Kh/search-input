import { useState } from "react";
import "./App.css";
import articles from "./assets/articles";
import { MdCancel } from "react-icons/md";
import HighlightText from "./components/HighlightText";

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

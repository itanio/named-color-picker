import { useState } from "react";
import "./App.css";
import Papa from "papaparse";

function App() {
    const [keywords, setKeywords] = useState("");

    const handleSearch = (e) => {
        setKeywords(e.target.value);
    };

    return (
        <>
            <header>
                <h1>Named Color Picker</h1>
                <h2>
                    A tool for discovering and grabbing HTML and CSS
                    friendly colors.
                </h2>
                <p className="more-info">
                    For more info, check out the{" "}
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/named-color">
                        MDN's &lt;named-color&gt; reference page
                    </a>
                    .
                </p>
            </header>
            <main>
                <div className="card">
                    <fieldset>
                        <label>Quick search:</label>
                        <input
                            type="text"
                            value={keywords}
                            onChange={handleSearch}
                        ></input>
                    </fieldset>
                    <p>{keywords}</p>
                </div>
            </main>
        </>
    );
}

export default App;

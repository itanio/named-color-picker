import { useState } from "react";
import "./App.css";
import { ColorGrid } from "./ColorGrid";

function App() {
    const [keywords, setKeywords] = useState("");
    const [primarySort, setPrimarySort] = useState("hue");
    const [secondarySort, setSecondarySort] = useState("value");

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeywords(e.currentTarget.value);
    };

    const handlePrimarySort = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrimarySort(e.currentTarget.value);
    };

    const handleSecondarySort = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setSecondarySort(e.currentTarget.value);
    };

    return (
        <>
            <header>
                <h1>Named Color Picker</h1>
                <h2>
                    Discover and grab friendly colors for your HTML/CSS.
                </h2>
            </header>
            <main>
                <div className="card shadow">
                    <p className="more-info">
                        For more info, check out the{" "}
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/named-color">
                            MDN's &lt;named-color&gt; reference page
                        </a>
                        .
                    </p>
                    <div id="tools">
                        <fieldset className="tool">
                            <label htmlFor="filter">Filter by name:</label>
                            <input
                                id="filter"
                                type="text"
                                value={keywords}
                                onChange={handleFilter}
                            ></input>
                        </fieldset>
                        <div className="tool">
                            <fieldset className="radio-fieldset">
                                <legend>Sort by:</legend>
                                <fieldset>
                                    <input
                                        id="primary-sort-hue"
                                        name="primary-sort"
                                        type="radio"
                                        value="hue"
                                        checked={primarySort === "hue"}
                                        onChange={handlePrimarySort}
                                        defaultChecked
                                    ></input>
                                    <label htmlFor="primary-sort-hue">
                                        Hue
                                    </label>
                                    <input
                                        id="primary-sort-name"
                                        name="primary-sort"
                                        type="radio"
                                        value="name"
                                        checked={primarySort === "name"}
                                        onChange={handlePrimarySort}
                                    ></input>
                                    <label htmlFor="primary-sort-name">
                                        Name
                                    </label>
                                </fieldset>
                            </fieldset>
                            <fieldset className="radio-fieldset">
                                <legend>then by:</legend>
                                <fieldset>
                                    <input
                                        id="secondary-sort-value"
                                        name="secondary-sort"
                                        type="radio"
                                        value="value"
                                        checked={secondarySort === "value"}
                                        onChange={handleSecondarySort}
                                    ></input>
                                    <label htmlFor="secondary-sort-value">
                                        Value
                                    </label>
                                    <input
                                        id="secondary-sort-saturation"
                                        name="secondary-sort"
                                        type="radio"
                                        value="saturation"
                                        checked={
                                            secondarySort === "saturation"
                                        }
                                        onChange={handleSecondarySort}
                                    ></input>
                                    <label htmlFor="secondary-sort-saturation">
                                        Saturation
                                    </label>
                                </fieldset>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <ColorGrid keywords={keywords} />
            </main>
        </>
    );
}

export default App;

import { useState, useEffect, useMemo } from "react";
import Papa, { type ParseResult } from "papaparse"; //

interface ColorData {
    name: string;
    hex: string;
}

interface ColorGridProps {
    keywords: string;
}

export const ColorGrid = ({ keywords }: ColorGridProps) => {
    const [data, setData] = useState<ColorData[]>([]);
    const CSV_URL = "/named-colors.csv";

    useEffect(() => {
        async function fetchCsv() {
            try {
                Papa.parse(CSV_URL, {
                    download: true,
                    header: true,
                    skipEmptyLines: true,
                    complete: (results: ParseResult<ColorData>) => {
                        setData(results.data);
                    },
                });
            } catch (error) {
                console.error("Error fetching CSV:", error);
            }
        }

        fetchCsv();
    }, []);

    // useMemo to store certain filters
    const filteredColors = useMemo(() => {
        if (!keywords) {
            return data;
        }
        const lowerKeywords = keywords.toLowerCase();
        return data.filter((color) =>
            color.name.toLowerCase().includes(lowerKeywords),
        );
    }, [data, keywords]);

    return (
        <section>
            <header>
                <h3>CSS/HTML Named Colors</h3>
            </header>
            <div id="color-grid">
                {filteredColors.map((row: ColorData, index: number) => (
                    <div key={index} className="color-block shadow">
                        <div
                            className="swatch"
                            style={{ backgroundColor: row.hex }}
                        ></div>
                        <div className="details">
                            <span>{row.name}</span>
                            <span>{row.hex}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

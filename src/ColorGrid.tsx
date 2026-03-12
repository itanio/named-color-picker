import { useState, useEffect, useMemo } from "react";
import Papa, { type ParseResult } from "papaparse"; //

interface ColorData {
    name: string;
    hex: string;
    hue: number; //0-360
    saturation: number; //0-100
    value: number; //0-100
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
            <div id="color-grid">
                {filteredColors.map((row: ColorData, index: number) => (
                    <div key={index} className="color-block shadow">
                        <div
                            className="swatch"
                            style={{ backgroundColor: row.hex }}
                        >
                            <span style={{ color: "black" }}>
                                {row.name}
                            </span>
                            <span style={{ color: "white" }}>
                                {row.name}
                            </span>
                        </div>
                        <div className="details">
                            <span
                                style={{
                                    backgroundColor: "black",
                                    color: row.hex,
                                }}
                            >
                                {row.hex}
                            </span>
                            <span
                                style={{
                                    backgroundColor: "white",
                                    color: row.hex,
                                }}
                            >
                                {row.hex}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

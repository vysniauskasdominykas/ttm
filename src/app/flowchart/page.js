"use client";
import React from "react";
import Drawflow from "drawflow";
import "drawflow/dist/drawflow.min.css";
import "./style.css";

const initialNodes = [
    "Sample collection",
    "Sample preparation",
    "Data acquisition",
    "Data preprocessing",
    "Statistical analysis",
    "Data interpretation",
    "Bioinformatics",
    "Candidate biomarkers",
    "Biomarker biological justification",
    "Biomarker validation",
    "Clinical implementation",
];

export default function Page() {
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        const editor = new Drawflow(containerRef.current);
        editor.start();
        editor.move
        containerRef.current.scrollTop = 0;
        containerRef.current.scrollLeft = 0;

        for (let i = 0; i < initialNodes.length; i++) {
            const perRow = 3;
            let x = 100 + (i % perRow) * 250;
            let y = 50 + Math.floor(i / perRow) * 200;

            editor.addNode(i.toString(), 1, 1, x, y, "flowchart-node", {}, initialNodes[i]);
        }

        for (let i = 1; i < initialNodes.length + 1; i++) {
            editor.addConnection((i - 1).toString(), i.toString(), "output_1", "input_1");
        }

        return () => {
            editor.clear();
            document.querySelectorAll(".drawflow").forEach(x => x.remove());
        };
    }, []);

    return (
        <React.Fragment>
            <div ref={containerRef} style={{ width: "100%", height: "800px" }} />
        </React.Fragment>
    );
}

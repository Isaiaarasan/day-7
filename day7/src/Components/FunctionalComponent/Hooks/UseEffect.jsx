import { useState, useEffect } from "react";

const UseEffect = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log(`Text changed to: ${text}`);
    }, [text]);

    return (
        <div>
            <h1>This is a useEffect example</h1>
            <input type="number" value={text} onChange={(e) => setText(e.target.value)} />
            <h2>Text is {text}</h2>
        </div>
    );
};

export default UseEffect;
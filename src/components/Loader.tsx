import * as React from "react";
import { useState, useEffect } from "react";

export const Loader = () => {
    const [dots, setDots] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            setDots((dots) => (dots.length === 3 ? "." : `${dots}.`));
        }, 300);
        return () => {
            clearInterval(interval);
        };
    }, []);
    return <span>{dots}</span>;
};

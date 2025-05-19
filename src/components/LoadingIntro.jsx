import { useEffect, useState } from "react"

export const LoadingIntro = () => {
    const [text, setText] = useState("");
    const fullText = "Hello, I'm Leo and glad you are here";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0,index));
            index++;
            if(index > fullText.length) {
                clearInterval(interval)
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);
    return (

            <div className="min-h-[2.5rem] text-4xl font-mono font-bold mb-5">
                {text}
            </div>
    )
}
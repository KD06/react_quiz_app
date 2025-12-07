import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeOut }) {

    const [remainingTime, setRemainingTime] = useState(timeout);


    useEffect(() => {
        const interval = setTimeout(onTimeOut, timeout);

        return () => {
            clearTimeout(interval);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prev) => prev - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return <progress id="question-time" max={timeout} value={remainingTime} />;
}
import React from 'react';

export function useTimer(initialValue = 0) {
    const [timeElapsed, setTimeElapsed] = React.useState(initialValue);
    const [isRunning, setIsRunning] = React.useState(false);
    const intervalRef = React.useRef();

    function clearInterval() {
        window.clearInterval(intervalRef.current);
        intervalRef.current = undefined;
    }

    React.useEffect(() => {
        return clearInterval;
    }, []);

    const toggle = React.useCallback(() => {
        setIsRunning(!isRunning);
        if (isRunning) {
            clearInterval();
        } else {
            setTimeElapsed((curTime) => curTime + 1);
            intervalRef.current = window.setInterval(() => {
                setTimeElapsed((curTime) => curTime + 1);
            }, 1000);
        }
    }, [isRunning]);

    const reset = React.useCallback(() => {
        setIsRunning(false);
        clearInterval();
        setTimeElapsed(initialValue);
    }, [initialValue])

    return { timeElapsed, isRunning, reset, toggle };
}

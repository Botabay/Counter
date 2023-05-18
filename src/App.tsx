import './App.css';
import { useEffect, useState } from 'react'
import { SettingsWindow } from './components/SettingsWindow'
import { CounterWindow } from './components/CounterWindow';

export type CountType = {
    minValue: number
    maxValue: number
    currentValue: number
}
export const App = () => {
    const [countSt, setCountSt] = useState<CountType>(
        { minValue: 0, maxValue: 10, currentValue: 0 }
    );
    const [mode, setMode] = useState<boolean>(true)
    let error = countSt.currentValue >= countSt.maxValue || countSt.minValue
        === countSt.maxValue || countSt.maxValue < 0 || countSt.minValue < 0;
    useEffect(() => {
        window.localStorage.setItem('myCounter', countSt.currentValue.toString());
    }, [countSt.currentValue])
    // useEffect(() => {
    //     setCountSt(countSettings.start);
    //     console.log(countSettings);

    // }, [countSt])

    return (
        <div className="App">
            <SettingsWindow
                callback={setCountSt}
                countSt={countSt}
                mode={mode}
                setMode={setMode}
            />
            <CounterWindow
                countSt={countSt}
                setCountSt={setCountSt}
                mode={mode}
            />
        </div>
    );
}
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
    const [errorSt, setErrorSt] = useState<boolean>(false)

    useEffect(() => {
        window.localStorage.setItem('myCounter', countSt.currentValue.toString());
    }, [countSt.currentValue])

    return (
        <div className="App">
            <SettingsWindow
                callback={setCountSt}
                countSt={countSt}
                mode={mode}
                setMode={setMode}
                // errorSt={errorSt}
                setErrorSt={setErrorSt}
            />
            <CounterWindow
                countSt={countSt}
                setCountSt={setCountSt}
                mode={mode}
                errorSt={errorSt}
            />
        </div>
    );
}
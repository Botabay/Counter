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
    const [countVisibilityMode, setCountVisibilityMode] = useState<boolean>(true)//show number or message
    const [errorSt, setErrorSt] = useState<boolean>(false)//show messages when we are editing to settings

    useEffect(() => {
        window.localStorage.setItem('myCounter', countSt.currentValue.toString());
    }, [countSt.currentValue])

    return (
        <div className="App">
            <SettingsWindow
                callback={setCountSt}
                countSt={countSt}
                countVisibilityMode={countVisibilityMode}
                setCountVisibilityMode={setCountVisibilityMode}
                // errorSt={errorSt}
                setErrorSt={setErrorSt}
            />
            <CounterWindow
                countSt={countSt}
                setCountSt={setCountSt}
                countVisibilityMode={countVisibilityMode}
                errorSt={errorSt}
            />
        </div>
    );
}
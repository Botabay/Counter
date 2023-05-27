import './App.css';
import { useEffect, useState } from 'react'
import { SettingsWindow } from './components/SettingsWindow/SettingsWindow'
import { CounterWindow } from './components/CounterWindow/CounterWindow';

export type CountType = {
    minValue: number
    maxValue: number
    currentValue: number
}
export const App = () => {
    const [countSt, setCountSt] = useState<CountType>(
        { minValue: 0, maxValue: 10, currentValue: 1 }
    );
    const [countVisibilityMode, setCountVisibilityMode] = useState<boolean>(true)//show number or message
    const [errorSt, setErrorSt] = useState<boolean>(false)//show messages when we are editing to settings

    // useEffect(() => {
    //     window.localStorage.setItem('myCounter', JSON.stringify(countSt));
    // }, [countSt.currentValue])

    
    return (
        <div className="App">
            <SettingsWindow
                setCountSt={setCountSt}

                countVisibilityMode={countVisibilityMode}
                setCountVisibilityMode={setCountVisibilityMode}
                
                errorSt={errorSt}
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
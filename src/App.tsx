import './App.css';
import { useEffect, useState } from 'react'
import { SettingsWindow } from './components/SettingsWindow/SettingsWindow'
import { CounterWindow } from './components/CounterWindow/CounterWindow';

export type CountType = {
    minValue: number
    maxValue: number
}
export const App = () => {
    const localStorageSettings = JSON.parse(window.localStorage.getItem('counterSettings')
        || JSON.stringify({ min: 1, max: 15 }));
    const [settings, setSettings] = useState<CountType>({
        minValue: localStorageSettings.min || 0,
        maxValue: localStorageSettings.max || 10
    });
    const [numberOrTextMode, setNumberOrTextMode] = useState<boolean>(true)//show number or message
    const [errorSt, setErrorSt] = useState<boolean>(false)//show messages when we are editing to settings
    const [countBtnsDisable, setCountBtnsDisable] = useState(false);//disability of buttons(inc+reset)
    // useEffect(() => {
    //     window.localStorage.setItem('myCounter', JSON.stringify(countSt));
    // }, [countSt.currentValue])
    const setSettingsCallback = (max:number,min: number) => {
        setSettings({ ...settings, maxValue: max, minValue:min })
    }
    return (
        <div className="App">
            <SettingsWindow
                errorSt={errorSt}
                settings={settings}
                setSettingsCallback={setSettingsCallback}
                setCountBtnsDisable={(v)=>setCountBtnsDisable(v)}
                setNumberOrTextMode={(v)=>setNumberOrTextMode(v)}
                setErrorSt={(v)=>setErrorSt(v)}
            />
            <CounterWindow 
                settings={settings}
                numberOrTextMode={numberOrTextMode}
                errorSt={errorSt}
                countBtnsDisable={countBtnsDisable}
            />
        </div>
    );
}
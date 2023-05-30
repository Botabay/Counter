import './App.css';
import { useState } from 'react'
import { SettingsWindow } from './components/SettingsWindow/SettingsWindow'
import { CounterWindow } from './components/CounterWindow/CounterWindow';

export type CountType = {
    minValue: number
    maxValue: number
}
export const App = (): JSX.Element => {
    const localStorageSettings: CountType = JSON.parse(window.localStorage.getItem('counterSettings')
        || JSON.stringify({ minValue: 0, maxValue: 5 }));
    const [settings, setSettings] = useState<CountType>({
        minValue: localStorageSettings.minValue,
        maxValue: localStorageSettings.maxValue
    });
    //show number or message
    const [numberOrTextMode, setNumberOrTextMode] = useState<boolean>(true)
    //show messages when we are editing to settings
    const [errorSt, setErrorSt] = useState<boolean>(false)
    //disability of buttons(inc+reset)
    const [countBtnsDisable, setCountBtnsDisable] = useState<boolean>(false);
    const setSettingsCallback = (max: number, min: number): void =>
        setSettings({ ...settings, maxValue: max, minValue: min })
    return (
        <div className="App">
            <SettingsWindow
                settings={settings}
                setSettingsCallback={setSettingsCallback}
                setCountBtnsDisable={(v) => setCountBtnsDisable(v)}
                setNumberOrTextMode={(v) => setNumberOrTextMode(v)}
                setErrorSt={(v) => setErrorSt(v)}
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
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
    const [showSettings, setShowSettings] = useState<boolean>(false);
    const showSettingsCallback = ():void => setShowSettings(!showSettings)
    const setSettingsCallback = (max: number, min: number): void =>
        setSettings({ ...settings, maxValue: max, minValue: min })
    return (
        <div className="App">
            {showSettings ?
                <SettingsWindow
                    settings={settings}
                    setSettingsCallback={setSettingsCallback}
                    showSettingsCallback={showSettingsCallback}
                /> :
                <CounterWindow
                    settings={settings}
                    showSettingsCallback={showSettingsCallback}
                />}
        </div>
    );
}
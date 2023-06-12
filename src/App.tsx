import './App.css';
import { useState } from 'react'
import { SettingsWindow } from './components/SettingsWindow/SettingsWindow'
import { CounterWindow } from './components/CounterWindow/CounterWindow';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppRootStateType } from './state/store';
import { numberOrTextModeTrueAC } from './state/numberOrTextMode-reducer';


export type CountType = {
    minValue: number
    maxValue: number
}
export const App = (): JSX.Element => {    
    //show number or message
    //const [numberOrTextMode, setNumberOrTextMode] = useState<boolean>(true)
    // const numberOrTextMode = useSelector<AppRootStateType,boolean>(s=>s.numberOrTextMode)
    // const dispatch=useDispatch()
    //show messages when we are editing to settings
    const [errorSt, setErrorSt] = useState<boolean>(false)
    //disability of buttons(inc+reset)
    const [countBtnsDisable, setCountBtnsDisable] = useState<boolean>(false);
    return (
        <div className="App">
            <SettingsWindow
                setCountBtnsDisable={(v) => setCountBtnsDisable(v)}
                // setNumberOrTextMode={(v) => dispatch(numberOrTextModeTrueAC(v))}
                setErrorSt={(v) => setErrorSt(v)}
            />
            <CounterWindow
                // numberOrTextMode={numberOrTextMode}
                errorSt={errorSt}
                countBtnsDisable={countBtnsDisable}
            />
        </div>
    );
}
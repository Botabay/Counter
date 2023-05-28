import { CountType } from "../../App"
import { Button } from "./../Button/Button"
import { useState } from 'react'
import { CounterDisplay } from "../CounterDisplay/CounterDisplay"
import s from './CounterWindow.module.css'

type PropsType = {
    settings: CountType
    numberOrTextMode: boolean
    errorSt: boolean
    countBtnsDisable: boolean
}

export const CounterWindow = ({
    settings,
    numberOrTextMode,
    errorSt,
    countBtnsDisable
}: PropsType) => {
    const [countSt, setCountSt] = useState(settings.minValue);
    const toInc = () => {
        if (countSt <= settings.maxValue) setCountSt(countSt+1)
    }
    const toReset = () => setCountSt(0)
    return (
        <div className={s.counterWindow} >
            <CounterDisplay
                settings={settings}
                currentValue={countSt}
                numberOrTextMode={numberOrTextMode}
                errorSt={errorSt}
            />
            <div>
                <Button
                    name={'inc'}
                    onClick={toInc}
                    disabled={countSt === settings.maxValue || countBtnsDisable}
                />
                <Button
                    name={'reset'}
                    onClick={toReset}
                    disabled={countSt === settings.minValue || countBtnsDisable}
                />
            </div>
        </div >
    )
}
import { CountType } from "../../App"
import { Button } from "./../Button/Button"
import { useEffect, useState } from 'react'
import { CounterDisplay } from "../CounterDisplay/CounterDisplay"
import s from './CounterWindow.module.css'
import { useSelector } from "react-redux"
import { AppRootStateType } from "../../state/store"

type PropsType = {
    // settings: CountType
    numberOrTextMode: boolean
    errorSt: boolean
    countBtnsDisable: boolean
}

export const CounterWindow = ({
    // settings,
    numberOrTextMode,
    errorSt,
    countBtnsDisable
}: PropsType): JSX.Element => {
    const settings = useSelector<AppRootStateType, CountType>(s => s.settings)

    const [countSt, setCountSt] = useState<number>(settings.minValue);
    useEffect(() => { setCountSt(settings.minValue) }, [settings])
    const toInc = (): void => {
        if (countSt < settings.maxValue) setCountSt(countSt + 1)
    }
    const toReset = (): void => setCountSt(settings.minValue)
    return (
        <div className={s.counterWindow} >
            <CounterDisplay
                // settings={settings}
                currentValue={countSt}
                numberOrTextMode={numberOrTextMode}
                errorSt={errorSt}
            />
            <div>
                <Button
                    name={'inc'}
                    onClick={toInc}
                    disabled={countSt >= settings.maxValue || countBtnsDisable}
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
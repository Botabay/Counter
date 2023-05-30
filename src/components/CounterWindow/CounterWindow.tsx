import { CountType } from "../../App"
import { Button } from "./../Button/Button"
import { useEffect, useState } from 'react'
import { CounterDisplay } from "../CounterDisplay/CounterDisplay"
import s from './CounterWindow.module.css'

type PropsType = {
    settings: CountType
    showSettingsCallback: () => void
}

export const CounterWindow = ({
    settings,
    showSettingsCallback
}: PropsType): JSX.Element => {
    const [countSt, setCountSt] = useState<number>(settings.minValue);
    useEffect(() => { setCountSt(settings.minValue) }, [settings])
    const toInc = (): void => {
        if (countSt < settings.maxValue) setCountSt(countSt + 1)
    }
    const toReset = (): void => setCountSt(settings.minValue)
    return (
        <div className={s.counterWindow} >
            <CounterDisplay
                settings={settings}
                currentValue={countSt}
            />
            <div>
                <Button
                    name={'inc'}
                    onClick={toInc}
                    disabled={countSt >= settings.maxValue}
                />
                <Button
                    name={'reset'}
                    onClick={toReset}
                    disabled={countSt === settings.minValue}
                />
                <Button
                    name={'set'}
                    onClick={showSettingsCallback}
                    disabled={false}
                />
            </div>
        </div >
    )
}
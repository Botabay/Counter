import { CountType } from "../App"
import { Button } from "./Button"
import { Dispatch, SetStateAction } from 'react'
import { CountView } from "./CountView"
import s from './CounterWindow.module.css'

type PropsType = {
    countSt: CountType
    setCountSt: Dispatch<SetStateAction<CountType>>,
    countVisibilityMode: boolean
    errorSt: boolean
}

export const CounterWindow = ({ countSt,
    setCountSt,
    countVisibilityMode,
    errorSt
}: PropsType) => {
    const toInc = () => {
        if (countSt.currentValue <= countSt.maxValue)
            setCountSt({ ...countSt, currentValue: ++countSt.currentValue })
    }
    const toReset = () => {
        setCountSt({ ...countSt, currentValue: countSt.minValue });
    }
    return (
        <div className={s.counterWindow} >
            <CountView
                countSt={countSt}
                countVisibilityMode={countVisibilityMode}
                errorSt={errorSt}
            />
            <div>
                <Button
                    name={'inc'}
                    onClick={toInc}
                    disabled={countSt.currentValue === countSt.maxValue}
                />
                <Button
                    name={'reset'}
                    onClick={toReset}
                    disabled={countSt.currentValue === countSt.minValue}
                />
            </div>
        </div >
    )
}
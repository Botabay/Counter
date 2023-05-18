import { CountType } from "../App"
import { Button } from "./Button"
import { Dispatch, SetStateAction } from 'react'
import { CountView } from "./CountView"

type PropsType = {
    countSt: CountType
    setCountSt: Dispatch<SetStateAction<CountType>>,
    mode: boolean
}

export const CounterWindow = ({ countSt, setCountSt, mode }: PropsType) => {
    const toInc = () => {
        if (countSt.currentValue <= countSt.maxValue)
            setCountSt({ ...countSt, currentValue: ++countSt.currentValue })
        //localStorage.setItem('myCounter',countSt.toString())
    }
    const toReset = () => {
        setCountSt({ ...countSt, currentValue: countSt.minValue });
        // localStorage.setItem('myCounter',countSt.toString())
    }
    let error = countSt.currentValue >= countSt.maxValue || countSt.minValue
        === countSt.maxValue || countSt.maxValue < 0 || countSt.minValue < 0;
    return (
        <div className='counterWindow' >
            <CountView countSt={countSt} error={error} mode={mode} />
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
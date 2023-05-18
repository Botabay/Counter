import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Button } from './Button'
import { CountType } from './../App'

type ValuesType = {
    min: number
    max: number
}
type PropsType = {
    callback: Dispatch<SetStateAction<CountType>>//? need such typisaction
    countSt: CountType
    mode: boolean
    setMode: Dispatch<SetStateAction<boolean>>
    // errorSt: boolean
    setErrorSt: Dispatch<SetStateAction<boolean>>
}
export const SettingsWindow = ({
    callback,
    countSt,
    mode,
    setMode,
    // errorSt, 
    setErrorSt
}: PropsType) => {
    const [values, setValues] = useState<ValuesType>({ min: 0, max: 10 });

    const onMinInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorSt(false)
        setValues({ ...values, min: Number(e.currentTarget.value) })
        if (countSt.minValue < 0 || countSt.minValue >= countSt.maxValue) setErrorSt(true);
        mode && setMode(!mode)
    }
    const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setErrorSt(false)
        setValues({ ...values, max: Number(e.currentTarget.value) })
        if (countSt.maxValue <= countSt.minValue) setErrorSt(true);
        mode && setMode(!mode)
    }
    const toSet = () => {
        callback({ ...countSt, minValue: values.min, maxValue: values.max })
        setMode(!mode)
    }
    return (
        <div className='settingsWindow'>
            <div className='maxField'>
                <span>max value:</span>
                <input
                    type="number"
                    onChange={onMaxInputChangeHandler}
                />
            </div>
            <div className='startField'>
                <span>min value:</span>
                <input
                    type="number"
                    onChange={onMinInputChangeHandler}
                />
            </div>
            <div>
                <Button name={'set'} onClick={toSet} disabled={false} />
            </div>
        </div>
    )
}
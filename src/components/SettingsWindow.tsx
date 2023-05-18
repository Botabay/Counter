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
}
export const SettingsWindow = ({ callback, countSt, mode, setMode }: PropsType) => {
    const [values, setValues] = useState<ValuesType>({ min: 0, max: 10 });

    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, max: Number(e.currentTarget.value) })
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
                    onChange={onInputChangeHandler}
                />
            </div>
            <div className='startField'>
                <span>min value:</span>
                <input
                    type="number"
                    onChange={onInputChangeHandler}
                />
            </div>
            <div>
                <Button name={'set'} onClick={toSet} disabled={false} />
            </div>
        </div>
    )
}
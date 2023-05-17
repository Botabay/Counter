import { useState, ChangeEvent } from 'react'
import { Button } from './Button'

type ValuesType = {
    min: number
    max: number
}
type PropsType = {
    callback: () => void
}
export const SettingsWindow = ({ callback }: PropsType) => {
    const [values, setValues] = useState<ValuesType>({ min: 0, max: 10 });

    const toSet = () => {

    }
    return (
        <div className='settingsWindow'>
            <div className='maxField'>
                <span>max value:</span>
                <input
                    type="number"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setValues({ ...values, max: Number(e.currentTarget.value) })}
                />
            </div>
            <div className='startField'>
                <span>min value:</span>
                <input
                    type="number"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setValues({ ...values, min: Number(e.currentTarget.value) })}
                />
            </div>
            <div>
                <Button name={'set'} onClick={toSet} disabled={false} />
            </div>
        </div>
    )
}
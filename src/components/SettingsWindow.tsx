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

    const toSet = (e: ChangeEvent<HTMLInputElement>) => setValues({ ...values, max: Number(e.currentTarget.value) })
    return (
        <div className='settingsWindow'>
            <div className='maxField'>
                <span>max value:</span>
                <input
                    type="number"
                    onChange={toSet}
                />
            </div>
            <div className='startField'>
                <span>min value:</span>
                <input
                    type="number"
                    onChange={toSet}
                />
            </div>
            <div>
                <Button name={'set'} onClick={()=>callback()} disabled={false} />
            </div>
        </div>
    )
}
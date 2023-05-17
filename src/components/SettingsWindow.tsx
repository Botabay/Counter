import { useState } from 'react'
import { Button } from './Button'

type ValuesType={
    min:number
    max:number
}
export const SettingsWindow=()=>{
    const [values,setValues]=useState<ValuesType>({min:0,max:10});
    
    const toSet = () => {
        // setSettingsSt({ ...settingsSt, minValue: 4, maxValue: 7 });//////????????/
    }
    return (
        <div className='settingsWindow'>
                <div className='maxField'>
                    <span>max value:</span>
                    <input
                        type="number"
                        onChange={(e) => setValues({ ...settingsSt, maxValue: Number(e.currentTarget.value) })}
                    />
                </div>
                <div className='startField'>
                    <span>min value:</span>
                    <input
                        type="number"
                        onChange={(e) => setValues({ ...settingsSt, minValue: Number(e.currentTarget.value) })}
                    />
                </div>
                <div>
                    <Button name={'set'} onClick={toSet} disabled={false} />
                </div>
            </div>
    )
}
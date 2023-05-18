import { useState, Dispatch, SetStateAction } from 'react'
import { Button } from './Button'
import { CountType } from './../App'
import { SettingField } from './SettingField'

type PropsType = {
    callback: Dispatch<SetStateAction<CountType>>//? need such typisaction
    countSt: CountType
    countVisibilityMode: boolean
    setCountVisibilityMode: Dispatch<SetStateAction<boolean>>
    // errorSt: boolean
    setErrorSt: Dispatch<SetStateAction<boolean>>
}
type ValuesType = {
    min: number
    max: number
}
export const SettingsWindow = ({
    callback,
    countSt,
    countVisibilityMode,
    setCountVisibilityMode,
    // errorSt, 
    setErrorSt
}: PropsType) => {
    const [disable, setDisable] = useState<boolean>(false);
    const [values, setValues] = useState<ValuesType>({ min: 1, max: 10 });
    const toSet = () => {
        callback({ ...countSt, minValue: values.min, maxValue: values.max })
        setCountVisibilityMode(!countVisibilityMode)
        setDisable(true);
    }
    return (
        <div className='settingsWindow'>
            <SettingField
                text={'max value:'}
                setErrorSt={setErrorSt}
                setCountVisibilityMode={setCountVisibilityMode}
                countVisibilityMode={countVisibilityMode}
            />
            <SettingField
                text={'min value:'}
                setErrorSt={setErrorSt}
                setCountVisibilityMode={setCountVisibilityMode}
                countVisibilityMode={countVisibilityMode}
            />
            <div>
                <Button name={'set'} onClick={toSet} disabled={disable} />
            </div>
        </div>
    )
}
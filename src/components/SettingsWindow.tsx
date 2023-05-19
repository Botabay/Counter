import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import { Button } from './Button'
import { CountType } from './../App'
import { SettingField } from './SettingField'

type PropsType = {
    callback: Dispatch<SetStateAction<CountType>>//? need such typing
    countSt: CountType
    countVisibilityMode: boolean
    setCountVisibilityMode: Dispatch<SetStateAction<boolean>>
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
    setErrorSt
}: PropsType) => {
    const [disable, setDisable] = useState<boolean>(false);
    const [values, setValues] = useState<ValuesType>({ min: 1, max: 10 });
    const onMinInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDisable(false);
        const currentValue = Number(e.currentTarget.value);
        if (currentValue < 0 || currentValue >= values.max) {
            setErrorSt(true);
        } else {
            setValues({ ...values, min: Number(e.currentTarget.value) })
            setErrorSt(false);
        }
        countVisibilityMode && setCountVisibilityMode(!countVisibilityMode)
    }
    const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = Number(e.currentTarget.value);
        setDisable(false);
        if (currentValue <= values.min) {
            setErrorSt(true);
        } else {
            setErrorSt(false);
            setValues({ ...values, max: currentValue })
        }
        countVisibilityMode && setCountVisibilityMode(!countVisibilityMode)
    }
    const toSet = () => {
        callback({ ...countSt, minValue: values.min, maxValue: values.max })
        setCountVisibilityMode(!countVisibilityMode)
        setDisable(true);
    }
    return (
        <div className='settingsWindow'>
            <SettingField
                text={'max value:'}
                onInputChangeHandler={onMaxInputChangeHandler}
                value={values.max}
            />
            <SettingField
                text={'min value:'}
                onInputChangeHandler={onMinInputChangeHandler}
                value={values.min}
            />
            <div>
                <Button name={'set'} onClick={toSet} disabled={disable} />
            </div>
        </div>
    )
}
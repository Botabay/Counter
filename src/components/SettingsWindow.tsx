import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import { Button } from './Button'
import { CountType } from './../App'
import { SettingField } from './SettingField'
import s from './SettingsWindow.module.css'

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

        if (currentValue < 0) {
            setErrorSt(true);
            setValues({ ...values, min: -1 })
            setDisable(true);
            return;
        }
        if (currentValue >= values.max) {
            setErrorSt(true);
            setValues({ ...values, min: values.max })
            setDisable(true);
            return;
        }
        setValues({ ...values, min: currentValue })
        setErrorSt(false);
        setDisable(false);

        countVisibilityMode && setCountVisibilityMode(!countVisibilityMode)
    }
    const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = Number(e.currentTarget.value);
        setDisable(false);
        if (currentValue <= values.min) {
            setErrorSt(true);
            setValues({ ...values, max: values.min })
            setDisable(true);
            return;
        }
        setErrorSt(false);
        setDisable(false);
        setValues({ ...values, max: currentValue })

        countVisibilityMode && setCountVisibilityMode(!countVisibilityMode)
    }
    const toSet = () => {
        callback({minValue: values.min, maxValue: values.max, currentValue:values.min })
        setCountVisibilityMode(true)
        setDisable(true);
    }
    console.log('render');
    return (
        <div className={s.settingsWindow}>
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
import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import { Button } from './../Button/Button'
import { CountType } from './../../App'
import { SettingField } from './../SettingField/SettingField'
import s from './SettingsWindow.module.css'

type PropsType = {
    setCountSt: Dispatch<SetStateAction<CountType>>//? need such typing
    errorSt: boolean
    countVisibilityMode: boolean
    setCountVisibilityMode: Dispatch<SetStateAction<boolean>>
    setErrorSt: Dispatch<SetStateAction<boolean>>
}
type ValuesType = {
    min: number
    max: number
}
export const SettingsWindow = ({
    setCountSt,
    errorSt,
    countVisibilityMode,
    setCountVisibilityMode,
    setErrorSt
}: PropsType) => {
    const [disable, setDisable] = useState<boolean>(false);
    const localStorageSettings = JSON.parse(window.localStorage.getItem('counterSettings')
        || JSON.stringify({ min: 1, max: 15 }));

    const [values, setValues] = useState<ValuesType>({
        min: localStorageSettings.min,
        max: localStorageSettings.max
    });
    const onMinInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDisable(false);
        const currentValue = Number(e.currentTarget.value);

        if (currentValue < 0) {
            setErrorSt(true);
            setValues({ ...values, min: -1 })
            setDisable(true);
            e.currentTarget.classList.add(s.error);
            return;
        }
        if (currentValue >= values.max) {
            setErrorSt(true);
            setValues({ ...values, min: values.max })
            setDisable(true);
            e.currentTarget.classList.add(s.error);
            return;
        }
        setValues({ ...values, min: currentValue })
        setErrorSt(false);
        setDisable(false);
        e.currentTarget.classList.remove(s.error);

        countVisibilityMode && setCountVisibilityMode(!countVisibilityMode)
    }
    const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = Number(e.currentTarget.value);
        setDisable(false);
        if (currentValue <= values.min) {
            setErrorSt(true);
            setValues({ ...values, max: values.min })
            setDisable(true);
            e.currentTarget.classList.add(s.error);
            return;
        }
        setErrorSt(false);
        setDisable(false);
        setValues({ ...values, max: currentValue })
        e.currentTarget.classList.remove(s.error);

        countVisibilityMode && setCountVisibilityMode(!countVisibilityMode)
    }
    const toSet = () => {
        setCountSt({ minValue: values.min, maxValue: values.max, currentValue: values.min })
        setCountVisibilityMode(true)
        setDisable(true);
        window.localStorage.setItem('counterSettings', JSON.stringify(values));
    }
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
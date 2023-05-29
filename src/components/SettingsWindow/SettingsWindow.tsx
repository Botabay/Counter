import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import { Button } from './../Button/Button'
import { CountType } from './../../App'
import { SettingField } from './../SettingField/SettingField'
import s from './SettingsWindow.module.css'

type PropsType = {
    settings: CountType
    setSettingsCallback: (max: number, min: number) => void
    errorSt: boolean
    setNumberOrTextMode: Dispatch<SetStateAction<boolean>>
    setErrorSt: Dispatch<SetStateAction<boolean>>
    setCountBtnsDisable: Dispatch<SetStateAction<boolean>>
}
export const SettingsWindow = ({
    settings,
    setSettingsCallback,
    errorSt,
    setNumberOrTextMode,
    setErrorSt,
    setCountBtnsDisable
}: PropsType) => {
    const [disable, setDisable] = useState<boolean>(false);//disability of button(set)
    const [minValue, setMinValue] = useState(settings.minValue)
    const [maxValue, setMaxValue] = useState(settings.maxValue)

    const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value);
        if (value < minValue) {
            setMaxValue(minValue);
        } else setMaxValue(value);

        setDisable(value === minValue || minValue === maxValue || minValue === -1);
        setErrorSt(value === minValue || minValue === maxValue || minValue === -1);

        setNumberOrTextMode(false)
        setCountBtnsDisable(true)
    }
    const onMinInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value);

        if (value < 0) {
            setMinValue(-1);
        } else setMinValue(value)

        if (value > maxValue) setMinValue(maxValue); else setMinValue(value);

        setDisable(value === -1 || value === maxValue || minValue === maxValue);
        setErrorSt(value === -1 || value === maxValue || minValue === maxValue);

        setNumberOrTextMode(false)
        setCountBtnsDisable(true)
    }
    const toSet = () => {
        setSettingsCallback(maxValue, minValue)
        setNumberOrTextMode(true)
        setDisable(true);
        setCountBtnsDisable(false);
        // window.localStorage.setItem('counterSettings', JSON.stringify(values));
    }
    let minlocalErrorS = (minValue < 0) ? true : false;//bad adding errorClass

    return (
        <div className={s.settingsWindow}>
            <SettingField
                text={'max value:'}
                onInputChangeHandler={onMaxInputChangeHandler}
                value={maxValue}
            />
            <SettingField
                text={'min value:'}
                onInputChangeHandler={onMinInputChangeHandler}
                value={minValue}
                localErrorS={minlocalErrorS}
            />
            <div>
                <Button name={'set'} onClick={toSet} disabled={disable} />
            </div>
        </div>
    )
}
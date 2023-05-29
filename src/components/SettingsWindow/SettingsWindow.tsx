import { useState, ChangeEvent } from 'react'
import { Button } from './../Button/Button'
import { CountType } from './../../App'
import { SettingField } from './../SettingField/SettingField'
import s from './SettingsWindow.module.css'

type PropsType = {
    settings: CountType
    setSettingsCallback: (max: number, min: number) => void
    setNumberOrTextMode: (v: boolean) => void
    errorSt: boolean
    setErrorSt: (v: boolean) => void
    setCountBtnsDisable: (v: boolean) => void
}
export const SettingsWindow = ({
    settings,
    setSettingsCallback,
    setNumberOrTextMode,
    errorSt,
    setErrorSt,
    setCountBtnsDisable
}: PropsType) => {
    const [minValue, setMinValue] = useState(settings.minValue)
    const [maxValue, setMaxValue] = useState(settings.maxValue)

    const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value);
        if (value < minValue) return;

        setMaxValue(value);
        setErrorSt(value === minValue || minValue < 0);

        setNumberOrTextMode(false)
        setCountBtnsDisable(true)
    }

    const onMinInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value);
        if (value > maxValue) return;
        if (value < 0) value = -1;

        setMinValue(value)
        setErrorSt(value < 0 || value === maxValue || maxValue === 0);

        setNumberOrTextMode(false)
        setCountBtnsDisable(true)
    }

    const toSet = () => {
        setSettingsCallback(maxValue, minValue)
        setNumberOrTextMode(true)
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
                <Button name={'set'} onClick={toSet} disabled={errorSt} />
            </div>
        </div>
    )
}
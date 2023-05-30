import { useState, ChangeEvent } from 'react'
import { Button } from './../Button/Button'
import { CountType } from './../../App'
import { SettingField } from './../SettingField/SettingField'
import s from './SettingsWindow.module.css'

type PropsType = {
    settings: CountType
    setSettingsCallback: (max: number, min: number) => void
    setErrorSt: (v: boolean) => void
    showSettingsCallback: () => void
}
export const SettingsWindow = ({
    settings,
    setSettingsCallback,
    setErrorSt,
    showSettingsCallback
}: PropsType): JSX.Element => {
    const [isDisabled, setIsDisabled] = useState<boolean>(true)
    const [minValue, setMinValue] = useState<number>(settings.minValue)
    const [maxValue, setMaxValue] = useState<number>(settings.maxValue)

    const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        let value: number = Number(e.currentTarget.value);
        if (value < minValue) return;

        setMaxValue(value);
        setErrorSt(value === minValue || minValue < 0);
        setIsDisabled(value === minValue || minValue < 0)
    }

    const onMinInputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        let value: number = Number(e.currentTarget.value);
        if (value > maxValue) return;
        if (value < 0) value = -1;

        setMinValue(value)
        setErrorSt(value < 0 || value === maxValue || maxValue === 0);
        setIsDisabled(value < 0 || value === maxValue || maxValue === 0);
    }

    const toSet = (): void => {
        setSettingsCallback(maxValue, minValue)
        showSettingsCallback()
        setIsDisabled(true)
        window.localStorage.setItem('counterSettings', JSON.stringify({ minValue, maxValue }));
    }

    return (
        <div className={s.settingsWindow + ' ' + (maxValue === minValue && s.error)}>
            <SettingField
                text={'max value:'}
                onInputChangeHandler={onMaxInputChangeHandler}
                value={maxValue}
            />
            <SettingField
                text={'min value:'}
                onInputChangeHandler={onMinInputChangeHandler}
                value={minValue}
                localErrorS={minValue < 0}
            />
            <div>
                <Button name={'set'} onClick={toSet} disabled={isDisabled} />
            </div>
        </div>
    )
}
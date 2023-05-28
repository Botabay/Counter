import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import { Button } from './../Button/Button'
import { CountType } from './../../App'
import { SettingField } from './../SettingField/SettingField'
import s from './SettingsWindow.module.css'

type PropsType = {
    settings:CountType
    callbackMin:(v:number)=>void
    callbackMax:(v:number)=>void
    errorSt: boolean
    setNumberOrTextMode: Dispatch<SetStateAction<boolean>>
    setErrorSt: Dispatch<SetStateAction<boolean>>
    setCountBtnsDisable: Dispatch<SetStateAction<boolean>>
}
export const SettingsWindow = ({
    settings,
    callbackMin,
    callbackMax,
    errorSt,
    setNumberOrTextMode,
    setErrorSt,
    setCountBtnsDisable
}: PropsType) => {
    const [disable, setDisable] = useState<boolean>(false);//disability of button(set)
    const onMinInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = Number(e.currentTarget.value);
        e.currentTarget.classList.remove(s.error)//??????
        if (currentValue < 0) {
            setErrorSt(true);
            setDisable(true);
            e.currentTarget.classList.add(s.error)//??????

            return;
        }
        if (currentValue >= settings.maxValue) {
            setErrorSt(true);
            
            setDisable(true);
            return;
        }
        // callbackMin(currentValue)
        setErrorSt(false);
        if (!errorSt) setDisable(false);

        setNumberOrTextMode(false)
        setCountBtnsDisable(true);
    }
    const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     const currentValue = Number(e.currentTarget.value);
    //     // setDisable(false);
    //     if (currentValue <= values.min) {
    //         setErrorSt(true);
    //         setDisable(true);
    //         return;
    //     }
    //     if (!errorSt) setDisable(false);
    //     setErrorSt(false);

    //     // callbackMax(currentValue )

    //     setNumberOrTextMode(false)
    //     setCountBtnsDisable(true)
    }
    const toSet = () => {
        callbackMax('dd')//// fix
        setNumberOrTextMode(true)
        setDisable(true);
        setCountBtnsDisable(false);
        // window.localStorage.setItem('counterSettings', JSON.stringify(values));
    }
    return (
        <div className={s.settingsWindow}>
            <SettingField
                // id={'max'}
                text={'max value:'}
                onInputChangeHandler={onMaxInputChangeHandler}
                value={values.max}
            />
            <SettingField
                // id={'min'}
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
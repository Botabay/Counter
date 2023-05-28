import { CountType } from '../../App'
import s from './CounterDisplay.module.css'

type PropsType = {
    settings: CountType
    currentValue: number
    numberOrTextMode: boolean
    errorSt: boolean
}

export const CounterDisplay = ({
    settings,
    currentValue,
    numberOrTextMode,
    errorSt
}: PropsType) => {
    const GOOD_MESSAGE = 'enter values and press "set"'
    const WRONG_MESSAGE = 'incorrect value!'
    const isSupremed = currentValue === settings.minValue ||
        currentValue === settings.maxValue
    return (
        <>
            {
                numberOrTextMode ?
                    <div className={s.based + ' ' + (isSupremed && s.red)}>
                        {currentValue}
                    </div> :
                    <div className={errorSt ? s.based + ' ' + s.red : s.based}>
                        {errorSt ? WRONG_MESSAGE : GOOD_MESSAGE}
                    </div>
            }
        </>
    )
}

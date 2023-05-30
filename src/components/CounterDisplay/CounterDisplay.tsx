import { CountType } from '../../App'
import s from './CounterDisplay.module.css'

type PropsType = {
    settings: CountType
    currentValue: number
    errorSt: boolean
}

export const CounterDisplay = ({
    settings,
    currentValue,
    errorSt
}: PropsType): JSX.Element => {
    const GOOD_MESSAGE = 'enter values and press "set"'
    const WRONG_MESSAGE = 'incorrect value!'
    const isSupremed: boolean = currentValue <= settings.minValue ||
        currentValue >= settings.maxValue
    return (
        <>
            <div className={s.based + ' ' + (isSupremed && s.red)}>
                {currentValue}
            </div>
        </>
    )
}

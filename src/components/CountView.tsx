import { CountType } from '../App'
import s from './CountView.module.css'

type PropsType = {
    countSt: CountType
    countVisibilityMode: boolean
    errorSt: boolean
}

export const CountView = ({
    countSt,
    countVisibilityMode,
    errorSt
}: PropsType) => {
    const GOOD_MESSAGE = 'enter values and press "set"'
    const WRONG_MESSAGE = 'incorrect value!'
    let countLocalError = countSt.currentValue === countSt.minValue ||
        countSt.currentValue === countSt.maxValue
    return (
        <div className={s.based + ' ' + (countLocalError && s.red)}>
            {
                countVisibilityMode ? countSt.currentValue :
                    errorSt ? WRONG_MESSAGE : GOOD_MESSAGE
            }
        </div>
    )
}
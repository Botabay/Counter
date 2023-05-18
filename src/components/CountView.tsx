import { CountType } from '../App'
import s from './CountView.module.css'

type PropsType = {
    countSt: CountType
    error: boolean
    countVisibilityMode: boolean
    errorSt: boolean
}

export const CountView = ({
    countSt,
    error,
    countVisibilityMode,
    errorSt
}: PropsType) => {
    const GOOD_MESSAGE = 'enter values and press "set"'
    const WRONG_MESSAGE = 'incorrect value!'
    return (
        <div className={s.based + ' ' + (error && s.red)}>
            {
                countVisibilityMode ? countSt.currentValue :
                    errorSt ? GOOD_MESSAGE : WRONG_MESSAGE
            }
        </div>
    )
}
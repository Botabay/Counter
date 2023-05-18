import { CountType } from '../App'
import s from './CountView.module.css'

type PropsType = {
    countSt: CountType
    error: boolean
    mode: boolean
}

export const CountView = ({
    countSt,
    error,
    mode
}: PropsType) => {
    return (
        <div className={s.based + ' ' + (error && s.red)}>
            {mode ? countSt.currentValue : countSt.maxValue > countSt.minValue ? 'enter values and press "set"' : 'incorrect value!'}
        </div>
    )
}
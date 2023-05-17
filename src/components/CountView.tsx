import s from './CountView.module.css'
type PropsType = {
    count: number
    error: boolean
    correctValue: boolean
}

export const CountView = ({
    count,
    error,
    correctValue
}: PropsType) => {
    return (
        <div className={s.based + ' ' + (error && s.red)}>
            {count}

            <p>
                {(correctValue && 'enter values and press "set"')
                    || (correctValue || 'incorrect value!')}
            </p>
        </div>
    )
}


// export const CountView = (props: PropsType) => {
//     const calcClassName = s.based + " " + (props.count === 5 && s.red);
//     return (
//         <div className={calcClassName}>
//             {props.count}
//         </div>
//     )
// }
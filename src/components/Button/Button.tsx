type PropsType = {
    name: string
    onClick: () => void
    disabled: boolean
}
export const Button = (props: PropsType): JSX.Element => {
    const onClickHandler = (): void => props.onClick()
    return (
        <button onClick={onClickHandler} disabled={props.disabled}> {props.name}</button>
    )
}
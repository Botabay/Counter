export type numberOrTextModeActionType = {
    type: string
    value:boolean
}

type ActionsType = numberOrTextModeActionType

const initialState: boolean = true;

export const numberOrTextModeReducer = (
    state = initialState,
    action: ActionsType
): boolean => {
    switch (action.type) {
        case 'SET': {
            return action.value
        }
        default:
            return state;
        // throw new Error("I don't understand this type")
    }
}

export const numberOrTextModeTrueAC = (value:boolean): numberOrTextModeActionType => {
    return { type: 'SET', value } as const
}


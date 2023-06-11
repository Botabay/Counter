import { CountType } from '../App';
import { loadState } from '../localStorage/localStorage';

export type settingsActionType = {
    type: string
    min: number
    max: number
}

type ActionsType = settingsActionType

// const initialState: CountType = {  } //does not work,why

// const persistedState = loadState();

const initialState: CountType = loadState() || {};

export const settingsReducer = (
    state = initialState,
    action: ActionsType
): CountType => {
    switch (action.type) {
        case 'SET-SETTINGS': {
            return { minValue: action.min, maxValue: action.max }
        }
        default:
            return state;
        // throw new Error("I don't understand this type")
    }
}

export const settingsAC = (max: number, min: number): settingsActionType => {
    return { type: 'SET-SETTINGS', min, max } as const
}


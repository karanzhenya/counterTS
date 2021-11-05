export type stateType = {
    startValue: number
    maxValue: number
    value: number
}

export type ChangeStartValueActionType = {
    type: 'CHANGE-START-VALUE'
    newStartValue: number
}
export type ChangeMaxValueActionType = {
    type: 'CHANGE-MAX-VALUE'
    newMaxValue: number
}
export type ChangeValueActionType = {
    type: 'CHANGE-VALUE'
    newValue: number
}

export type ActionsType = ChangeStartValueActionType | ChangeMaxValueActionType | ChangeValueActionType

const initialState: stateType = {
    startValue: 0,
    maxValue: 0,
    value: 0,

}
export const counterReducer = (state: stateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'CHANGE-START-VALUE': {

            const stateCopy = {...state}
            stateCopy.startValue = action.newStartValue
            /*action.newStartValue > stateCopy.startValue ?
                stateCopy.startValue = stateCopy.startValue + 1 : stateCopy.startValue = stateCopy.startValue - 1*/
            return stateCopy
        }
        case 'CHANGE-MAX-VALUE': {
            const stateCopy = {...state}
            stateCopy.maxValue = action.newMaxValue
            /*action.newMaxValue > stateCopy.maxValue ?
                stateCopy.maxValue = stateCopy.maxValue + 1 : stateCopy.maxValue = stateCopy.maxValue - 1*/
            return stateCopy
        }
        case 'CHANGE-VALUE': {
            const stateCopy = {...state}
            stateCopy.value = action.newValue
            return stateCopy
        }
        default:
            return state;
    }
}

export const changeStartValueAC = (newStartValue: number) => {
    return {type: 'CHANGE-START-VALUE', newStartValue}
}
export const changeMaxValueAC = (newMaxValue: number) => {
    return {type: 'CHANGE-MAX-VALUE', newMaxValue}
}
export const changeValueAC = (newValue: number) => {
    return {type: 'CHANGE-VALUE', newValue}
}
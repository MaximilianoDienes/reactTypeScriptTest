import { useReducer } from "react"
import { Sub } from "../types"

export interface FormState {
    inputValues: Sub
}

export const INITIAL_STATE = {
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''
}

export type FormReducerAction = {
    type: "change_value",
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "clear"
}

export const FORM_REDUCER = (state: FormState["inputValues"], action: FormReducerAction) => {
    switch (action.type) {
        case "change_value":
            const {inputName, inputValue} = action.payload;
            return {
                ...state,
                [inputName]: inputValue
            }
        case "clear":
            return INITIAL_STATE
    }
}

export const useNewSubForm = () => {
    return useReducer(FORM_REDUCER, INITIAL_STATE)
}
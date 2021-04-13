import * as Actions from '../actions/Theme-actions'
import { darkTheme, lightTheme } from '../../components/UI/theme/theme'

const intialState = {
    theme: darkTheme
}

export const ThemeReducer = (state: any = intialState, action: any) => {
    switch(action.type) {
        case Actions.APPLY_THEME: 
        return {...state, theme: action.theme}
        default:  
        return state
    }
}


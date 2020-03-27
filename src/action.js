import {CHANGE_SEARCH_FIELD} from './constants'

export const setSearchField = (text) => ({
    type:CHANGE_SEARCH_FIELD,
    payload = text
})

// its taking text input and returning a object
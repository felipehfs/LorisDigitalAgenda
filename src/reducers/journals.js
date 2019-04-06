import {
    SET_JOURNALS,
    FILTER_JOURNALS
} from '../actions/types'
const initialState = []

const wordMatches = (pattern, source) => new RegExp(pattern, 'i').test(source)

export default function(state=initialState, action) {
    switch(action.type) {
        case SET_JOURNALS:
            return [...action.payload]
        case FILTER_JOURNALS:
            return state.filter(journal => wordMatches(action.payload, journal.description))
        default:
            return state
    }
}
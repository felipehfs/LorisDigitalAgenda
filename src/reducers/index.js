import JournalReducer from './journals'
import { combineReducers} from 'redux'

export default combineReducers({
    journals: JournalReducer
})
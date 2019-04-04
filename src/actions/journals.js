import { readAllJournals, 
  archiveJournal, 
  onlyArchiveJournals,
  newJournal,
  removeJournal as dropJournal
} from "../helpers/api";
import { SET_JOURNALS } from "./types";

export const setJournals = dispatch => ({
  type: SET_JOURNALS,
  payload: dispatch
});

export const fetchJournals = () => dispatch => {
  readAllJournals()
    .then(resp => {
      dispatch(setJournals(resp));
    })
    .catch(e => console.error(e));
};

export const archieveJournal = (id, filed) => dispatch => {
  archiveJournal(id, filed)
    .then(resp => {
      console.log("archieved", filed)
    })
    .catch(e => console.error(e));
};

export const removeJournal =  id => dispatch => {
  dropJournal(id)
    .catch(err => console.error(err))
}

export const fetchArchivedJournals = () => dispatch => {
  onlyArchiveJournals()
    .then(resp => dispatch(setJournals(resp)))
    .catch(err => console.error(err))
}

export const createJournals = (journals) => dispatch => {
  newJournal(journals)
    .then(resp => console.log("Journal created"))
    .catch(err => console.error(err))
}
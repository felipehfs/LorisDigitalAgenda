import { readAllJournals, 
  archiveJournal, 
  onlyArchiveJournals,
  newJournal,
  updateJournal,
  getAllStateJournals,
  removeJournal as dropJournal
} from "../helpers/api";
import { SET_JOURNALS, FILTER_JOURNALS } from "./types";

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
      if (filed) {
        dispatch(fetchArchivedJournals())
      } else {
        dispatch(fetchJournals())
      }
    })
    .catch(e => console.error(e));
};

export const removeJournal =  (id,filed) => dispatch => {
  dropJournal(id)
    .then(resp => {
        if (filed) {
          dispatch(fetchArchivedJournals())
        } else {
          dispatch(fetchJournals())
        }
    })
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

export const changeJournal = journal => dispatch => {
  updateJournal(journal)
  .then(resp => console.log("Journal updated"))
  .catch(err => console.log(err))
}

export const fetchAllStatusJournals = () => dispatch => {
  getAllStateJournals().then(resp => dispatch(setJournals(resp)))
  .catch(err => console.error(err))
}

export const filterJournals = dispatch => ({
  type: FILTER_JOURNALS,
  payload: dispatch
})
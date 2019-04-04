import { readAllJournals, archiveJournal, onlyArchiveJournals } from "../helpers/api";
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

export const fetchArchivedJournals = () => dispatch => {
  onlyArchiveJournals()
    .then(resp => dispatch(setJournals(resp)))
    .catch(err => console.error(err))
}
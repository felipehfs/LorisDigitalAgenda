import { readAllJournals, archiveJournal } from "../helpers/api";
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

export const archieveJournal = id => dispatch => {
  archiveJournal(id)
    .then(resp => {
      dispatch(fetchJournals());
    })
    .catch(e => console.error(e));
};

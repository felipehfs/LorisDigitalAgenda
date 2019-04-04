import React from "react";
import { Grow } from "@material-ui/core";
import PropTypes from "prop-types";
import JournalCard from "../../components/journal/journalCard";
import { fetchJournals } from "../../actions/journals";

import { connect } from "react-redux";

const journalsContainer = props => {
  return (
    <div style={{ padding: 5 }}>
      {props.journals.map(el => (
        <Grow style={{ transformOrigin: "0 0 0" }} key={el._id}>
          <JournalCard {...el} archived={props.archived} />
        </Grow>
      ))}
    </div>
  );
};

journalsContainer.defaultValue = {
  archived: false
}
journalsContainer.propTypes = {
  journals: PropTypes.array.isRequired,
  archived: PropTypes.bool
};

const mapStateToProps = state => ({
  journals: state.journals
});

const mapDispatchToProps = dispatch => ({
  fetchJournals: () => dispatch(fetchJournals())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(journalsContainer);

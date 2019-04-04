import React from "react";
import { Grow } from "@material-ui/core";
import PropTypes from "prop-types";
import JournalCard from "../../components/journal/journalCard";
import { fetchJournals } from "../../actions/journals";

import { connect } from "react-redux";

const journalsContainer = props => {
  React.useEffect(() => {
      props.fetchJournals()
  }, [])
  console.log('journals', typeof props.journals)
  return (
    <div style={{ padding: 5 }}>
      {props.journals.map(el => (
        <Grow style={{ transformOrigin: "0 0 0" }} key={el._id}>
          <JournalCard {...el} />
        </Grow>
      ))}
    </div>
  );
};

journalsContainer.propTypes = {
  journals: PropTypes.array.isRequired
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

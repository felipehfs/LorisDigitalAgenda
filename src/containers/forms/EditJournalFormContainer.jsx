import React from "react";
import { changeJournal } from "../../actions/journals";
import JournalForm from "../../components/forms/journalForm";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const EditJournalForm = props => {
  const handleSubmit = data => {
    const newData = Object.assign({_id: props.journal._id}, data);
    props.changeJournal(newData)
    if (props.journal.filed) {
        props.history.push("/pages/archived")
    } else {
        props.history.push("/dashboard")
    }
  };

  return (
    <JournalForm
      header="Edição da página"
      description={props.journal.description}
      stickers={props.journal.stickers}
      handleSubmit={handleSubmit}
    />
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeJournal }, dispatch);

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(EditJournalForm)
);

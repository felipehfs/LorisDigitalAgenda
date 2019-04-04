import React from 'react'
import JournalForm from '../../components/forms/journalForm'
import { createJournals } from '../../actions/journals'
import { connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'


const JournalFormContainer = props => {
    const handleSubmit = (journals)=> {
        props.createJournals(journals)
        props.history.push("/dashboard")
    }
    return <JournalForm header="Nova página"  handleSubmit={handleSubmit}/>
}

const mapDispatchToProps = dispatch => bindActionCreators({ createJournals}, dispatch)

const enhance = compose(
    connect(null, mapDispatchToProps),
    withRouter
)

export default enhance(JournalFormContainer)
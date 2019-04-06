import React from 'react'
import SearchJournalForm from '../../components/forms/searchForm'
import { filterJournals, fetchAllStatusJournals } from '../../actions/journals'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const SearchJournalFormContainer = props => {
    return (
        <SearchJournalForm handleSubmit={search => {
            if(search) {
                props.filterJournals(search)
            } else {
                props.fetchAllStatusJournals()
            }
        }}/>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ filterJournals, fetchAllStatusJournals}, dispatch)

export default connect(null, mapDispatchToProps)(SearchJournalFormContainer)
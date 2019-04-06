import React, { useEffect} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchAllStatusJournals } from '../../actions/journals'
import Header from '../../components/defaultLayout/Header'
import SearchJournalContainer from '../../containers/forms/SearchJournalFormContainer'
import JournalsContainer from '../../containers/journal/journalsContainer'

const AdvancedSearch = props => {
    useEffect(() => props.fetchAllStatusJournals(), [])
    return (
        <Header>
            <SearchJournalContainer />
            <JournalsContainer />
        </Header>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchAllStatusJournals }, dispatch)

export default connect(null, mapDispatchToProps)(AdvancedSearch)
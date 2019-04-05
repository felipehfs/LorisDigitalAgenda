import React, { useEffect} from 'react'
import Header from '../../components/defaultLayout/Header'
import { fetchArchivedJournals } from '../../actions/journals'
import JournalContainer from '../../containers/journal/journalsContainer'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function ArchievedPage(props) {
    useEffect(() => props.fetchArchivedJournals(),[])
    return (
        <Header>
            <JournalContainer archive />
        </Header>
    )
}

const mapStateToProps = state => ({
    journals: state.journals
})
const mapDispatchToProps = dispatch => bindActionCreators({ fetchArchivedJournals}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ArchievedPage)
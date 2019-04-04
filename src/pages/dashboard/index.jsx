import React from 'react'
import Header from '../../components/defaultLayout/Header'
import { bindActionCreators } from 'redux'
import { fetchJournals} from '../../actions/journals'
import { connect } from 'react-redux'
import JournalContainer from '../../containers/journal/journalsContainer'


const Dashboard = props => {
    React.useEffect(() => {
        props.fetchJournals()
    }, [props.journals])
    return (
        <Header history={props.history}>
           <JournalContainer />
        </Header>
    )
}
const mapStateToProps = state => ({ journals: state.journals })
const mapDispatchToProps = dispatch => bindActionCreators({ fetchJournals}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
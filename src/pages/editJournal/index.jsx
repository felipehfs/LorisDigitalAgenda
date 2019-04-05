import React from 'react'
import Header from '../../components/defaultLayout/Header'
import {findById } from '../../helpers/api'
import EditJournalFormContainer from '../../containers/forms/EditJournalFormContainer'

const EditJournal = props => {
    const [journal, setJournal] = React.useState(null)
    React.useEffect(() => {
        findById(props.match.params.id).then(resp => setJournal(resp))
    }, [])
    return (
        <Header>
            {journal && <EditJournalFormContainer journal={journal} />}
        </Header>
    )
}

export default EditJournal
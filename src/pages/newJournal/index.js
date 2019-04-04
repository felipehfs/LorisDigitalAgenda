import React from 'react'
import Header from '../../components/defaultLayout/Header'
import NewJournalFormContainer from '../../containers/forms/NewjournalFormContainer'

const NewJournalPage = props => {
    return (
        <Header>
            <NewJournalFormContainer />
        </Header>
    )
}

export default NewJournalPage
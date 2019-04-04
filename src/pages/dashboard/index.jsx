import React from 'react'
import Header from '../../components/defaultLayout/Header'
import JournalContainer from '../../containers/journal/journalsContainer'


export default props => {
    return (
        <Header history={props.history}>
           <JournalContainer />
        </Header>
    )
}
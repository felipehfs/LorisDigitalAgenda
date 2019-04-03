import React from 'react'
import JournalCard from '../../components/journal/journalCard'

export default props => (
    <div style={{ overflowY: 'auto', height: '500px', padding: 5}}>
        {
            props.journals.map(el => <JournalCard key={el.id} {...el} />)
        }
    </div>
)
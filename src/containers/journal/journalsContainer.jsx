import React from 'react'
import { Grow} from '@material-ui/core'
import JournalCard from '../../components/journal/journalCard'

export default props => (
    <div style={{ overflowY: 'auto', height: '500px', padding: 5}}>
        {
            props.journals.map(el => <Grow style={{ transformOrigin: '0 0 0' }} key={el.id}><JournalCard {...el} /></Grow>)
        }
    </div>
)
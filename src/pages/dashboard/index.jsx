import React from 'react'
import Header from '../../components/defaultLayout/Header'
import JournalContainer from '../../containers/journal/journalsContainer'

const journals = [
    { id: 1, description: "fjerilorer", createdAt: new Date(), stickers: ['prova', 'hobbies']},
    { id: 2, description: "rrrrrrrrrrrrrrrrrrrr", createdAt: new Date(2018, 12, 23, 10, 0, 0)}
]

export default props => (
    <Header>
       <JournalContainer journals={journals} />
    </Header>
)
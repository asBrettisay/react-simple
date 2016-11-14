import React from 'react';

import AddGuest from './AddGuest.jsx';

class PartyList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            guests: ['Batman', 'Superman', 'Green Lantern']
        }

    }

    render() {

        var guestList = [];

        for (var i = 0; i < this.state.guests.length; i++) {
            guestList.push(<li key={i}>{this.state.guests[i]}</li>);
        }



        return (
            <div>
                <h1>Party List!</h1>
                <ul>
                    {guestList}
                </ul>
                <AddGuest />
            </div>
        )
    }
}

export default PartyList
import React from 'react';

import AddGuest from './AddGuest.jsx';
import GuestList from './GuestList.jsx';

class PartyList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            guests: ['Batman', 'Superman', 'Green Lantern', 'AntMan']
        }

        this.addGuest = this.addGuest.bind(this)
    }

    addGuest(newGuest) {
        // Add this guest to the list of guests.
        const newGuestList = this.state.guests;

        newGuestList.push(newGuest);


        this.setState({
            guests: newGuestList
        })
    }

    render() {

        return (
            <div>
                <h1>Party List!</h1>
                <GuestList guests={this.state.guests} />
                <AddGuest addGuest={this.addGuest}/>
            </div>
        )
    }
}

export default PartyList
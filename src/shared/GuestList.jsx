import React from 'react';

class GuestList extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        const guestList = this.props.guests.map(guest => {
            return <li>{guest}</li>
        })

        return (
            <ul>
                {guestList}
            </ul>
        )
    }
}

export default GuestList
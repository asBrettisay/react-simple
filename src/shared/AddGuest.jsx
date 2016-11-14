import React from 'react';

class AddGuest extends React.Component {
    constructor(props) {
        super(props)

    }

    handleClick() {
        console.log('CLICKED!')
    }

    render() {
        return (
            <div>
                <input />
                <button 
                  onClick={this.handleClick}>Add Guest</button>
            </div>
        )
    }
}


export default AddGuest
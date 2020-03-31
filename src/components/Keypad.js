import React from 'react'

export default class Keypad extends React.Component {

keys = () => {
    console.log('Entering password...')
}

    render(){
        return (
            <input onKeyUp={this.keys} type="password"/>
        )
    }
}

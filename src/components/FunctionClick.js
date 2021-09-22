// import React from 'react'

// export default function FunctionClick() {

//     function eventHandler () {
//         console.log("Button Clicked!")
//     }
//     return (
//         <div>
//             <button onClick={eventHandler}>Click Meyhhh!</button>
//         </div>
//     )
// }
import React, { Component } from 'react'

export default class FunctionClick extends Component {

    eventHandler () {
        console.log('Button Clicked!')
    }
    render() {
        return (
            <div>
                <button onClick={this.eventHandler}>Click Meyhhh!</button>
            </div>
        )
    }
}


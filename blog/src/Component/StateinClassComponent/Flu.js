import React, { Component } from 'react'

class Flu extends Component {

    constructor()
    {
        super ()
         this.state = {
            data: "Vivo"
         }
    }
    phone ()
    {
        this.setState({data: "Oppo"})
        alert(this.state.data)
    }
    render ()
    {

        return (
            <div className='Flu'>
                <h1>
                    {this.state.data}
                </h1>
                <button onClick={()=> this.phone()}>Press Me </button>
            </div>
            )
        }
}

export default Flu
import React, {Component} from 'react';

export class Header extends Component {
    render(){
        return(
            <div>
                <label>Search: </label>
                <input type='text' placeholder='Enter'></input>
            </div>
        )
    }
}

export class PropsHeader extends Component {
    render(){
        return(
            <div>
                <h2>hello {this.props.name} who is {this.props.age} year's old</h2>
                {this.props.children}
                {console.log(this.props)}
            </div>
        )
    }
}

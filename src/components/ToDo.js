import React, { Component } from 'react';

class ToDo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            tasks: [
                'Nauczyc sie do testu',
                'Zjesc sniadanie',
                'Umyc okna'
            ]
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState ({
                tasks: [
                    'Ala', 'ma', 'kota'
                ]
            });
        }, 3000);
    }

    render() {
        return(
            <div>
                <h2>To Do Listy</h2>
                <ol>
                    {this.state.tasks.map((mojElement,index) =>(<li key={index}>{mojElement}</li>))}
                </ol>
            </div>
        );
    }
}

export default ToDo;
import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event)
    {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"/>
                <input type="submit" value="Search!"/>
            </form>
        );
    }
}

export default Search;
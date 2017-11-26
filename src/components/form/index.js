import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.handleTitle = this.handleFormTitle.bind(this);
        this.handleContent = this.handleFormContent.bind(this);
        this.handleSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            title:'ewf',
            description:'fwef',
            category:'fwf'

        };
    }

    handleFormSubmit (event){
        console.log(this.state);
        event.preventDefault();

    }

    handleFormTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleFormContent(event){
        this.setState({
            content:event.target.value
        })
    }

    render(){
        return(
            <div>
                <h3>
                    {(this.state.title !=='') ? 'PROMOCJA' + this.state.title :''}
                </h3>
                <p>{this.state.content}</p>
                <p>Category: {this.state.category}</p>
                <form onSubmit={this.handleSubmit}>

                    <div><input type="text" onChange={this.handleTitle}/></div>
                    <div><textarea onChange={this.handleContent}/></div>
                            <select>
                                <option>Opcja 1</option>
                                <option>Opcja 2</option>
                                <option>Opcja 3</option>
                            </select>
                        <input type="submit" value="Wyslij imie! Prosze" />
                </form>
            </div>
        )
    }
}

export default Form;
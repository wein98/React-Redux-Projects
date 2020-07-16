import React from 'react';

class SearchBar extends React.Component {
    // on Input change event handler callback function
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    state = { term: '' };

    onFormSubmit = event => {
        // prevent form to submit on default
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value = {this.state.term} 
                            onChange = {e => this.setState({ term: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
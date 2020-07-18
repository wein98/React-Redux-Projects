import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = e => {
        e.preventDefault();

        // TODO: call back
        onTermSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={term} 
                        onChange={(e) => setTerm(e.target.value)}/>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;
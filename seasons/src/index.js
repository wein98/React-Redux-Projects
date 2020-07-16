import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // // Always calls this first before anything else
    // // Javascript functions, not React
    // constructor(props) {
    //     super(props);

    //     // Must be this.state
    //     this.state = {
    //         lat: null,
    //         errorMessage: ''
    //     };
        
    // }

    state = { lat: null, errorMessage: ''};
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message}) 
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        } 
    
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        
        return <Spinner message='Please accept geolocation request'/>
    }

    // HAVE TO define render!! 
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))
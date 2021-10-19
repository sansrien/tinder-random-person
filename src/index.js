import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';

class App extends React.Component {

    state = {
        items: [],
        loading: true
    }

    componentDidMount() {
        fetch("https://randomuser.me/api") // API link 
            .then(response => response.json())
            .then(
                (response) => {
                    this.setState({
                        items: response.results,
                        loading: false
                    });
                });
    }
    refreshAPI() {
        this.componentDidMount();
    }
    render() {
        var { items, loading } = this.state;
        if (loading) {
            return (
                <div> loading ....</div>
            );
        } else {
            return (
                <div id="root">

                    {items.map(person => (
                        <div className="container">
                            <a href="https://www.tinder.com" target="_blank">
                            <img src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" id="main-logo"/> </a>
                            <div className="gradient-overlay">
                                <img id="profile-pic" src={person.picture.large} alt={person.name.first} />
                            </div>
                            <div id="info">
                                <h2>{person.name.first}, {person.dob.age}</h2>
                                <div id="verified-main">
                                <img src="https://i.ibb.co/GWnmTrS/logo-verified.png" alt="logo-verified" border="0" className="icon" id="verified"/>
                                Verified <br />
                                </div>
                                <img src="https://i.ibb.co/28m5GCL/logo-gender2.png" alt="logo-gender2" border="0" className="icon"/>
                                {person.gender} <br />
                                <img src="https://i.ibb.co/hXdM0cg/logo-location2.png" alt="logo-location2" border="0" className="icon" />
                                {person.location.city}, {person.location.country} <br />
                            </div>
                            <div className="contact">
                                <h3>Contact</h3>
                                Phone: {person.phone} <br />
                                Email: {person.email}
                            </div>
                        </div>

                    ))}
                <div id="actions">
                    <div className="button" onClick={this.refreshAPI.bind(this)}>
                        <img src="https://i.ibb.co/nsXnqnf/button3.png" alt="button" border="0" className="button-next" />
                    </div>
                    <div className="button" onClick={this.refreshAPI.bind(this)}>
                        <img src="https://i.ibb.co/3szXw0N/button4.png" alt="button4" border="0" className="button-next" />
                    </div>
                </div>
                </div>
            );
        }
    }
}

ReactDOM.render(<App />, document.getElementById('app'));


import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                fullName: 'Tevin Owino',
                bio: 'Full Stack Software Developer',
                imgSrc: 'https://via.placeholder.com/150',
                profession: 'Web Developer'
            },
            shows: false,
            timeSinceMount: 0
        };
        this.interval = null;
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ timeSinceMount: prevState.timeSinceMount + 1 }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    toggleShow = () => {
        this.setState(prevState => ({ shows: !prevState.shows }));
    }

    render() {
        const { person, shows, timeSinceMount } = this.state;
        return (
            <div>
                <button onClick={this.toggleShow}>
                    {shows ? 'Hide' : 'Show'} Profile
                </button>
                {shows && (
                    <div>
                        <h1>{person.fullName}</h1>
                        <p>{person.bio}</p>
                        <img src={person.imgSrc} alt={person.fullName} />
                        <p>Profession: {person.profession}</p>
                    </div>
                )}
                <p>Time since component mounted: {timeSinceMount} seconds</p>
            </div>
        );
    }
}

export default App;

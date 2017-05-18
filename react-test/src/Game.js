import React from 'react';
import css from "./../styles/app.css"

/**
 * A counter button: tap the button to increase the count.
 */
class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    render() {
        return (
        <div>
            <h1>This is a test</h1>
            <div
                style={{
                    background:"red",
                    width: "150px",
                    padding: "5px",
                    borderRadius: "5px",
                }}
                onClick={(e) => {
                    this.setState({ count: this.state.count + 5 });
                    e.target.style.background = "blue";
                }}
            >
                <p>test</p>
                Count: {this.state.count}
            </div>
        </div>
        );
    }
}
export default Game;
import React from 'react';
import css from "./../styles/app.css"

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            style1:{
                background:"red",
                width: "150px",
                height: "50px",
                padding: "5px",
                borderRadius: "5px",
            },
            style2:{
                background:"blue",
                width: "50px",
                height: "150px",
                padding: "5px",
                borderRadius: "5px",
            },
            isStyle1: true,
        };
    }

    render() {
        return (
        <div>
            <h1>This is a test</h1>
            <div
                style={this.state.style1}
                onClick={(e) => {
                    this.setState({ count: this.state.count + 5 });
                    if(this.state.isStyle1){
                        e.target.style.background = this.state.style2.background;
                        e.target.style.width = this.state.style2.width;
                        e.target.style.height = this.state.style2.height;
                        this.setState({isStyle1: false})
                    } else {
                        e.target.style.background = this.state.style1.background;
                        e.target.style.width = this.state.style1.width;
                        e.target.style.height = this.state.style1.height;
                        this.setState({isStyle1: true})
                    }

                }}
            >
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                Count: {this.state.count}
            </div>
        </div>
        );
    }
}
export default Game;
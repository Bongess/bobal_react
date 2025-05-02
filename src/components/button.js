import { Component } from "react";

class Button extends Component {
    state = {
        age : 42,
    }
    handeleAgeChange = () => {
        this.setState({age : 4})
    }
    render() {
        return <div>
            <button onClick={this.handeleAgeChange}>
                zmen vek
            </button>
            <h1>
                {this.state.age}
                {process.env.REACT_APP_API_URL}
            </h1>
        </div>
    }
}

export default Button;
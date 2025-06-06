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
            
            
        </div>
    }
}

export default Button;
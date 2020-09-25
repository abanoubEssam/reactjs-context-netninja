import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
class Navbar extends Component {
    static contextType = ThemeContext
    changeColor = () => {
        this.context.isLightTheme = !this.context.isLightTheme
        
        console.log("Clicked" , this.context)
        
         this.setState({isLightTheme: this.context.isLightTheme})
    }
    render() {
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        console.log("this.context" , this.context)
        return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h1> Contect App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>
                        <button onClick={()=>this.changeColor()}>
                            change color
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
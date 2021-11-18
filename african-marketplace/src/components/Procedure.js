import React from "react";
import '../../assets/css/Featured.css';
import Nav from './Nav';

class Procedure extends React.Component {

    render() {
        return(
            <div className = "procedure">
                <section>
                    <Nav />
                </section>
                
                <h1>Hello Procedure</h1>
            </div>
        )
    }
}
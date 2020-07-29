import React from 'react';
import axios from 'axios';

import './App.css'; 
class App extends React.Component{
    state = { advice: ''};
    componentDidMount(){
      this.fetchAdvice();
    }
    fetchAdvice = () =>{
        axios.get('https://api.adviceslip.com/advice')

        .then((response) =>{
            //destructing the advice
            const {advice} = response.data.slip;
            this.setState ({advice})
        })
        .catch((error) =>{
            console.log(error);
        });
    }

    render(){
        const {advice} = this.state;
        return(
           <div className="app">
               <div className="card">
                    <h1 className="heading"> {advice} </h1>
                        <button className="button" onClick={this.fetchAdvice}>
                            <span>
                                Get Advice 
                            </span>
                        </button>
               </div>
            <div className="footer">
                <div classname="footer-text">
                    <h3>built with Love by Moses Elechi</h3>
                </div>
            </div>
           </div>
        );
    }
} 

export default App;
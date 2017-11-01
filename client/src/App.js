import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ArtistList from "./components/ArtistList";
import Artist from "./components/Artist";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <div>
                        <h1>Tunr</h1>
                        <div className="App-header">
                            <div><Link to="/">All Artists</Link></div>
                        </div>
                    </div>
     
                      <Route exact path="/" component={ArtistList}/>
                      <div className="App-Artist">
                      <Route path="/artist/:id" component={Artist}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
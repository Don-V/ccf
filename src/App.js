import React, { Component } from 'react';
import { Grid, Navbar} from 'react-bootstrap';
import logo from './logo.svg';
import all from './all.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

let convertToUrl = sectionName => {
    return sectionName.split(" ").join("_").replace(/\W/g, '').toLocaleLowerCase();
};

var Nav = (props) => {
    return (
        <Navbar inverse>
            <Grid>
                <Navbar.Header>
                    {
                        props.sections.map(section => {
                          return   (
                              <Navbar.Brand>
                                  <a href={convertToUrl(section)}>{section}</a>
                              </Navbar.Brand>
                          )
                        })
                    }
                    <Navbar.Toggle />
                </Navbar.Header>
            </Grid>
        </Navbar>
    );
};

var Header = () => {
    let navSections = ["Home", "Join CCF!", "About CCF", "Social CCF", "Contact us"];
    return (
        <div className="header">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Campus Christian Fellowship</h2>
            </div>
            <Nav sections={navSections}/>
        </div>
    );
};

var Slides = (props) => {
    let backgroundImage = (props.image) ? {background : props.image}: {};
    let mainClass = `slide-image col-xs-8 ${props.additionalClassName}`;
    return (
          <div style={backgroundImage} className={mainClass}>
              {props.title}
          </div>
    );
};

var Pane = (props) => {
    let sideClass = `pane ${props.side}-pane col-xs-2`;
    return (
        <div className={sideClass}>
        </div>
    )
};

class App extends Component {
    constructor(){
        super();
        this.state = {
          currentImage: `url(./${all})`,
          title : "All of CCF"
        };
    }
  render() {
    return (
      <div className="App">
          <Header/>
          <div className="row main-body">
              <Pane side="left" />
              <Slides image={this.state.currentImage} title={this.state.title} additionalClass={null}/>
              <Pane side="right" />
          </div>
      </div>
    );
  }
}


export default App;

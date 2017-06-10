import React, { Component } from 'react';
// import { Grid, Navbar} from 'react-bootstrap';
import logo from './logo.svg';
import all from './all.jpg';
import full from './full.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

let convertToUrl = sectionName => {
    return sectionName.split(" ").join("_").replace(/\W/g, '').toLocaleLowerCase();
};

let NavItem = ({section}) => {
  return <li className={"col-xs-2 " + convertToUrl(section)}><a className='row' href={convertToUrl(section)}>{section}<span className="underline col-xs-offset-2"></span></a></li>;
};

let Nav = (props) => {
  return (
      <ul className="row col-xs-offset-1" id="menu">
        {
          props.sections.map((section, index) => {
            return <NavItem key={index} section={section} />
          })
        }
      </ul>
    );
};

let Header = () => {
    let navSections = ["Home", "Get Involved!", "About CCF", "Events", "Contact us"];
    return (
        <header className="header">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Campus Christian Fellowship</h2>
            </div>
            <Nav sections={navSections}/>
        </header>
    );
};

let Slides = (props) => {
    let backgroundImage = (props.image) ? {background : props.image}: {};
    let mainClass = `slide-image col-xs-8 ${props.additionalClassName}`;
    return (
          <div style={backgroundImage} className={mainClass}>
              {props.title}
          </div>
    );
};

let Pane = (props) => {
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
      <div style={{background : `url(./${full})`}} className="App">
          <Header/>
          <div className="row main-body">
              <Pane side="left" />
              {/* <Slides image={this.state.currentImage} title={this.state.title} additionalClass={null}/>*/}
              <Pane side="right" />
          </div>
      </div>
    );
  }
}


export default App;

import React from 'react';
import {BrowserRouter as Router, Link, Route, NavLink} from 'react-router-dom';
import objConfig from './components/objConfig.js';
import { Image, Divider, Button, Icon, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Logo from './img/oxfordlogo.png';
import './App.css';



function App() {

  return (
    <div className="App">
      
      <header className="App-header">
        <Image src={Logo}  alt={objConfig.logoAlt} size='small' verticalAlign='top' rounded />
        <Divider hidden />
        <p>
          <Menu>
          <Menu.Item>
        <Button animated>
          <Button.Content visible><NavLink exact to="/">Home</NavLink></Button.Content>
          <Button.Content hidden><Icon color='darkcyan' name='home' /></Button.Content>
        </Button>
        </Menu.Item>
        <Menu.Item>
        <Button animated>
          <Button.Content visible><NavLink to="/contact">Contact</NavLink></Button.Content>
          <Button.Content hidden><Icon color='darkcyan' name='mail' /></Button.Content>
        </Button>
        </Menu.Item>
        <Menu.Item>
        <Button animated>
          <Button.Content visible>Forms</Button.Content>
        </Button>
        </Menu.Item>
        </Menu>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Divider />
      <content></content>
      <footer>
      <p>&copy; 2019 {objConfig.organization}</p>
        <p>Design by <Link to="/https://github.com/bmoir23/"> Brian Moir</Link> and <Link to="https://github.com/DomBruno/"> Dominick Bruno </ Link>
        </p>
        <p>{objConfig.appName} is licensed under <Link to="https://www.gnu.org/licenses/gpl.html"><Image src="https://www.gnu.org/graphics/gplv3-88x31.png" centered /></Link></p>
      </footer>
    </div>
    
    
  );
}

export default App;

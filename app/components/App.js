
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidenav from './Sidenav';

class App extends React.Component {
  render() {
    return (
    <div>
        <Navbar history={this.props.history} />  
        <Sidenav />      
        {this.props.children}
        <Footer />
    </div>
    );
  }
}

export default App;

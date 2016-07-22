
import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore'
import FooterActions from '../actions/FooterActions';

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = FooterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    FooterStore.listen(this.onChange);
    FooterActions.getTopCharacters();
  }

  componentWillUnmount() {
    FooterStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    return (
      

<div><h1>Test</h1></div>




    );
  }
}

export default Sidenav;


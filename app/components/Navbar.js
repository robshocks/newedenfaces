
import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
    NavbarActions.getCharacterCount();

    // let socket = io.connect();
    //
    // socket.on('onlineUsers', (data) => {
    //   NavbarActions.updateOnlineUsers(data);
    // });
    //
    // $(document).ajaxStart(() => {
    //   NavbarActions.updateAjaxAnimation('fadeIn');
    // });
    //
    // $(document).ajaxComplete(() => {
    //   setTimeout(() => {
    //     NavbarActions.updateAjaxAnimation('fadeOut');
    //   }, 750);
    // });
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    let searchQuery = this.state.searchQuery.trim();

    if (searchQuery) {
      NavbarActions.findCharacter({
        searchQuery: searchQuery,
        searchForm: this.refs.searchForm,
        history: this.props.history
      });
    }
  }

  render() {
    return (
      

    <header id="header" className="app-header navbar" role="menu">
  
      <div className="navbar-header bg-primary">
        <button className="pull-right visible-xs dk" ui-toggle-className="show" target=".navbar-collapse">
          <i className="glyphicon glyphicon-cog"></i>
        </button>
        <button className="pull-right visible-xs" ui-toggle-className="off-screen" target=".app-aside" ui-scroll="app">
          <i className="glyphicon glyphicon-align-justify"></i>
        </button>
        {/* <!--brand--> */} 
        
          
            <Link to={'/'} className="navbar-brand text-lt">
            <i className="fa fa-rocket"></i>
          <span className="hidden-folded m-l-xs">Boostling</span>
        </Link>
        {/*<!-- / brand -->*/}
      </div>

      <div className="collapse pos-rlt navbar-collapse bg-primary">
        {/*<!-- buttons -->*/}
        <div className="nav navbar-nav hidden-xs">
          <a href="#" className="btn no-shadow navbar-btn" ui-toggle-className="app-aside-folded" target=".app">
            <i className="fa fa-dedent fa-fw text"></i>
            <i className="fa fa-indent fa-fw text-active"></i>
          </a>
        </div>
        {/*<!-- / buttons -->*/}


        
      </div>




    </header>

    );
  }
}

export default Navbar;

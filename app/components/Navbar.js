
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

      <div className="collapse pos-rlt navbar-collapse box-shadow bg-white-only">
        {/*<!-- buttons -->*/}
        <div className="nav navbar-nav hidden-xs">
          <a href="#" className="btn no-shadow navbar-btn" ui-toggle-className="app-aside-folded" target=".app">
            <i className="fa fa-dedent fa-fw text"></i>
            <i className="fa fa-indent fa-fw text-active"></i>
          </a>
        </div>
        {/*<!-- / buttons -->*/}


        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a href="#" data-toggle="dropdown" className="dropdown-toggle">
              <i className="icon-bell fa-fw"></i>
              <span className="visible-xs-inline">Notifications</span>
              <span className="badge badge-sm up bg-danger pull-right-xs">2</span>
            </a>
            <div className="dropdown-menu w-xl animated fadeInUp">
              <div className="panel bg-white">
                <div className="panel-heading b-light bg-light">
                  <strong>You have <span>2</span> notifications</strong>
                </div>
                <div className="list-group">
                  <a href className="list-group-item">
                    <span className="pull-left m-r thumb-sm">
                      <img src="img/a0.jpg" alt="..." className="img-circle"></img>
                    </span>
                    <span className="clear block m-b-none">
                      Use awesome animate.css
                      <small className="text-muted">10 minutes ago</small>
                    </span>
                  </a>
                  <a href className="list-group-item">
                    <span className="clear block m-b-none">
                      1.0 initial released
                      <small className="text-muted">1 hour ago</small>
                    </span>
                  </a>
                </div>
                <div className="panel-footer text-sm">
                  <a href className="pull-right"><i className="fa fa-cog"></i></a>
                  <a href="#notes" data-toggle="class:show animated fadeInRight">See all the notifications</a>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <a href="#" data-toggle="dropdown" className="dropdown-toggle clear" data-toggle="dropdown">
              <span className="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                <img src="img/a0.jpg" alt="..."></img>
                <i className="on md b-white bottom"></i>
              </span>
              <span className="hidden-sm hidden-md">John.Smith</span> <b className="caret"></b>
            </a>
            <ul className="dropdown-menu animated fadeInRight w">
              <li className="wrapper b-b m-b-sm bg-light m-t-n-xs">
                <div>
                  <p>300mb of 500mb used</p>
                </div>
                <div className="progress progress-xs m-b-none dker">
                  <div className="progress-bar progress-bar-info" data-toggle="tooltip" data-original-title="50%" ></div>
                </div>
              </li>
              <li>
                <a href>
                  <span className="badge bg-danger pull-right">30%</span>
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a ui-sref="app.page.profile">Profile</a>
              </li>
              <li>
                <a ui-sref="app.docs">
                  <span className="label bg-info pull-right">new</span>
                  Help
                </a>
              </li>
              <li className="divider"></li>
              <li>
                <a ui-sref="access.signin">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>




    </header>

    );
  }
}

export default Navbar;

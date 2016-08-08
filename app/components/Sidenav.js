
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
      


<aside id="aside" className="app-aside hidden-xs bg-white">
      
      <div className="aside-wrap">
        <div className="navi-wrap">
          <div className="clearfix hidden-xs text-center hide" id="aside-user">
            <div className="dropdown wrapper">
              <a href="app.page.profile">
                <span className="thumb-lg w-auto-folded avatar m-t-sm">
                  <img src="" className="img-full" alt="..."></img>
                </span>
              </a>
              <a href="#" data-toggle="dropdown" className="dropdown-toggle hidden-folded">
                <span className="clear">
                  <span className="block m-t-sm">
                    <strong className="font-bold text-lt">John.Smith</strong> 
                    <b className="caret"></b>
                  </span>
                  <span className="text-muted text-xs block">Art Director</span>
                </span>
              </a>
              <ul className="dropdown-menu animated fadeInRight w hidden-folded">
                <li className="wrapper b-b m-b-sm bg-info m-t-n-xs">
                  <span className="arrow top hidden-folded arrow-info"></span>
                  <div>
                    <p>300mb of 500mb used</p>
                  </div>
                  <div className="progress progress-xs m-b-none dker">
                    <div className="progress-bar bg-white" data-toggle="tooltip" data-original-title="50%" ></div>
                  </div>
                </li>
                <li>
                  <a href>Settings</a>
                </li>
                <li>
                  <a href="page_profile.html">Profile</a>
                </li>
                <li>
                  <a href>
                    <span className="badge bg-danger pull-right">3</span>
                    Notifications
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a href="page_signin.html">Logout</a>
                </li>
              </ul>
            </div>
            <div className="line dk hidden-folded"></div>
          </div>

          <nav ui-nav className="navi clearfix">
            <ul className="nav">
              
              <li>
                <Link to={'/new/'}>
                      <i className="fa fa-plus-circle icon-large text-primary"></i>
                      <span className="font-bold">New ...</span>
                </Link>
                </li>
            <li>
                <a href className="auto">      
                  <span className="pull-right text-muted">
                    <i className="fa fa-fw fa-angle-right text"></i>
                    <i className="fa fa-fw fa-angle-down text-active"></i>
                  </span>
                  <i className="fa fa-folder icon text-primary"></i>
                  <span className="font-bold">Folder</span>
                </a>
                <ul className="nav nav-sub dk">
                  <li className="nav-sub-header">
                    <a href>
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <span>Dashboard v1</span>
                    </a>
                  </li>
                  <li>
                    <a href="dashboard.html">
                      <b className="label bg-info pull-right">N</b>
                      <span>Dashboard v2</span>
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
          </nav>

</div>
</div>
  </aside>


    );
  }
}

export default Sidenav;


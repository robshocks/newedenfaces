
import React from 'react';
import {Link} from 'react-router';
import NewFolderStore from '../stores/NewFolderStore'
import NewFolderActions from '../actions/NewFolderActions';


class FolderList extends React.Component {
    constructor(props) {
    super(props);
        this.state = NewFolderStore.getState();

    this.onChange = this.onChange.bind(this);
    }

  componentDidMount() {
    NewFolderStore.listen(this.onChange);
    NewFolderActions.getFolders();
  }


  componentWillUnmount() {
    NewFolderStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

    render() {

console.log(this.state.folders + 'FlderList');
  return(
              
      <div>
              
      {this.state.folders.map(function(folder) {
                                                       
      return ( 

          <li key={folder._id} className={folder._id}>        
            <Link to={'/folder/'+ folder.name} key={folder._id} href className="auto">      
              <span key={folder._id} className="font-bold">{folder.name}</span>
            </Link>
          </li>
        );                                              
      })}
      </div>
  
  );
  }
}

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = NewFolderStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NewFolderStore.listen(this.onChange);
    NewFolderActions.getFolders();
  }

  componentWillUnmount() {
    NewFolderStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

render() {
    console.log(this.state.folders);
    let folderList = this.state.folders.map(function(folder) {
    return(
        

       <li key={folder._id} className="nav {folder._id}">
            <Link to={'/folder/new'} key={folder._id} href className="auto">    
            <span key={folder._id} className="font-bold">{folder.name}</span>
            </Link>    
          </li>  





        
    );        
    });
      
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
        <a href="#" className="auto" data-toggle="collapse" data-target="#demo">
        <span className="pull-right text-muted">
          <i className="fa fa-fw fa-angle-right text"></i>
          <i className="fa fa-fw fa-angle-down text-active"></i>
        </span>
          <i className="fa fa-folder icon text-primary"></i>
        <span className="font-bold">Folder Drop</span>
        </a>
        <ul id="demo" className="nav collapse">
         <FolderList/>
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


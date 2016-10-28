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
        <div className="app-content">
            <div className="app-content-body fade-in-up"> 
                {this.props.children}
            </div>
        </div>

        <Footer />
        <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">


        <div className="modal-content">
        <div className="modal-header bg-primary">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Create New</h4>
        </div>
        <div className="modal-body">
           
	<div className="row">
		<button className="btn col-xs-6 col-xs-offset-3  btn-lg text-center btn-primary m-b">Process Folder</button> 
		<button className="btn col-xs-6 col-xs-offset-3  btn-lg text-center btn-primary m-b">Process Template</button> 
		<button className="btn col-xs-6 col-xs-offset-3  btn-lg text-center btn-primary m-b">Run Process</button> 
	</div>
        </div>

        </div>

  </div>
</div>
    </div>
    );
  }
}

export default App;


import React from 'react';

class Home extends React.Component {
  render() {
    return (
		
	    <div className="temp contain">
		<div className="bg-light lter b-b wrapper-md">
		    <div className="row">
			<div className="col-sm-6 col-xs-12">
			    <h1 className="m-n font-thin h3 text-black">Processes</h1>
			    <small className="text-muted">All processes listed here</small>
			</div>
		    </div>
		</div>
		<div className="wrapper-md">
		    <div className="row m-b">
			<div className="col-sm-5">
			    <div className="input-group">
				<input type="text" className="form-control input-lg" placeholder="Enter Search Term"/>
				<span className="input-group-btn">
				    <button className="btn btn-primary btn-lg" type="button">Search</button>
				</span>
			    </div>
			</div>
		    </div>
		    <div className="row">
			<div className=" col-sm-5 list-group-lg list-group-sp">
			    <a href="" className="list-group-item clearfix m-b">
				<span className="clear">	
				    <span>Setup new site for Sitesync</span>
				    <small className="text-muted clear text-ellipsis">Setting up a site for the firt time</small>
				</span>
			    </a>
			</div>
		    </div>
		    <div className="row">
			<div className=" col-sm-5 list-group-lg list-group-sp">
			    <a href="" className="list-group-item clearfix m-b">
				<span className="clear">	
				    <span>Setup new site for Sitesync</span>
				    <small className="text-muted clear text-ellipsis">Setting up a site for the firt time</small>
				</span>
			    </a>
			</div>
		    </div>
		</div>
	    </div>
    );
  }
}

export default Home;

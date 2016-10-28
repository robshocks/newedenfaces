  import React from 'react';
  import NewLayoutStore from '../stores/NewLayoutStore';
  import NewLayoutActions from '../actions/NewLayoutActions';
  import NewOptions from './NewOptions';
  import NewFolder from './NewFolder';

  class NewLayout extends React.Component {
    constructor(props) {
      super(props);
      this.state = NewLayoutStore.getState();
      this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
      NewLayoutStore.listen(this.onChange);
    }

    componentWillUnmount() {
      NewLayoutStore.unlisten(this.onChange);
    }

    onChange(state) {
      this.setState(state);
    }

    handleSubmit(event) {
      event.preventDefault();

      var name = this.state.name.trim();
      var gender = this.state.gender;

      if (!name) {
        NewLayoutActions.invalidName();
        this.refs.nameTextField.getDOMNode().focus();
      }

      if (!gender) {
        NewLayoutActions.invalidGender();
      }

      if (name && gender) {
        NewLayoutActions.addCharacter(name, gender);
      }
    }

    render() {
      return (

        <div>
         <div className="bg-light lter b-b wrapper-md">
              <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <h1 className="m-n font-thin h3 text-black">New</h1>
                    <small className="text-muted">All processes listed here</small>
                  </div>
              </div>
         </div>

        <div className="bg-light wrapper-md">         
          <div className="row">
                <div className="col-lg-5">
                  <div className="panel panel-default">
                    <div className="panel-body">Test</div>
                  </div>
                </div>
          </div>

          <div className="row">
                <div className="col-lg-5">
                  <div className="panel b-a">
                    <div className="panel-heading b-b b-light">Create New ..</div>
                    <div className="panel-body">
                      {this.props.children}    
                    </div>
                  </div>
                </div>
           </div> 
         </div>



        </div>

  );
}
}

export default NewLayout;

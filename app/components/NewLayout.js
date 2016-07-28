import React from 'react';
import NewLayoutStore from '../stores/NewLayoutStore';
import NewLayoutActions from '../actions/NewLayoutActions';

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
          
    <div className="app-content">
        <div className="app-content-body fade-in-up"> 
            <div className="bg-light lter b-b"> 
                <div className="wrapper-md">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="panel b-a">
                                <div className="panel-heading">Dropdown</div>
                                <div className="panel-body">
                                        Test1
                                </div>
                            </div>
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

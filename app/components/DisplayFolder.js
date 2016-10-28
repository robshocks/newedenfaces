import React from 'react';
import DisplayFolderStore from '../stores/DisplayFolderStore';
import DisplayFolderActions from '../actions/DisplayFolderActions';
import NewOptions from './NewOptions';
import NewFolder from './NewFolder';

class DisplayFolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = DisplayFolderStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    DisplayFolderStore.listen(this.onChange);
  }

  componentWillUnmount() {
    DisplayFolderStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var name = this.state.name.trim();
    var gender = this.state.gender;

    if (!name) {
      DisplayFolderActions.invalidName();
      this.refs.nameTextField.getDOMNode().focus();
    }

    if (!gender) {
      DisplayFolderActions.invalidGender();
    }

    if (name && gender) {
      DisplayFolderActions.addCharacter(name, gender);
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
                                <div className="panel-heading b-b b-light">Folder Name: {this.props.params.folderName}</div>
                                <div className="panel-body">
                                       <button type="button" className="btn btn-primary m-b">Create Template</button> 
                           {this.props.children}    
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

export default DisplayFolder;

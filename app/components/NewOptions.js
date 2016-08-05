
import React from 'react';
// import NewOptionsStore from '../stores/NewOptionsStore';
// import NewOptionsActions from '../actions/NewOptionsActions';
import {Link} from 'react-router';

class NewOptions extends React.Component {
  constructor(props) {
    super(props);
    // this.state = NewOptionsStore.getState();
    // this.onChange = this.onChange.bind(this);
  }

  // componentDidMount() {
  //   NewOptionsStore.listen(this.onChange);
  // }
  //
  // componentWillUnmount() {
  //   NewOptionsStore.unlisten(this.onChange);
  // }
  //
  // onChange(state) {
  //   this.setState(state);
  // }
  //
  // handleSubmit(event) {
  //   event.preventDefault();
  //
  //   var name = this.state.name.trim();
  //   var gender = this.state.gender;
  //
  //   if (!name) {
  //     NewOptionsActions.invalidName();
  //     this.refs.nameTextField.getDOMNode().focus();
  //   }
  //
  //   if (!gender) {
  //     NewOptionsActions.invalidGender();
  //   }
  //
  //   if (name && gender) {
  //     NewOptionsActions.addCharacter(name, gender);
  //   }
  // }

  render() {
    return (
    
        <div className="row">
            <div className="col-md-3">

                <Link to={'/new/runtemplate'}><button type="button" className="btn btn-primary m-b">Run Template</button></Link>
                <Link to={'/new/template'}><button type="button" className="btn btn-primary m-b">Template</button></Link>
                <Link to={'/new/folder'}><button type="button" className="btn btn-primary m-b">Folder</button></Link>
                
        </div>

    </div>

);
}
}

export default NewOptions;

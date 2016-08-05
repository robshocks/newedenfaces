import React from 'react';
import NewFolderStore from '../stores/NewFolderStore';
import NewFolderActions from '../actions/NewFolderActions';
import {Link} from 'react-router';

class NewFolder extends React.Component {
  constructor(props) {
    super(props);
     this.state = NewFolderStore.getState();
     this.onChange = this.onChange.bind(this);
  }

   componentDidMount() {
     NewFolderStore.listen(this.onChange);
   }
  
   componentWillUnmount() {
     NewFolderStore.unlisten(this.onChange);
   }
  
   onChange(state) {
     this.setState(state);
   }
  
   handleSubmit(event) {
    event.preventDefault();
console.log("success submit");  
     var name = this.state.name.trim();
     var gender = this.state.gender;
  
     if (!name) {
       NewFolderActions.invalidName();
       this.refs.nameTextField.getDOMNode().focus();
     }
  
     // if (!gender) {
     //     console.log('No gender bob');
     //     NewFolderActions.invalidGender();
     // }
  
     if (name && gender) {
         console.log('name or gender missing');
         NewFolderActions.addFolder(name, gender);
     }
   }

  render() {
    return (

            <form role="form">
             <div className={'form-group ' + this.state.nameValidationState}>
                    <label>Folder Name</label>                
                     <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                            onChange={NewFolderActions.updateName} autoFocus/>
                     <span className='help-block'>{this.state.helpBlock}</span>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>

            </form>


);
}

  // render() {
  //   return (
  //
  //       <form role="form" onSubmit={this.handleSubmit.bind(this)>
  //           <div className={'form-group ' + this.state.nameValidationState}>
  //               <label>Folder Name</label>                
  //                   <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
  //                          onChange={NewFolderActions.updateName} autoFocus/>
  //                   <span className='help-block'>{this.state.helpBlock}</span>
  //
  //                 <div className={'form-group ' + this.state.genderValidationState}>
  //                   <div className='radio radio-inline'>
  //                     <input type='radio' name='gender' id='female' value='Female' checked={this.state.gender === 'Female'}
  //                            onChange={NewFolderActions.updateGender}/>
  //                     <label htmlFor='female'>Female</label>
  //                   </div>
  //                   <div className='radio radio-inline'>
  //                     <input type='radio' name='gender' id='male' value='Male' checked={this.state.gender === 'Male'}
  //                            onChange={NewFolderActions.updateGender}/>
  //                     <label htmlFor='male'>Male</label>
  //                   </div>
  //                 </div>
  //           <button type='submit' className='btn btn-primary'>Submit</button>
  //           </div>
  //       </form>
  //     
  //   );
  // }
}

export default NewFolder;

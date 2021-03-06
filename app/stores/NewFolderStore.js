import alt from '../alt';
import NewFolderActions from '../actions/NewFolderActions';

class NewFolderStore {
  constructor() {
    this.bindActions(NewFolderActions);
    this.name = '';
    this.gender = '';
    this.helpBlock = '';
    this.nameValidationState = '';
    this.genderValidationState = '';
    this.folders = [];
  }


  onGetFoldersSuccess(data) {
    this.folders = data.slice(0, 5);
  }

  onGetFoldersFail(jqXhr) {
    // Handle multiple response formats, fallback to HTTP status code number.
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }



  onNewFolderSuccess(successMessage) {
    this.nameValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  onNewFolderFail(errorMessage) {
    this.nameValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }

  onUpdateName(event) {
    this.name = event.target.value;
    this.nameValidationState = '';
    this.helpBlock = '';
  }

  onUpdateGender(event) {
    this.gender = event.target.value;
    this.genderValidationState = '';
  }

  onInvalidName() {
    this.nameValidationState = 'has-error';
    this.helpBlock = 'Please enter a character name.';
  }

  onInvalidGender() {
    this.genderValidationState = 'has-error';
  }
}

export default alt.createStore(NewFolderStore);

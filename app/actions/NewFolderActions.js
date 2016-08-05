import alt from '../alt';

class NewFolderActions {
  constructor() {
    this.generateActions(
      'newFolderSuccess',
      'newFolderFail',
      'updateName',
      'updateGender',
      'invalidName',
      'invalidGender'
    );
  }

  newFolder(name, gender) {
    $.ajax({
      type: 'POST',
      url: '/api/newfolder',
      data: { name: name, gender: gender }
    })
      .done((data) => {
        this.actions.newFolderSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.newFolderFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(NewFolderActions);

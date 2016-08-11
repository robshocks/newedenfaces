import alt from '../alt';

class NewFolderActions {
  constructor() {
    this.generateActions(
      'newFolderSuccess',
      'newFolderFail',
      'updateName',
      'updateGender',
      'invalidName',
      'invalidGender',
      'getFoldersSuccess',
      'getFoldersFail'
    );
  }

  getFolders() {
    $.ajax({ url: 'api/getfolders'})
        .done((data) => {
            this.actions.getFoldersSuccess(data)
        })
        .fail((jqXhr) => {
            this.actions.getFoldersFail(jqHr)
        });
  }

  newFolder(name, gender) {
    $.ajax({
      type: 'POST',
      url: '/api/newfolder',
      data: { name: name }
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

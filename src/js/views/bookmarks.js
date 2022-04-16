import View from "./View";

import previewView from './previewView.js';

import icons  from 'url:../../img/icons.svg';

class BookmarksView extends View  {

    _parentElement = document.querySelector('.bookmarks__list')
    _data;
    _errorMessage = 'no bookmarks';
    _message = '';
  

  _generateMarkup() {

return this._data.map(this._generateMarkupPreview).join('')
  }

};

export default new BookmarksView();
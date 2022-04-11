export default class View {
   _data;

    render(data) {
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
            this._parentElement.insertAdjacentHTML("afterbegin", markup);
    
      }
    
  _clear() {
    this._parentElement.innerHTML = '';
  }
   renderSpinner() {
    const markup = `
    <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div>
    `;
    parentEl.innerHTML = '';
    parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) 
  {
    const markup = ` <div class="error">
    <div>
      <svg>
        <use href="${icons}.svg#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
    </div> -->`
  }

  renderMessage(message = this._Message) 
  {
    const markup = 
    ` <div class="message 
    ">
    <div>
      <svg>
        <use href="${icons}.svg#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div> -->`
  }

  addHandlerRender(handler) {
    
['hashChange', 'load'].forEach(ev => window.addEventListener (ev, handler)
  
);
  }
}
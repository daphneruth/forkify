export default class View {
   _data;

    render(data, render = true) {
if(!data || (Array.isArray(data) && data.length === 0))return this.renderError();

        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
            this._parentElement.insertAdjacentHTML("afterbegin", markup);
    
      }
    
  
  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
       console.log(curEl, newEl.isEqualNode(curEl));

       //update changed text
       if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !==''
       ){
       curEl.textContent = newEl.textContent;
    }

    //update changed attributes
    if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
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
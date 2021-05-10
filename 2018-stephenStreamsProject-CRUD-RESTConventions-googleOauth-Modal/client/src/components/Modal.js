import React from 'react';
import ReactDOM from 'react-dom';

/*iK Modal has its own react-router path page called '/streamDelete/:id'
+\ thats unusual, but stephen used the react-router url query parameter to do it with the providing :id.
  +\ however you could do it in the normal way and use modal as a normal component that overlays the pages using something like true or false . */

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;

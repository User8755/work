import './Modal.css';

function Modal({ setModal, modal, child }) {
  return (
    <div
      className={modal ? 'modal__overlay' : 'modal__overlay-disabled'}
      onClick={() => setModal(false)}
    >
      <div className='modal__window' onClick={(evt) => evt.stopPropagation()}>
        <button
          className='button_close'
          onClick={() => setModal(false)}
        ></button>
        {child}
      </div>
    </div>
  );
}

export default Modal;

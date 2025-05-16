import css from "./ImageModal.module.css";
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, image }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose} 
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true} 
      shouldCloseOnEsc={true}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
}
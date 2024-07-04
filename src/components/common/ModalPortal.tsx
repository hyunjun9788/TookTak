import ReactDOM from 'react-dom';

const ModalPortal = ({ children }: any) => {
  const element = document.getElementById('modal-root') as HTMLElement;

  return ReactDOM.createPortal(children, element);
};

export default ModalPortal;

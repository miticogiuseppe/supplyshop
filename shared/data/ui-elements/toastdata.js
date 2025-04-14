import SpkButton from '@/shared/@spk-reusable-components/reusable-uielements/spk-button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast("I'm a toast message.");

export const Customtoaster = () => {
  return (
    <>
      <SpkButton Buttonvariant="primary" Id="toast-button" onClickfunc={notify}>Click For Live Toast</SpkButton>
      <ToastContainer />
    </>
  );
};
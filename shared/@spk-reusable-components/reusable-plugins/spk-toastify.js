import React from 'react';
import { ToastContainer, toast, ToastOptions, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SpkToastify = ({ hideProgressBar = false, newestOnTop = false, closeOnClick = true, rtl = false, pauseOnFocusLoss = true, draggable = true, pauseOnHover = true, position }) => {

    return (
        <>
            <ToastContainer position={position} autoClose={5000} hideProgressBar={hideProgressBar} newestOnTop={newestOnTop} closeOnClick={closeOnClick} rtl={rtl} pauseOnFocusLoss={pauseOnFocusLoss} draggable={draggable} pauseOnHover={pauseOnHover} theme="light" transition={Bounce} />
        </>
    );
};
export default SpkToastify;
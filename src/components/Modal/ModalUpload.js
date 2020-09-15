import React from 'react';
import { Modal, Icon, Button, Dimmer, Loader } from 'semantic-ui-react';
import './ModalUpload.scss';


export const ModalUpload = ( { show, setShow } ) => {

    const onClose = ()=> {
        setShow(false);
    };
    return (
        <Modal size="large" open={show} onClose={onClose}>
            <h1>Esto es el modalupload</h1>
        </Modal>
    )
}

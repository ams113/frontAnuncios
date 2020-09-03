import React, { useState } from 'react';
import useAuth from '../../hook/useAuth';
import { AdList } from '../../components/Home/AdList';
import { AdModal } from '../../components/Home/AdModal';
import { Container } from 'semantic-ui-react';
import { ModalUpload } from '../../components/Modal/ModalUpload';
import './Home.scss';
import { from } from '@apollo/client';
import { set } from 'lodash';

export const Home = () => {

    const auth = useAuth();
    console.log(auth);

    const [showModal, setShowModal] = useState(false);

    const handleShow = () => {
        setShowModal(true);
        console.log(showModal);
    } 

    
    return (
        <>
        <Container fluid className="home">
            <div className="row">
            <div className="col-8">
                
            </div>
            <div className="col-4">
                <button 
                    className="btn btn-info float-right"
                    onClick={ () => setShowModal(true) } > 
                Subir anuncio 
                </button>
            </div>
            <div className="mt-5">
                <AdList type={ 40 } />
                <AdModal show={showModal} setShow={setShowModal} />
            </div>
            
        </div>
        </Container>
        {/* <ModalUpload show={showModal} setShow={setShowModal}/> */}
        </>
        
    )
}

export default Home;
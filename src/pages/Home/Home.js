import React, { useState } from 'react';
import useAuth from '../../hook/useAuth';
import { AdList } from '../../components/Home/AdList';
import { AdModal } from '../../components/Home/AdModal';
import { Container } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { GET_ADS } from '../../gql/ad';
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

    const { data, loading, error, refetch } = useQuery( GET_ADS, {
        variables: { }
    });

    if ( loading ) return null;
    if ( error ) return  (<h2>No hay anuncios</h2>);

    const { getAds } = data;

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
                <AdList type={ 40 } list={getAds} />
                <AdModal show={showModal} setShow={setShowModal} auth={ auth } />
            </div>
            
        </div>
        </Container>
        {/* <ModalUpload show={showModal} setShow={setShowModal}/> */}
        </>
        
    )
}

export default Home;
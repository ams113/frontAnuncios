import React from 'react'
import { AdList } from './AdList';
import { AdModal } from './AdModal';

export const Home = () => {
    return (
        <div className="row">
            <div className="col-8">
                <h2>Anuncios</h2>
            </div>
            <div className="col-4">
                <button className="btn btn-info float-right"> Subir anuncio</button>
            </div>
            <div className="mt-5">
                <AdList type={ 40 } />
                <AdModal />
            </div>
            
        </div>
    )
}

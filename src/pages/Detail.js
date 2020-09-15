import React from 'react';
import { useParams,  Redirect } from 'react-router-dom';
import { getAdById } from '../selectors/getAdById';
import { useQuery } from '@apollo/client';
import { GET_AD } from '../gql/ad';
import ImageNotFound from '../assets/png/not-found.png';

export const Detail = ({ history }) => {
    
    
    const { id } = useParams();
    console.log(id);

    const { data, error, loading } = useQuery( GET_AD, {
        variables: { id }
    });

    if ( loading ) return null;
    
    if ( error ) {
        return <Redirect to="/" />;
    }


    const { getAd } = data;

    console.log(getAd);

     // const ad = getAdById( id );

    if ( !getAd ) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {

        if ( history.length <= 2 ) {
            history.push('/');
        } else {
            history.goBack();
        }
    };

    const {
            description,
            type,
            score,
            img,
            size,
            km,
            color,
            fabricant,
            height,
    } = getAd;

    return (
        <div className="row mt-5">
        <div className="col-4">
            <img
                src={img ? img : ImageNotFound }
                alt={ type }
                className= "img-thumbnail animate__animated animate__bounce animate__animate__fadeInDown"
            />
        </div>
        <div className="col-8 animate__animated animate__bounce animate__fadeIn">
            <h3> { type }</h3>
            <ul className="list-group list-group-flush">
                {
                    (description && <li className="list-group-item"><b> Descripción: </b> { description } </li>)
                }
                {
                    (size && <li className="list-group-item"><b> Metros cuadrados: </b> { size } </li>)
                }
                {
                    (km && <li className="list-group-item"><b> Kilómetros: </b> { km } </li>)
                }
                {
                    (color && <li className="list-group-item"><b> Color: </b> { color } </li>)
                }
                {
                    (fabricant && <li className="list-group-item"><b> Fabricante: </b> { fabricant } </li>)
                }
                {
                    (height && <li className="list-group-item"><b> Altura: </b> { height } </li>)
                }
                <li className="list-group-item"><b> Relevancia del anuncio: </b> { score } puntos </li>
            </ul>
            <button
                className="btn btn-outline-info"
                onClick={ handleReturn }
                style={ { marginLeft: 20 }  }
            >
                Volver
            </button>
            
        </div>
    </div>
    )
}

export default Detail;
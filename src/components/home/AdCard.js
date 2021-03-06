import React from 'react'
import { Link } from 'react-router-dom';
import ImageNotFound from '../../assets/png/not-found.png';
import './Home.scss';

export const AdCard = ({
      id,
      description,
      type,
      score,
      size,
      km,
      color,
      fabricant,
      height,
      img
    } ) => {

    return (
        <div className="card mb-3" style={{maxWidth: 540}}>
                    <img src={img ? img : ImageNotFound } className="card-img-top" alt={ type } />
                    <div className="card-body">
                        <h6 className="card-title">{ type }</h6>
                        
                        {
                            (description && <p className="card-text"><b>Descripción:</b> { description }</p>)
                        }
                      {/*   {
                            (size && <p className="card-text"><b>m<sup>2</sup>:</b> { size }</p>)
                        }
                        {
                            (km && <p className="card-text"><b>KM:</b> { km }</p>)
                        }
                        {
                            (color && <p className="card-text"><b>Color:</b> { color }</p>)
                        }
                        {
                            (fabricant && <p className="card-text"><b> Fabricante:</b> { fabricant }</p>)
                        } */}
                        {
                            ( (height && !description) && <p className="card-text"><b>Altura:</b> { height }</p>)
                        }

                        <Link to={`./${id}`}>
                            Más...
                        </Link>
                    
                    </div>
        </div>
    )
}

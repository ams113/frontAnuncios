import React from 'react'
import { Link } from 'react-router-dom'

export const AdCard = ({
      id,
      description,
      type,
      score,
      imageIds,
      size,
      km,
      color,
      fabricant,
      height,
    } ) => {

    return (
        <div className="card mb-3" style={{maxWidth: 540}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={'./assets/photos/not-found.png'} className="card-img" alt={ type } />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h6 className="card-title">{ type }</h6>
                        
                        {
                            (description && <p className="card-text"><b>Descripción:</b> { description.slice(0,30) }...</p>)
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

                        <Link to={`./detail/${id}`}>
                            Más...
                        </Link>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
// import { getAdByType } from '../../selectors/getAdByType';
import { getAdByPoints } from '../../selectors/getAdByPoints';
import { AdCard } from './AdCard';


export const AdList = ( { score, list } ) => {

    const ads = getAdByPoints( score, list );

    return (
        <div className="card-columns animate__animated animate__bounce animate__fadeIn">
            {
                ads.map( ad => (
                    <AdCard
                     key={ ad.id}
                    { ...ad }
                    />
                ))
            }

        </div>
            
    )
}

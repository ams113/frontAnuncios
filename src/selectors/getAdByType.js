import { data } from '../data/data';

export const getAdByType = ( type ) => {

    const validTypes = ['PISO', 'CHALET', 'VEHICULO', 'FRIGORIFICO'];

    if (!validTypes.includes( type )) {
        throw new Error( `El tipo  "${ type }" no es aceptado`);
    }

    return data.filter( ad =>  ad.type === type );
};
import { data } from '../data/data';

export const getAdById = ( id ) => {

    return data.find( ad =>  ad.id == id );
};
import { data } from '../data/data';

export const getAdByPoints = ( score, list ) => {

    return list.filter( ad =>  ad.score  >= 40 );
};
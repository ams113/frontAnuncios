import { data } from '../data/data';

export const getAdByPoints = ( score ) => {

    return data.filter( ad =>  ad.score  >= 40 ).sort();
};
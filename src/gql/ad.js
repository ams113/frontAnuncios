import { gql } from '@apollo/client';

export const UPLOADAD = gql`
    mutation uploadAd( $input: UploadInputs) {
        uploadAd(input: $input) {
            msg
        }
    }
`;

export const UPDATE_AVATAR = gql`
    mutation updateAvatar($file: Upload) {
        updateAvatar( file: $file ) {
            status
            urlAvatar
        }
    }
`;

export const GET_ADS = gql`
   query getAds($id: ID) {
        getAds(id: $id) {
            id
            description
            type
            score
            size
            km
            color
            fabricant
            height
            img
        }
    }
`;

export const GET_AD = gql`
   query getAd($id: ID) {
        getAd(id: $id) {
            id
            description
            type
            score
            size
            km
            color
            fabricant
            height
            img
        }
    }
`;

export const UPLOADIMG = gql`
    mutation updateImg($file: Upload) {
        updateImg
         ( file: $file ) {
            status
            img
        }
    }
`;
import { gql } from '@apollo/client';

export const UPLOADAD = gql`
    mutation uploadAd( $input: UploadInputs) {
        uploadAd(input: $input) {
            msg
        }
    }
`;
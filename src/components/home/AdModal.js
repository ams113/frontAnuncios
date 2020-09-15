import React, { useCallback, useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/client';
import { UPLOADAD, UPDATE_AVATAR } from '../../gql/ad'; 
import Modal from 'react-modal';
import { useDropzone } from 'react-dropzone';



import './Home.scss';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
Modal.setAppElement('#root');

export const AdModal = ({ show, setShow, auth }) => {

  const [updateAvatar] = useMutation( UPDATE_AVATAR );

  const [loading, setLoading] = useState( false );

  const [imagen, setImagen] = useState( null );

  const [uploadAd] = useMutation( UPLOADAD );

  const closeModal = () => {
    setShow(false);
  };
  

  const formik = useFormik({
    initialValues: initFormValues(),
    validationSchema: Yup.object({
        type: Yup.string().required('Tipo requerido'),
        description: Yup.string(),
        size: Yup.number()
          .typeError('Tiene que ser un numero')
          .positive('Tiene que ser mayor que cero'),
        km: Yup.number()
          .typeError('Tiene que ser un numero')
          .positive('Tiene que ser mayor que cero'),
        fabricant: Yup.string(),
        height:  Yup.number()
          .typeError('Tiene que ser un numero')
          .positive('Tiene que ser mayor que cero'),
    }),
    onSubmit: async ( formData ) => {
          
      try {
          const newAd = formData;

     

          if (!newAd.size) {
            delete newAd.size;
          } else {
            newAd.size = parseInt(newAd.size);
          }
          if (!newAd.km) {
            delete newAd.km;
          } else {
            newAd.km = parseInt(newAd.km);
          }
          if (!newAd.height) {
            delete newAd.height;
          } else {
            newAd.height = parseInt(newAd.height);
          }
          if (imagen) {
            newAd.img = imagen;
          }

          console.log(newAd);

          await uploadAd({
            variables: {
                input: newAd
            }
        });

        closeModal();
        toast.success('Anuncio Subido');
          
          
      } catch ( error ) {
          console.log(error.message);
          toast.error( error.message );
      }
  }
});

  const onDrop = useCallback( async ( acceptedFile ) => {
      const file = acceptedFile[0];
      console.log(file);
      try {
        setLoading( true );
        const result = await updateAvatar( {
          variables: { file }
        });
       
          
          const { data } = result;

          if ( !data.updateAvatar.status ) {
              
              toast.warning('Error al subir imagen');
              setLoading( false );
          } else {

              setImagen(data.updateAvatar.urlAvatar);
              setLoading( false );
              console.log(data);
          } 
 
      } catch (error) {
          console.log(error);
      }
    }, []);

    const { getRootProps, getInputProps } = useDropzone( {
      accept: 'image/jpeg, image/png',
      noKeyboard: true,
      multiple: false,
      onDrop,
    });



  /* const handleInputChange = ( { target } ) => {
    setformState({
      ...formState,
      [ target.name ]: target.value
    });
  }; 

  const handleSumitForm = (e) => {
    e.preventDefault();
    console.log(formState);
    closeModal();
  }; */

  const options = [
    { key: 'p', text: 'Piso', value: 'PISO' },
    { key: 'c', text: 'Chalet', value: 'CHALET' },
    { key: 'v', text: 'Vehículo', value: 'VEHICULO' },
    { key: 'f', text: 'Frigorífico', value: 'FRIGORIFICO' },
  ]

    return (
        <div>
            <Modal
            isOpen={ show }
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
            
            >
             <h2>Subir anuncio</h2>
             {/* <button onClick={closeModal}>close</button> */}
             <hr />


             <Form className="register-form" onSubmit={ formik.handleSubmit }>
                {/* <Form.Select 
                    fluid
                    name="type.value"
                    options={options}
                    placeholder='Seleccione el tipo del anuncio'
                    value={ formik.values.type.value } 
                    onChange={ formik.handleChange }
                    error={ formik.errors.type}
                /> */}
                <Form.Input 
                    type="text"
                    placeholder="Tipo: PISO, CHALET, VEHICULO, FRIGORIFICO"
                    name="type"
                    value={ formik.values.type } 
                    onChange={ formik.handleChange }
                    error={ formik.errors.type && true}
                />
                <Form.TextArea 
                    type="text"
                    placeholder="Descripción"
                    name="description"
                    value={ formik.values.userName }  
                    onChange={ formik.handleChange }
                    error={ formik.errors.userName && true}
                />
                <Form.Input 
                    type="text"
                    placeholder="Metros cuadrados"
                    name="size"
                    value={ formik.values.size } 
                    onChange={ formik.handleChange }
                    error={ formik.errors.size && true}
                />
                <Form.Input 
                    type="text"
                    placeholder="Kilómetros"
                    name="km"
                    value={ formik.values.km } 
                    onChange={ formik.handleChange }
                    error={ formik.errors.km && true}
                />
                <Form.Input 
                    type="text"
                    placeholder="Color"
                    name="color"
                    value={ formik.values.color } 
                    onChange={ formik.handleChange }
                    error={ formik.errors.color && true}
                />
                <Form.Input 
                    type="text"
                    placeholder="Fabricante"
                    name="fabricant"
                    value={ formik.values.fabricant } 
                    onChange={ formik.handleChange }
                    error={ formik.errors.fabricant && true}
                />
                <Form.Input 
                    type="text"
                    placeholder="Altura"
                    name="height"
                    value={ formik.values.height } 
                    onChange={ formik.handleChange }
                    error={ formik.errors.height && true}
                />

                <Button
                type="button" 
                className="btn-primary"
                { ...getRootProps() } 
                loading={ loading } >
                  Añadir imagen
                </Button>
                

                <Button 
                    type="submit"
                    className="btn-submit"
                >
                    Subir Anuncio
                </Button>

                <input { ...getInputProps() } />

            </Form>

        </Modal>
        </div>
    )
}

const initFormValues = () => {
  return {
    type:'',
    description:'',
    size: '',
    km: '',
    color:'',
    fabricant:'',
    height: '',
  };
};
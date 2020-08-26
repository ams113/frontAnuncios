import React, { useState }from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './modal.css';
 
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

export const AdModal = () => {

  const [isOpen, setIsOpen] = useState( true );

  const closeModal = () => {
    setIsOpen(false);
  };

  const [formState, setformState] = useState({
      description:'',
      type:'',
      size:'',
      km:'',
      color:'',
      fabricant:'',
      height:'',
  });

  const { description, type, size, km, color, fabricant, height} = formState;

  const handleInputChange = ( { target } ) => {
    setformState({
      ...formState,
      [ target.name ]: target.value
    });
  }; 

  const handleSumitForm = (e) => {
    e.preventDefault();
    console.log(formState);
  };

    return (
        <div>
            <Modal
            isOpen={ isOpen }
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
             <form className="container" onSubmit={ handleSumitForm }>

              <div className="form-group">
                  <label>Tipo del anuncio</label>
                  <input 
                  className="form-control"
                  type="text"
                  name="type"
                  value={type}
                  onChange={handleInputChange} 
                  placeholder="PISO, CHALET, VEHICULO o FRIGORIFICO" />
              </div>

              <div className="form-group">
                  <label>Descripción</label>
                  <textarea 
                      type="text" 
                      className="form-control"
                      placeholder="..."
                      rows="3"
                      name="description"
                      value={description}
                      onChange={handleInputChange}  
                  ></textarea>
              </div>

              <div className="form-group">
                  <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            
                  <input 
                  className="form-control"
                  type="text"
                  name="size"
                  value={size}
                  onChange={handleInputChange}  
                  placeholder="Metros cuadrados" />
              </div>
              <div className="form-group">
                  <input
                   className="form-control"
                   type="text"
                   name="km"
                   value={km}
                   onChange={handleInputChange}   
                   placeholder="Kilómetros" />
              </div>
              <div className="form-group">
                  <input 
                  className="form-control"
                  type="text"
                  name="color"
                  value={color}
                  onChange={handleInputChange}   
                  placeholder="Color" />
              </div>
              <div className="form-group">
                  <input 
                  className="form-control"
                  type="text"
                  name="fabricant"
                  value={fabricant}
                  onChange={handleInputChange}  
                  placeholder="Fabricante" />
              </div>
              <div className="form-group">
                  <input 
                  className="form-control"
                  type="text"
                  name="height"
                  value={height}
                  onChange={handleInputChange}  
                  placeholder="Altura" />
              </div>

              <button
                  type="submit"
                  className="btn btn-outline-primary btn-block"
              >
                  <i className="far fa-save"></i>
                  <span> Subir </span>
              </button>

              </form>
        </Modal>
        </div>
    )
}

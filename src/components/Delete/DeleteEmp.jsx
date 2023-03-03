import React from 'react';
import Modal from 'react-modal';
import "./DeleteEmp.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)



function DeleteEmp() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  } 
return (
    <div>
      <button className="btn btn-danger"  onClick={openModal}> <AddCircleIcon /> Delete</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        >
		    
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form>
                      <div className="modal-header">						
                        <h4 className="modal-title">Delete Employee</h4>
                      </div>
                      <div className="modal-body">					
                        <p>Are you sure you want to delete these Records?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                      </div>
                      <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                        <input type="submit" className="btn btn-danger" defaultValue="Delete" />
                      </div>
                    </form>
                  </div>
                </div>
      </Modal>
    </div>
  );
}

export default DeleteEmp;
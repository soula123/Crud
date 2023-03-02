import React from 'react';
import Modal from 'react-modal';
import "./AddEmp.css"
import 'bootstrap/dist/css/bootstrap.min.css';



// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

function AddEmp() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
 
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
    
  
    <div className='Modal-style'>       
		<div className="modal-dialog">
			<div className="modal-content">
				
					<div className="modal-header">						
						<h4 className="modal-title">Add Employee</h4>
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div className="modal-body">					
						<div className="form-group">
							<label>Name</label>
							<input type="text" className="form-control" required/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control" required/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<textarea className="form-control" required></textarea>
						</div>
						<div className ="form-group">
							<label>Phone</label>
							<input type="text" className="form-control" required/>
						</div>					
					</div>
					<div className="modal-footer">
						<input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
						<input type="submit" className="btn btn-success" value="Add"/>
					</div>
				
			</div>
		</div>
        </div>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}

export default AddEmp;
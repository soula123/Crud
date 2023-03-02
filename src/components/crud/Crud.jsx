import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import './Crud.css'
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/regular.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import AddEmp from '../AddEmp';


function Crud() {



    const [checkedItems, setCheckedItems] = useState([]);

  function handleCheckboxChange(event) {
    const target = event.target;
    const value = target.value;
    const checked = target.checked;

    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems.filter(item => item !== value));
    }
  }
  
  function handleSelectAll(event) {
    if (event.target.checked) {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      const values = Array.from(checkboxes).map(checkbox => checkbox.value);
      setCheckedItems(values);
    } else {
      setCheckedItems([]);
    }
  }
 

  return (
            <div>
              <div className="container">
                <div className="table-responsive">
                  <div className="table-wrapper">
                    <div className="table-title">
                      <div className="row">
                        <div className="col-xs-6">
                          <h2>Manage <b>Employees</b></h2>
                        </div>
                        <div className="col-xs-6">
                        
                          <AddEmp />
                          <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a>						
                        </div>
                      </div>
                    </div>
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>
                            <span className="custom-checkbox">
                              <input type="checkbox" id="selectAll" onChange={handleSelectAll} />
                              <label htmlFor="selectAll" />
                            </span>
                          </th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>Phone</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="custom-checkbox">
                              <input type="checkbox" id="checkbox1" onChange={handleCheckboxChange}  name="options[]" defaultValue={1} />
                              <label htmlFor="checkbox1" />
                            </span>
                          </td>
                          <td>Thomas Hardy</td>
                          <td>thomashardy@mail.com</td>
                          <td>89 Chiaroscuro Rd, Portland, USA</td>
                          <td>(171) 555-2222</td>
                          <td>
                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="custom-checkbox">
                              <input type="checkbox" id="checkbox2" onChange={handleCheckboxChange} name="options[]" defaultValue={1} />
                              <label htmlFor="checkbox2" />
                            </span>
                          </td>
                          <td>Dominique Perrier</td>
                          <td>dominiqueperrier@mail.com</td>
                          <td>Obere Str. 57, Berlin, Germany</td>
                          <td>(313) 555-5735</td>
                          <td>
                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                            <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="clearfix">
                      <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                      <ul className="pagination">
                        <li className="page-item disabled"><a href="#">Previous</a></li>
                        <li className="page-item"><a href="#" className="page-link">1</a></li>
                        <li className="page-item"><a href="#" className="page-link">2</a></li>
                        <li className="page-item active"><a href="#" className="page-link">3</a></li>
                        <li className="page-item"><a href="#" className="page-link">4</a></li>
                        <li className="page-item"><a href="#" className="page-link">5</a></li>
                        <li className="page-item"><a href="#" className="page-link">Next</a></li>
                      </ul>
                    </div>
                  </div>
                </div>        
              </div>
              <div id="addEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form>
                      <div className="modal-header">						
                        <h4 className="modal-title">Add Employee</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                      </div>
                      <div className="modal-body">					
                        <div className="form-group">
                          <label>Name</label>
                          <input type="text" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>Address</label>
                          <textarea className="form-control" required defaultValue={""} />
                        </div>
                        <div className="form-group">
                          <label>Phone</label>
                          <input type="text" className="form-control" required />
                        </div>					
                      </div>
                      <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                        <input type="submit" className="btn btn-success" defaultValue="Add" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Edit Modal HTML */}
              <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form>
                      <div className="modal-header">						
                        <h4 className="modal-title">Edit Employee</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                      </div>
                      <div className="modal-body">					
                        <div className="form-group">
                          <label>Name</label>
                          <input type="text" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>Address</label>
                          <textarea className="form-control" required defaultValue={""} />
                        </div>
                        <div className="form-group">
                          <label>Phone</label>
                          <input type="text" className="form-control" required />
                        </div>					
                      </div>
                      <div className="modal-footer">
                        <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                        <input type="submit" className="btn btn-info" defaultValue="Save" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Delete Modal HTML */}
              <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form>
                      <div className="modal-header">						
                        <h4 className="modal-title">Delete Employee</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
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
              </div>
            </div>
          );
        }
   

    









export default Crud;





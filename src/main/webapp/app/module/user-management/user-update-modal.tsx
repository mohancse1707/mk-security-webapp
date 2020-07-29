/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import React from 'react';
import { IRootState } from 'app/shared/reducers';
import { getUsers } from 'app/module/user-management/user.reducer';
import { connect } from 'react-redux';
import { IUser } from 'app/shared/models/user-management/user.model';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Select from 'react-select';
export interface IUserUpdateProps {
  showModal: boolean;
  isCreateUser: boolean;
  handleClose: Function;
  createOrEditUser: IUser;
  saveOrUpdateUser: Function;
}

const customStyles = {
  control: base => ({
    ...base,
    height: 25,
    minHeight: 25
  })
};
export interface IUserUpdateState {
  createOrEditUser: IUser;
  options: any;
  selectedAuthorities: [];
}

export class UserUpdateModal extends React.Component<IUserUpdateProps, IUserUpdateState> {

  state: IUserUpdateState = {
    createOrEditUser: {},
    options: [ { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }],
    selectedAuthorities: []
  };

  static getDerivedStateFromProps(props, state) {
    if (state.createOrEditUser !== props.createOrEditUser) {
      return { createOrEditUser: props.createOrEditUser };
    }
    return null;
  }

  onChangeInput = event => {

    const { createOrEditUser } = this.state;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    createOrEditUser[event.target.name] = value;
    event.target.type === 'select-one' ? createOrEditUser[event.target.name] = event.target.selectedOptions[0].value : createOrEditUser[event.target.name] = value;
    this.setState(state => ({ createOrEditUser }));
  };

  onChangeMultiSelect = event => {
    const { createOrEditUser } = this.state;
    let { selectedAuthorities } = this.state;
    selectedAuthorities = event;
    this.setState(state => ({ createOrEditUser, selectedAuthorities }));
  };

  render() {
    const { showModal, handleClose, saveOrUpdateUser, isCreateUser } = this.props;
    const { createOrEditUser, options, selectedAuthorities } = this.state;

    return (
      <Modal size="lg" isOpen={showModal} modalTransition={{ timeout: 20 }} backdropTransition={{ timeout: 10 }} toggle={handleClose}>
        <ModalHeader toggle={handleClose}>{isCreateUser ? 'Create User' : 'Edit User'}</ModalHeader>
        <ModalBody>
          <div className="container py-4 modalForm">
            <div className="row">
              <div className="col-sm-12">
                  <div className="form-group row">
                    <div className="col-sm-6">
                      <label htmlFor="inputFirstname">Username</label>
                      <input type="text" className="form-control" id="username" disabled={!isCreateUser} value={createOrEditUser.username}/>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="inputLastname">Password</label>
                      {!isCreateUser ?
                        (<input type="password" className="form-control" id="password" disabled={!isCreateUser} value="Password" />) :
                        <input type="password" className="form-control" id="password" value={createOrEditUser.username} />}

                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6">
                      <label htmlFor="inputFirstname">First name</label>
                      <input type="text" className="form-control" id="firstName" name="firstName"
                             onChange={this.onChangeInput} value={createOrEditUser.firstName} placeholder="First name"/>
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="inputLastname">Last name</label>
                      <input type="text" className="form-control" id="lastName" name="lastName"
                             onChange={this.onChangeInput} value={createOrEditUser.lastName} placeholder="Last name"/>
                    </div>
                  </div>
                <div className="form-group row">
                  <div className="col-sm-6">
                    <label htmlFor="inputAddressLine1">Email</label>
                    <input type="text" className="form-control" id="inputEmail" name="email"
                           onChange={this.onChangeInput} value={createOrEditUser.email} placeholder="Email Adress"/>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="inputAddressLine2">Mobile Number</label>
                    <input type="text" className="form-control" id="inputMobileNumber"
                           name="mobileNumber" onChange={this.onChangeInput} value={createOrEditUser.mobileNumber | undefined} placeholder="Mobile Number"/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-6">
                    <label htmlFor="inputAddressLine1">Password Expiry</label>
                    <input type="text" className="form-control" id="inputEmail" name="passwordValidTill"
                           onChange={this.onChangeInput} value={createOrEditUser.passwordValidTill | undefined} placeholder="Email Adress"/>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="inputAddressLine2">Account Expiry</label>
                    <input type="text" className="form-control" id="inputMobileNumber" name="accountValidTill"
                           onChange={this.onChangeInput} value={createOrEditUser.accountValidTill | undefined} placeholder="Mobile Number"/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-6">
                    <label htmlFor="inputAddressLine1">Account Locked On</label>
                    <input type="text" className="form-control" id="inputEmail" name="accountLockedDate"
                           onChange={this.onChangeInput} value={createOrEditUser.accountLockedDate | undefined} placeholder="Email Adress"/>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="inputAddressLine1">Invalid Attempt</label>
                    <input type="number" className="form-control" id="inputInvalidAttempt" name="invalidAttempts"
                           onChange={this.onChangeInput} value={createOrEditUser.invalidAttempts | undefined} placeholder="Invalid Attempt"/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-6">
                    <label htmlFor="inputAddressLine2">Is Password Changed</label>
                    <input type="text" className="form-control" id="inputIsPasswordChanged" name="passwordChanged"
                           onChange={this.onChangeInput} value={createOrEditUser.passwordChanged | undefined} placeholder="Is Password Changed"/>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="inputAddressLine2">Roles</label>
                    <Select
                      isMulti
                      onChange={this.onChangeMultiSelect}
                      value={selectedAuthorities}
                      options={options}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      styles={customStyles}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn-sm btn-primary px-4 float-right" onClick={saveOrUpdateUser.bind(this, createOrEditUser)} >Save</button>
          <button className="btn-sm btn-secondary px-4 float-right" onClick={handleClose}>Close</button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  users: storeState.userState.users
});

const mapDispatchToProps = { getUsers };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdateModal);

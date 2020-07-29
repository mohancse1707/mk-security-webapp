/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { IRootState } from 'app/shared/reducers';
import { getUsers } from './user.reducer';
import { IUser } from 'app/shared/models/user-management/user.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserUpdateModal } from 'app/module/user-management/user-update-modal';

export interface IUserProps extends StateProps, DispatchProps, RouteProps, RouteComponentProps<{}> {}

export interface IUserState {
  usersList: IUser[];
  showModal: boolean;
  createOrEditUser: IUser;
  isCreateUser: boolean;
}

export class User extends React.Component<IUserProps, IUserState> {

  state: IUserState = {
    usersList: [],
    showModal: false,
    createOrEditUser: {} as IUser,
    isCreateUser: false
  };

  componentDidMount(): void {
    this.props.getUsers();
  }

  componentDidUpdate(prevProps: IUserProps, prevState) {
    if (this.props.users !== prevProps.users) {
      this.setState(state => ({ usersList: this.props.users }));
    }
  }

  onChange = (index, event) => {
    const { usersList } = this.state;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const name = event.target.name;

    if (event.target.type === 'select-one') {

    } else {

    }

    this.setState(state => ({ usersList }));
  };

  createUser = () =>{
    this.setState(state => ({ createOrEditUser: { }, showModal: true, isCreateUser: true }));
  };

  editUser = createOrEditUser => {
    this.setState(state => ({ createOrEditUser: { ...createOrEditUser }, showModal: true, isCreateUser: false }));
  };

  saveOrUpdateUser = selectedUser => {
  };

  handleClose = () => {
    this.setState(state => ({ showModal: false }));
  };

  renderModalPanel() {
    return (<UserUpdateModal isCreateUser={this.state.isCreateUser} saveOrUpdateUser={this.saveOrUpdateUser} createOrEditUser={this.state.createOrEditUser} handleClose={this.handleClose} showModal={this.state.showModal} />);
  }

  render() {
    const { usersList } = this.state;
    return (
      <div>
        <div className="my-3 p-3 bg-white rounded box-shadow border-2x-solid">
          <div className="bg-light">

            <div className="float-left">Float left on all viewport sizes</div>

            <div className="float-right">Float right on all viewport sizes</div>


          </div>
        </div>

        <div className="my-3 p-3 bg-white rounded box-shadow border-2x-solid">
          <h6 className="border-bottom border-gray pb-2 mb-0">Suggestions</h6>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="bg-purple">
              <tr>
                <th scope="col">Username</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">Account Valid</th>
                <th scope="col">Password Valid</th>
                <th scope="col">Roles</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
                {usersList.map((user, userIndex) => (
                  <tr key={`value-${userIndex}`}>
                    <td className="align-middle p-3">
                      <output>{user.username}</output>
                    </td>
                    <td className="align-middle p-3">
                      <output>{user.firstName}</output>
                    </td>
                    <td className="align-middle p-3">
                      <output>{user.lastName}</output>
                    </td>
                    <td className="align-middle p-3">
                      <output>{user.email}</output>
                    </td>
                    <td className="align-middle p-3">
                      <output>{user.accountValidTill}</output>
                    </td>
                    <td className="align-middle p-3">
                      <output>{user.passwordValidTill}</output>
                    </td>
                    <td className="align-middle p-3">
                      <output>{user.authorities}</output>
                    </td>
                    <td className="align-middle p-3">
                      <a>
                        <FontAwesomeIcon data-toggle="modal" data-target="#exampleModalCenter" onClick={this.editUser.bind(this, user)} color="dimgray" size="1x" icon="edit" />
                      </a>
                    </td>
                  </tr>
                ))}
                {usersList.length === 0
                  ?
                  (<tr>
                  <td colSpan={14} className="message">
                     No users found to list. Please refine the search conditions to list the users(s).
                  </td>
                </tr>) : <></>}
            </tbody>
          </table>
        </div>
          <button className="btn-sm btn-primary px-4 " onClick={this.createUser}>Create</button>
        </div>

        {this.renderModalPanel()}
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  users: storeState.userState.users
});

const mapDispatchToProps = { getUsers };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(User);

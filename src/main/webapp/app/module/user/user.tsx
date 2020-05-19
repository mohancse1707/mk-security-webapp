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

export interface IUserProps extends StateProps, DispatchProps, RouteProps, RouteComponentProps<{}> {
  name: string;
}

export interface ITableState {
  displayPropTypesMap: any;
  columnHeaders: any;
  values: any;
  tableThCss: string;
  roleList: any;
}

export class User extends React.Component<IUserProps, ITableState> {

  state: ITableState = {
    displayPropTypesMap: {
      username: 'text',
      firstName: 'text',
      roleId: 'select'
    },
    columnHeaders: ['Username', 'First Name', 'Role'],
    values: [{
      id: 1,
      username: 'admin',
      firstName: 'Mohankumar',
      lastName: 'Rathinam',
      role: {
        roleId: 1,
        roleName: 'ROLE_ADMIN'
      },
      email: 'mohan.cse17@gmail.com',
      editable: false
    },
    {
      id: 2,
      username: 'user',
      firstName: 'Karthikeyan',
      lastName: 'V',
      role: {
        roleId: 1,
        roleName: 'ROLE_USER'
      },
      email: 'karthi17@gmail.com',
      editable: false
    }],
    tableThCss: 'bg-purple',
    roleList: [{
      roleId: 1,
      roleName: 'ROLE_ADMIN',
      roleDesription: "admin can access al pages"
    },{
      roleId: 2,
      roleName: 'ROLE_USER',
      roleDescription: "admin can access al pages"
    }]
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  onChange = (index, event) => {
    const { values } = this.state;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    if(event.target.type === 'select-one'){

      values[index].role[event.target.name] = value;

    } else {
      values[index][event.target.name] = value;

    }
    this.setState(state => ({ values }));
    console.log('select ONCHANGE', values[index].role[event.target.name]);

    console.log('ONCHANGE', values[index][event.target.name]);

    // Object.entries(values[index]).forEach(([key, value]) => {
    //   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
    // });
  };

  render() {
    const { columnHeaders, displayProps, values, tableThCss, displayPropTypesMap, roleList } = this.state;
    return (
      <div>
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className={tableThCss}>
              <tr>
                <th scope="col">Action</th>
                {columnHeaders.map((header, headerIndex) => (
                <th key={`header-${headerIndex}`} scope="col">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
                {values.map((value, valueIndex) => (
                  <tr key={`value-${valueIndex}`}>
                    <td className="align-middle p-3"><input type="checkbox" checked={value.editable} onChange={e => this.onChange(valueIndex, e)} name="editable" /></td>
                    {Object.keys(displayPropTypesMap).map((displayKey, displayKeyIndex) => (
                      <td className="align-middle p-3" key={`display-${displayKeyIndex}`}>
                        { value.editable ? (
                          <div>
                            { displayPropTypesMap[displayKey] === 'select' ? (
                              <select name={displayKey} value={value.role[displayKey]} onChange={e => this.onChange(valueIndex, e)}>
                                {roleList.map(role => (
                                  <option value={role[displayKey]} key={role[displayKey]}>
                                    {role.roleName}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <input type={displayPropTypesMap[displayKey]} className="form-control form-control-sm" name={displayKey} value={value[displayKey]} onChange={e => this.onChange(valueIndex, e)} />
                            )}
                          </div>
                          ) : (
                              (displayPropTypesMap[displayKey] === 'select') ?
                                (
                                  <output>{value.role[displayKey]}</output>
                                ) :
                                (
                                  <output>{value[displayKey]}</output>
                                )
                          )
                        }
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
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

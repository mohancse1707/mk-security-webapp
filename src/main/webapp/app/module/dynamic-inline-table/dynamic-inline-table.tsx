/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { IRootState } from 'app/shared/reducers';
import { getTableData } from './dynamic-inline-table.reducer';

export interface IDynamicInlineTableProps extends StateProps, DispatchProps, RouteProps, RouteComponentProps<{}> {
  name: string;
}

export interface IDynamicInlineTableState {
  displayPropTypesMap: any;
  columnHeaders: any;
  values: any;
  tableThCss: string;
  displayList: any;
}

export class DynamicInlineTable extends React.Component<IDynamicInlineTableProps, IDynamicInlineTableState> {

  state: IDynamicInlineTableState = {
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
          roleId: 2,
          roleName: 'ROLE_USER'
        },
        email: 'karthi17@gmail.com',
        editable: false
      }],
    tableThCss: 'bg-purple',
    displayList: {
      roleId: [{
        roleId: 1,
        roleName: 'ROLE_ADMIN',
        roleDescription: 'admin can access al pages'
      }, {
        roleId: 2,
        roleName: 'ROLE_USER',
        roleDescription: 'admin can access al pages'
      }]
    }
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTableData();
  }

  onDataChange = (index, event) => {
    const { values } = this.state;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const name = event.target.name;

    if (event.target.type === 'select-one') {
      values[index][name.slice(0, name.length - 2)][name] = value;
      values[index][name.slice(0, name.length - 2)][(name.slice(0, name.length - 2) + 'Name')] = event.target.selectedOptions[0].text;
    } else {
      values[index][name] = value;
    }

    this.setState(state => ({ values }));
  };

  render() {
    const { columnHeaders, values, tableThCss, displayPropTypesMap, displayList } = this.state;
    return (
      <div>
        {/*<div className="table-responsive">*/}
        {/*  <table className="table table-bordered table-hover">*/}
        {/*    <thead className={tableThCss}>*/}
        {/*    <tr>*/}
        {/*      <th scope="col">Action</th>*/}
        {/*      {columnHeaders.map((header, headerIndex) => (*/}
        {/*        <th key={`header-${headerIndex}`} scope="col">{header}</th>*/}
        {/*      ))}*/}
        {/*    </tr>*/}
        {/*    </thead>*/}
        {/*    <tbody>*/}
        {/*    {values.map((value, valueIndex) => (*/}
        {/*      <tr key={`value-${valueIndex}`}>*/}
        {/*        <td className="align-middle p-3"><input type="checkbox" checked={value.editable}
        onChange={e => this.onDataChange(valueIndex, e)} name="editable" /></td>*/}
        {/*        {Object.keys(displayPropTypesMap).map((displayKey, displayKeyIndex) => (*/}
        {/*          <td className="align-middle p-3" key={`display-${displayKeyIndex}`}>*/}
        {/*            { value.editable ? (*/}
        {/*              <div>*/}
        {/*                { displayPropTypesMap[displayKey] === 'select' ? (*/}
        {/*                  Object.keys(displayList).map((displayListKey, displayListKeyIndex) => (*/}
        {/*                    <div key={`display-${displayListKeyIndex}`}>*/}
        {/*                      { displayListKey === displayKey ? (*/}
        {/*                        <select name={displayKey} value={value[displayKey.slice(0, displayKey.length - 2)][displayKey]}
        onChange={e => this.onDataChange(valueIndex, e)}>*/}
        {/*                          {displayList[displayListKey].map(itrObj => (*/}
        {/*                            <option value={itrObj[displayKey]} key={itrObj[displayKey]}>*/}
        {/*                              {itrObj[(displayKey.slice(0, displayKey.length - 2) + 'Name')]}*/}
        {/*                            </option>*/}
        {/*                          ))}*/}
        {/*                        </select>*/}
        {/*                      ) : (*/}
        {/*                        <span className="bg-info font-weight-bold">displayList key
        is not matching with displayPropTypesMap </span>*/}
        {/*                      ) }*/}
        {/*                    </div>*/}
        {/*                  ))*/}
        {/*                ) : (*/}
        {/*                  <input type={displayPropTypesMap[displayKey]} className="form-control form-control-sm"
        name={displayKey} value={value[displayKey]} onChange={e => this.onDataChange(valueIndex, e)} />*/}
        {/*                )}*/}
        {/*              </div>*/}
        {/*            ) : (*/}
        {/*              (displayPropTypesMap[displayKey] === 'select' ? (*/}
        {/*                <output>{value[displayKey.slice(0, displayKey.length - 2)][(displayKey.slice(0, displayKey.length - 2) + 'Name')]}</output>*/}
        {/*              ) : (*/}
        {/*                <output>{value[displayKey]}</output>*/}
        {/*              ))*/}
        {/*            )*/}
        {/*            }*/}
        {/*          </td>*/}
        {/*        ))}*/}
        {/*      </tr>*/}
        {/*    ))}*/}
        {/*    </tbody>*/}
        {/*  </table>*/}
        {/*</div>*/}
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  loading: storeState.dynamicInlineTableState.loading
});

const mapDispatchToProps = { getTableData };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DynamicInlineTable);

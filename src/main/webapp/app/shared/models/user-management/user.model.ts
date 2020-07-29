/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

export interface IUser {
  id?: any;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  mobileNumber?: string;
  activated?: boolean;
  accountLockedDate?: Date;
  accountValidTill?: Date;
  invalidAttempts?: number;
  passwordChanged?: boolean;
  passwordValidTill?: Date;
  authorities?: [];
  createdBy?: string;
  createdDate?: Date;
  lastModifiedBy?: string;
  lastModifiedDate?: Date;
  password?: string;
}

export const defaultValue: Readonly<IUser> = {
  id: '',
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  activated: true,
  accountLockedDate: null,
  accountValidTill: null,
  invalidAttempts: 0,
  passwordChanged: false,
  passwordValidTill: null,
  authorities: [],
  createdBy: '',
  createdDate: null,
  lastModifiedBy: '',
  lastModifiedDate: null,
  password: ''
};

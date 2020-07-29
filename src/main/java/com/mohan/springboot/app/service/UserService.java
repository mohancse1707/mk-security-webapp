/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

package com.mohan.springboot.app.service;

import com.mohan.springboot.app.dto.user.UserDTO;
import java.util.List;

public interface UserService {
    void findIfAnyAdminElseCreate();
    List<UserDTO> getAllUsers();
}

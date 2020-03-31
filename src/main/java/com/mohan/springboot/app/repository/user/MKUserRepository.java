/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

package com.mohan.springboot.app.repository.user;

import com.mohan.springboot.app.entity.security.MKUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MKUserRepository extends JpaRepository<MKUser, Long> {

}

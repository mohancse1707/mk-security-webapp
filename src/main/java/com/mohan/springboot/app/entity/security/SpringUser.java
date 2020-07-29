/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

package com.mohan.springboot.app.entity.security;

import java.util.Date;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;

@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
public class SpringUser extends User {

    private final String firstName;
    private final String lastName;
    private final Date accountValidTill;
    private final Date accountLockedDate;
    private final String emailId;
    private final boolean changePassword;

    public SpringUser(MKUser mkUser) {

        super(mkUser.getUsername(), mkUser.getPassword(), true,
            true, true, true, AuthorityUtils.createAuthorityList("ROLE_ADMIN"));

        this.firstName = mkUser.getFirstName();
        this.lastName = mkUser.getLastName();
        this.accountValidTill = null != mkUser.getAccountValidTill() ? mkUser.getAccountValidTill() : null;
        this.accountLockedDate = null != mkUser.getAccountLockedDate() ? mkUser.getAccountLockedDate() : null;
        this.emailId = mkUser.getEmail();
        this.changePassword = mkUser.isPasswordChanged();
    }

}

/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

package com.mohan.springboot.app.dto.user;

import com.mohan.springboot.app.dto.generic.DTOEntity;
import java.io.Serializable;
import java.time.Instant;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
public class UserDTO implements DTOEntity, Serializable {

    private static final long serialVersionUID = -7986484492253889502L;

    private Long id;

    private String username;

    private String firstName;

    private String lastName;

    private String email;

    private Date passwordValidTill;

    private Date accountValidTill;

    private Date accountLockedDate;

    private int invalidAttempts;

    private boolean isPasswordChanged;

    private String createdBy;

    private Instant createdDate;

    private String lastModifiedBy;

    private Instant lastModifiedDate;

    private Set<String> authorities = new HashSet<>();

    private boolean activated = false;
}

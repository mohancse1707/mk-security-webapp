/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

package com.mohan.springboot.app.dto.user;

import java.io.Serializable;
import java.time.Instant;
import java.util.Set;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
public class UserDTO implements Serializable {

    private static final long serialVersionUID = -7986484492253889502L;

    private Long id;

    private String login;

    @Size(max = 50)
    private String firstName;

    @Size(max = 50)
    private String lastName;

    @Email
    @Size(min = 5, max = 254)
    private String email;

    @Size(max = 256)
    private String imageUrl;

    private boolean activated = false;

    @Size(min = 2, max = 6)
    private String langKey;

    private String createdBy;

    private Instant createdDate;

    private String lastModifiedBy;

    private Instant lastModifiedDate;

    private Set<String> authorities;
}

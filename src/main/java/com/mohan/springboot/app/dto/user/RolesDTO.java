/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

package com.mohan.springboot.app.dto.user;


import com.mohan.springboot.app.dto.generic.DTOEntity;
import java.io.Serializable;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
public class RolesDTO implements DTOEntity, Serializable {

    private static final long serialVersionUID = 2856430186497561041L;

    private Long roleId;

    private String roleName;

    private String roleDescription;
}

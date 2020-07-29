/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

package com.mohan.springboot.app.entity.security;

import com.mohan.springboot.app.audit.Auditable;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;


@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@Table(name = "mk_user")
@Entity
public class MKUser extends Auditable<String> implements Serializable {

    private static final long serialVersionUID = -5293752851198112189L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private Long userId;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "mobile_number")
    private String mobileNumber;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "password_valid_till")
    private Date passwordValidTill;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "account_valid_till")
    private Date accountValidTill;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "account_locked_date")
    private Date accountLockedDate;

    @Column(name = "invalid_attempts")
    private int invalidAttempts;

    @Column(name = "is_password_changed")
    private boolean isPasswordChanged;

    @ManyToMany(cascade= CascadeType.ALL)
    @JoinTable(
        name="mkuser_role_map",
        joinColumns={@JoinColumn(name="user_id", referencedColumnName="user_id")},
        inverseJoinColumns={@JoinColumn(name="role_id", referencedColumnName="role_id")})
    private List<MKRoles> roles;
}

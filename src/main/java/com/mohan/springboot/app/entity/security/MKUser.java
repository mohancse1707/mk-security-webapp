/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

package com.mohan.springboot.app.entity.security;

import com.mohan.springboot.app.audit.Auditable;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Date;
import javax.persistence.*;
import java.io.Serializable;


@Getter(AccessLevel.PUBLIC)
@Setter(AccessLevel.PUBLIC)
@Table(name = "mk_user")
@Entity
public class MKUser extends Auditable<String> implements Serializable {

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
}

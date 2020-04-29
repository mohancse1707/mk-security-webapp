/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

package com.mohan.springboot.app.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Slf4j
public class CustomUserDetailsService implements UserDetailsService {
    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        log.info("UserName {} password {}", s, s);
        User user = new User("admin", "$2a$10$Lxzj1o66u39RkPCGaoyksuxF9.vTUqh/OthLgkqLz6s5rvHa.nkRO", AuthorityUtils.createAuthorityList("ROLE_ADMIN"));
        log.info("user {} ", user);
        return user;
    }
}

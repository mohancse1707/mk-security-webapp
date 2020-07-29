/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

package com.mohan.springboot.app.security;

import com.mohan.springboot.app.entity.security.SpringUser;
import com.mohan.springboot.app.entity.security.MKUser;
import com.mohan.springboot.app.repository.user.UserRepository;
import java.util.Optional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Slf4j
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("UserName {} password {}", username, username);
        Optional<MKUser> optionalUser = userRepository.findByUsername(username);
        UserDetails user = optionalUser.map(SpringUser::new).get();
        log.info("user {} ", user);
        return user;
    }
}

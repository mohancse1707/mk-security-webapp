/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

package com.mohan.springboot.app.service.impl;

import com.mohan.springboot.app.dto.user.UserDTO;
import com.mohan.springboot.app.entity.security.MKUser;
import com.mohan.springboot.app.repository.user.UserRepository;
import com.mohan.springboot.app.service.UserService;
import com.mohan.springboot.app.utils.DTOUtils;
import io.undertow.util.DateUtils;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private static final String ADMIN = "admin";

    @Autowired
    private UserRepository userRepository;

    public void findIfAnyAdminElseCreate(){
        MKUser findMKUser = new MKUser();
        findMKUser.setUsername(ADMIN);
        if(!userRepository.findOne(Example.of(findMKUser)).isPresent()){
            MKUser newMKUser = new MKUser();
            newMKUser.setUsername(ADMIN);
            newMKUser.setAccountLockedDate(null);
            newMKUser.setAccountValidTill(DateUtils.parseDate("2100-01-01"));
            newMKUser.setEmail("mohan.cse17@gmail.com");
            newMKUser.setFirstName(ADMIN);
            newMKUser.setInvalidAttempts(0);
            newMKUser.setLastName(ADMIN);
            newMKUser.setPassword("$2a$10$Lxzj1o66u39RkPCGaoyksuxF9.vTUqh/OthLgkqLz6s5rvHa.nkRO");
            newMKUser.setPasswordChanged(false);
            newMKUser.setPasswordValidTill(DateUtils.parseDate("2100-01-01"));
            userRepository.save(newMKUser);
        }
    }

    @Override
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream().map(mkUser ->
            (UserDTO) DTOUtils.convertToDto(mkUser, new UserDTO())).collect(Collectors.toList());
    }


}

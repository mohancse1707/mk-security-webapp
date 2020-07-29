/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

package com.mohan.springboot.app;
import com.mohan.springboot.app.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

/**
 * @author MOHANKUMAR
 */
@Slf4j
@Component
public class SecurityApplicationRunner implements ApplicationRunner {

    @Autowired
    private UserService userService;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        try {
            userService.findIfAnyAdminElseCreate();
        } catch (Exception ex) {
            log.error("app startup - error in findIfAnyAdminElseCreate", ex);
        }
    }
}

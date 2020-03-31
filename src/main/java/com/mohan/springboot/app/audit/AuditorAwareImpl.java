/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

package com.mohan.springboot.app.audit;

import com.mohan.springboot.app.entity.security.MKUserDetails;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;

import java.util.Optional;

public class AuditorAwareImpl implements AuditorAware<String>
{
    @Override
    public Optional<String> getCurrentAuditor() {
        //SecurityContextHolder.getContext().getAuthentication().getName();
        return Optional.of("MKGroup");
    }
}

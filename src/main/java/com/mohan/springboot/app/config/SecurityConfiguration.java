/*
 * Copyright (c) 2020. MK Groups.
 * All rights reserved.
 * All data of MK groups are confidential.
 */

package com.mohan.springboot.app.config;

import com.mohan.springboot.app.handler.AjaxAuthenticationFailureHandler;
import com.mohan.springboot.app.handler.AjaxAuthenticationSuccessHandler;
import com.mohan.springboot.app.handler.AjaxLogoutSuccessHandler;
import com.mohan.springboot.app.handler.Http401UnauthorizedEntryPoint;
import com.mohan.springboot.app.security.CustomDaoAuthenticationProvider;
import com.mohan.springboot.app.security.CustomUserDetailsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Slf4j
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, proxyTargetClass = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Bean
    public AjaxAuthenticationSuccessHandler ajaxAuthenticationSuccessHandler() {
        return new AjaxAuthenticationSuccessHandler();
    }

    @Bean
    public AjaxAuthenticationFailureHandler ajaxAuthenticationFailureHandler() {
        return new AjaxAuthenticationFailureHandler();
    }

    @Bean
    public AjaxLogoutSuccessHandler ajaxLogoutSuccessHandler() {
        return new AjaxLogoutSuccessHandler();
    }

    @Bean
    public Http401UnauthorizedEntryPoint authenticationEntryPoint() {
        return new Http401UnauthorizedEntryPoint();
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring()
            .antMatchers(HttpMethod.OPTIONS, "/**")
            .antMatchers("/content/**")
            .antMatchers("/static/**")
            .antMatchers("/app/**/*.{js,html}")
            .antMatchers("/db/**");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .exceptionHandling()
            .authenticationEntryPoint(authenticationEntryPoint()) // which returns 401 instead of 302 on failure URL match
            .and()
            .csrf().disable()
            .formLogin()
            .loginProcessingUrl("/app/authentication")
            .usernameParameter("username")
            .passwordParameter("password")
            .loginPage("/")
            .successHandler(ajaxAuthenticationSuccessHandler())
            .failureHandler(ajaxAuthenticationFailureHandler())
            .permitAll()
            .and()
            .authorizeRequests()
            .antMatchers("/app/authenticate").permitAll()
            .antMatchers("/api/**").authenticated()
            .antMatchers("/app/logout").permitAll()
            .antMatchers("/app/register").permitAll()
            .antMatchers("/app/rest/**").authenticated()
            .and()
            .logout()
            .permitAll();
    }

    /*
    * This is the code you usually have to configure your authentication manager.
    * This configuration will be used by authenticationManagerBean() below.
    * https://stackoverflow.com/questions/30761253/remove-using-default-security-password-on-spring-boot
    * */
    @Override
    protected void configure(AuthenticationManagerBuilder authManager) throws Exception {
        authManager
            .authenticationProvider(customDaoAuthenticationProvider());
    }

    /*
    * ALTHOUGH THIS SEEMS LIKE USELESS CODE, BUT IT'S REQUIRED TO PREVENT SPRING BOOT AUTO-CONFIGURATION
    *  A dependency cycle was detected when trying to resolve the AuthenticationManager.
    * Please ensure you have configured authentication.
    * https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.0-Migration-Guide#authenticationmanager-bean
    * */
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public CustomDaoAuthenticationProvider customDaoAuthenticationProvider(){
        CustomDaoAuthenticationProvider customDaoAuthenticationProvider = new CustomDaoAuthenticationProvider();
        customDaoAuthenticationProvider.setUserDetailsService(userDetailsService());
        customDaoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
        return customDaoAuthenticationProvider;
    }

    @Bean
    protected UserDetailsService userDetailsService() {
        return new CustomUserDetailsService();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        log.info("encoder {}", encoder.encode("admin"));
        return encoder;
    }
}

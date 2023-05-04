package com.siaf.api.login.controller;

import lombok.Data;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data

public class LoginVO {
    @NotBlank
    private String id;

    @NotNull
    private String name;

    @Range(min = 1, max = 10)
    private int age;
}
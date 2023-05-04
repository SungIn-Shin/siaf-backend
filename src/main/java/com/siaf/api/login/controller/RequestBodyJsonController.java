package com.siaf.api.login.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/json")
public class RequestBodyJsonController {

    @PostMapping("/test1")
    public void requestBodyJson1 () {

    }
}

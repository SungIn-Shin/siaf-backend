package com.siaf.api.login.controller;

import com.siaf.api.login.validator.LoginValidator;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.util.MultiValueMap;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Locale;


//@ConfigurationProperties(prefix = "sample")
@RestController
@RequestMapping("/login")
@Slf4j // -> 이 언노테이션으로  private Logger log = LoMgerFactory.getLogger(LoginController.class); 사용가능.
@RequiredArgsConstructor
public class LoginController {

    // application context에서 @Value로 값을 가져올 수 있음.
    @Value("${my.name}")
    String name;

    private final LoginValidator loginValidator;

//    @InitBinder
//    private void init(WebDataBinder webDataBinder) {
//        webDataBinder.addValidators(loginValidator);
//    }

    @RequestMapping("/getHeaders")
    public String getRequestInfo (HttpServletRequest req, // request obj
                                  HttpServletResponse res,  // response obj
                                  HttpMethod httpMethod,  // http method 정보
                                  Locale locale,  // 로케일 정보
                                  @RequestHeader MultiValueMap<String, String> headers,  // 헤더 모두
                                  @RequestHeader("host") String host,  // 헤더 하나 가져오기
                                  @CookieValue(value="myCookie", required = false) String cookie // cookie 하나 가져오기
    ) {
        log.info("req : {}", req);
        log.info("res : {}", res);
        log.info("httpMethod : {}", httpMethod);
        log.info("locale : {}", locale);
        log.info("headers : {}", headers);
        log.info("host : {}", host);
        log.info("cookie : {}", cookie);
        return "ok";
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String loginInit() {
        log.trace("trace");
        log.debug("debug");
        log.info("info");
        log.warn("warn");
        log.error("error");
        return "login hello : " + name;
    }

    @GetMapping("/{userId}")
    public String pathVariableTest(@PathVariable String userId) {

        return "pathVariableTest : " + userId;
    }

    @PostMapping("/{userId}")
    public @ResponseBody LoginVO postTest(@RequestBody LoginVO vo, // post  바디로 넘어온 값을 @RequestBody 로 받을 수 있음.
                                          @PathVariable String userId //
    ) {
        log.info("userId : {}", userId);
        log.info("vo : {}", vo);
        return vo;
    }


    /**
     * validation 추가
     * @param loginVO
     * @param bindingResult
     * @return
     */
    @ResponseBody
//    @ResponseStatus(HttpStatus.BAD_GATEWAY) 응답 코드를 지정할 수 있음.
    @PostMapping("/model-attribute-1")
    public Object pathVariableTest(@RequestBody @Validated  LoginVO loginVO, BindingResult bindingResult) {
        // 파라미터 명과 자동 맵핑 됨, @ModelAttribute 는 생략 자능
        // 파라미터 명과 자동 맵핑 됨, @ModelAttribute 는 생략 자능

        if(bindingResult.hasErrors()){
            log.info("bindingResult.toString() : {}", bindingResult.toString());
            return bindingResult.getAllErrors();
        }

        return loginVO;
    }

    @PatchMapping("/{userId}")
    public String patchTest(@PathVariable String userId) {
        throw new RuntimeException("runtime exception test");
//        return "patchTest : " + userId;
    }

    @DeleteMapping("/{userId}")
    public String deleteTest(@PathVariable String userId) {
        return "deleteTest : " + userId;
    }
}

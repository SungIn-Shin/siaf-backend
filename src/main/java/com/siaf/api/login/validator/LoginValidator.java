package com.siaf.api.login.validator;

import com.siaf.api.login.controller.LoginVO;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

@Component
public class LoginValidator implements Validator {
    @Override
    public boolean supports(Class<?> clazz) {
        return LoginVO.class.isAssignableFrom(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {
        LoginVO loginVO = (LoginVO) target;
        if("".equals(loginVO.getId()) || loginVO.getId() == null) {
//            bindingResult.addError(new FieldError("loginVO", "id", "아이디를입력하세요."));
            errors.rejectValue("id", "required");
        }

    }
}

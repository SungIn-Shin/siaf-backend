package com.siaf.validation;

import com.siaf.api.login.controller.LoginVO;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Set;

@SpringBootTest
public class BeanValidationTest {

    @Test
    void beanValidation() {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();

        LoginVO vo = new LoginVO();
        vo.setId("");
        vo.setName("");
        vo.setAge(0);

        Set<ConstraintViolation<LoginVO>> validate = validator.validate(vo);
        for (ConstraintViolation<LoginVO> loginVOConstraintViolation : validate) {
            System.out.println("loginVOConstraintViolation = " + loginVOConstraintViolation);
            System.out.println("loginVOConstraintViolation.getMessage() = " + loginVOConstraintViolation.getMessage());
        }
    }
}

package com.siaf;

import com.siaf.common.intercept.LoginCheckInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoginCheckInterceptor())
                .order(1) // 인터셉터 순서
                .addPathPatterns("/login") // 인터셉터 추가
                .excludePathPatterns(
                        "/test/**" ,
                        "/js/**",
                        "/css/**",
                        "/fonts/**"
                ); // 인터셉터에서 제외
    }

    @Override
    public void extendHandlerExceptionResolvers(List<HandlerExceptionResolver> resolvers) {
//        resolvers.add(new MyHandlerExceptionResolver());
//        resolvers.add(new UserHandlerExceptionResolver());
    }

}
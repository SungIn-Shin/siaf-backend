package com.siaf.domain.address;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
public class Address {
    //

    @NotNull
    private final String addressId;

    @NotNull
    @Setter
    private String divCode; // 구분코드 - 001 : Company, 002 : User

    @NotNull
    @Setter
    private String divDetailCode; // 001 : 지번주소, 002 : 도로명주소

    @Builder
    public Address (String addressId, String divCode, String divDetailCode){
        this.addressId = addressId;
        this.divCode = divCode;
        this.divDetailCode = divDetailCode;
    }

}

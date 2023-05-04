package com.siaf.domain.company;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
public class Company {

    @NotNull
    private final String companyId;

    @NotNull
    @Setter
    private String companyName;

    @NotNull
    @Setter
    private String companyRepresentative;

    @Builder
    public Company(String companyId, String companyName, String companyRepresentative) {
        this.companyId = companyId;
        this.companyName = companyName;
        this.companyRepresentative = companyRepresentative;
    }

    @Override
    public String toString() {
        return "Company{" +
                "companyId='" + companyId + '\'' +
                ", companyName='" + companyName + '\'' +
                ", companyRepresentative='" + companyRepresentative + '\'' +
                '}';
    }
}

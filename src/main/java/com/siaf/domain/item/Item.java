package com.siaf.domain.item;


import com.siaf.domain.common.file.UploadFile;
import lombok.Data;

import java.util.List;

@Data
public class Item {

    private Long id;
    private String itemName;
    private UploadFile attachFile;
    private List<UploadFile> imageFiles;
}

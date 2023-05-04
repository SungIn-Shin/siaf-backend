package com.siaf.api.file;

import com.siaf.common.file.FileStore;
import com.siaf.domain.common.file.UploadFile;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class FileUploadAPIController {

    private final FileStore fileStore;

    @Value("file.dir")
    private String fileDir;

    @PostMapping("/upload")
    public String saveFile(@RequestParam String itemName,
                           @RequestParam List<MultipartFile> files,
                           HttpServletRequest request) throws IOException {

        log.info("request={}", request);
        log.info("itemName={}", itemName);
        log.info("multipartFile={}", files);

        if(files.size() > 0 ) {
            log.info("files size : {}", files.size());
        }
        for (MultipartFile file : files) {
            if (!file.isEmpty()) {
                UploadFile uploadFile = fileStore.storeFile(file);
                log.info(uploadFile.toString());
            }
        }



        return "upload-form";
    }
}

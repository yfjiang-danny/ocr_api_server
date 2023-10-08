const axios = require("axios");
const FormData = require("form-data");

const fs = require("fs");
const path = require("path");

(function main() {
  const filePath = path.resolve("test.jpg"); // 替换为要读取的文件路径

  const formData = new FormData();
  formData.append("image", fs.createReadStream(filePath));

  axios
    .post("http://localhost:9898/ocr/file", formData, {
      headers: {
        ...formData.getHeaders(),
      },
    })
    .then((response) => {
      console.log("File uploaded successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error uploading file:", error);
    });
})();

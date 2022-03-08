import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.OrganizationsApi(configuration);

let params: v1.OrganizationsApiUploadIdPForOrgRequest = {
  // string | The `public_id` of the organization you are operating with
  publicId: "abc123",
  // HttpFile | The path to the XML metadata file you wish to upload.
  idpFile: {
    data: Buffer.from(fs.readFileSync("/path/to/file", "utf-8")),
    name: "/path/to/file",
  },
};

apiInstance
  .uploadIdPForOrg(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Upload IdP metadata returns "OK" response
 */

import * as fs from "fs";
import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.OrganizationsApi(configuration);

const params: v1.OrganizationsApiUploadIdPForOrgRequest = {
  publicId: "abc123",
  idpFile: {
    data: Buffer.from(fs.readFileSync("./idp_metadata.xml", "utf8")),
    name: "./idp_metadata.xml",
  },
};

apiInstance
  .uploadIdPForOrg(params)
  .then((data: v1.IdpResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

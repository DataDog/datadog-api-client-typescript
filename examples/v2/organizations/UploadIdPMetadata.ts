/**
 * Upload IdP metadata returns "OK" response
 */

import * as fs from "fs";
import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.OrganizationsApi(configuration);

const params: v2.OrganizationsApiUploadIdPMetadataRequest = {
  idpFile: {
    data: Buffer.from(
      fs.readFileSync(
        "fixtures/organizations/saml_configurations/valid_idp_metadata.xml",
        "utf8"
      )
    ),
    name: "fixtures/organizations/saml_configurations/valid_idp_metadata.xml",
  },
};

apiInstance
  .uploadIdPMetadata(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

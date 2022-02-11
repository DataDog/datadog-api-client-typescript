import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.OrganizationsApi(configuration);

let params: v1.OrganizationsApiGetOrgRequest = {
  // string | The `public_id` of the organization you are operating within.
  publicId: "abc123",
};

apiInstance
  .getOrg(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * List your managed organizations returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.OrganizationsApi(configuration);

apiInstance
  .listOrgs()
  .then((data: v1.OrganizationListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

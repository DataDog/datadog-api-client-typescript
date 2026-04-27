/**
 * List your managed organizations returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OrganizationsApi(configuration);

apiInstance
  .listOrgs()
  .then((data: v2.ManagedOrgsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

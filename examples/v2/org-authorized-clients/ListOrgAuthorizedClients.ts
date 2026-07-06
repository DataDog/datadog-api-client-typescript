/**
 * List org authorized clients returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OrgAuthorizedClientsApi(configuration);

apiInstance
  .listOrgAuthorizedClients()
  .then((data: v2.OrgAuthorizedClientsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

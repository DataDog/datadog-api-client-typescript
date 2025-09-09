/**
 * List Org Connections returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OrgConnectionsApi(configuration);

apiInstance
  .listOrgConnections()
  .then((data: v2.OrgConnectionListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

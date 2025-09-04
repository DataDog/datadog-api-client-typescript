/**
 * Delete Org Connection returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OrgConnectionsApi(configuration);

// there is a valid "org_connection" in the system
const ORG_CONNECTION_DATA_ID = process.env.ORG_CONNECTION_DATA_ID as string;

const params: v2.OrgConnectionsApiDeleteOrgConnectionsRequest = {
  connectionId: ORG_CONNECTION_DATA_ID,
};

apiInstance
  .deleteOrgConnections(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

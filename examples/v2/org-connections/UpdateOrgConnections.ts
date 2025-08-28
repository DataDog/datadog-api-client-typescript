/**
 * Update Org Connection returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OrgConnectionsApi(configuration);

// there is a valid "org_connection" in the system
const ORG_CONNECTION_DATA_ID = process.env.ORG_CONNECTION_DATA_ID as string;

const params: v2.OrgConnectionsApiUpdateOrgConnectionsRequest = {
  body: {
    data: {
      type: "org_connection",
      id: ORG_CONNECTION_DATA_ID,
      attributes: {
        connectionTypes: ["logs", "metrics"],
      },
    },
  },
  connectionId: ORG_CONNECTION_DATA_ID,
};

apiInstance
  .updateOrgConnections(params)
  .then((data: v2.OrgConnectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Create Org Connection returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OrgConnectionsApi(configuration);

const params: v2.OrgConnectionsApiCreateOrgConnectionsRequest = {
  body: {
    data: {
      type: "org_connection",
      relationships: {
        sinkOrg: {
          data: {
            type: "orgs",
            id: "83999dcd-7f97-11f0-8de1-1ecf66f1aa85",
          },
        },
      },
      attributes: {
        connectionTypes: ["logs"],
      },
    },
  },
};

apiInstance
  .createOrgConnections(params)
  .then((data: v2.OrgConnectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

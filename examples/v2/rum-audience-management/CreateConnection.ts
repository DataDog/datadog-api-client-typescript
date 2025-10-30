/**
 * Create connection returns "Connection created successfully" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createConnection"] = true;
const apiInstance = new v2.RumAudienceManagementApi(configuration);

const params: v2.RumAudienceManagementApiCreateConnectionRequest = {
  body: {
    data: {
      attributes: {
        fields: [
          {
            description: `Customer subscription tier from ` + "`" + `CRM` + "`",
            displayName: "Customer Tier",
            id: "customer_tier",
            sourceName: "subscription_tier",
            type: "string",
          },
          {
            description: `Customer lifetime value in ` + "`" + `USD` + "`",
            displayName: "Lifetime Value",
            id: "lifetime_value",
            sourceName: "ltv",
            type: "number",
          },
        ],
        joinAttribute: "user_email",
        joinType: "email",
        type: "ref_table",
      },
      id: "crm-integration",
      type: "connection_id",
    },
  },
  entity: "users",
};

apiInstance
  .createConnection(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

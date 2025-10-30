/**
 * Update connection returns "Connection updated successfully" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateConnection"] = true;
const apiInstance = new v2.RumAudienceManagementApi(configuration);

const params: v2.RumAudienceManagementApiUpdateConnectionRequest = {
  body: {
    data: {
      attributes: {
        fieldsToAdd: [
          {
            description: "Net Promoter Score from customer surveys",
            displayName: "NPS Score",
            groups: ["Satisfaction", "Metrics"],
            id: "nps_score",
            sourceName: "net_promoter_score",
            type: "number",
          },
        ],
        fieldsToDelete: ["old_revenue_field"],
        fieldsToUpdate: [
          {
            fieldId: "lifetime_value",
            updatedDisplayName:
              `Customer Lifetime Value (` + "`" + `USD` + "`" + `)`,
            updatedGroups: ["Financial", "Metrics"],
          },
        ],
      },
      id: "crm-integration",
      type: "connection_id",
    },
  },
  entity: "users",
};

apiInstance
  .updateConnection(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Reorder the list of inbox rules in the pipeline returns "The list of inbox rules" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiReorderInboxRulesRequest = {
  body: {
    data: [
      {
        id: "123e4567-e89b-12d3-a456-426655440000",
        type: "inbox_rules",
      },
    ],
  },
};

apiInstance
  .reorderInboxRules(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

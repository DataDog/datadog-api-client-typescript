/**
 * Reorder the list of mute rules in the pipeline returns "The list of mute rules" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiReorderMuteRulesRequest = {
  body: {
    data: [
      {
        id: "123e4567-e89b-12d3-a456-426655440000",
        type: "mute_rules",
      },
    ],
  },
};

apiInstance
  .reorderMuteRules(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

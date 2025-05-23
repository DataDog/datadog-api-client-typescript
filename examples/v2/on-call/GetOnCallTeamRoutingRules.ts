/**
 * Get On-Call team routing rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

const params: v2.OnCallApiGetOnCallTeamRoutingRulesRequest = {
  teamId: "27590dae-47be-4a7d-9abf-8f4e45124020",
};

apiInstance
  .getOnCallTeamRoutingRules(params)
  .then((data: v2.TeamRoutingRules) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

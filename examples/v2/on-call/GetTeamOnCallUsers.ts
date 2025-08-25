/**
 * Get team on-call users returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

// there are valid "routing_rules" in the system
const ROUTING_RULES_DATA_ID = process.env.ROUTING_RULES_DATA_ID as string;

const params: v2.OnCallApiGetTeamOnCallUsersRequest = {
  include: "responders,escalations.responders",
  teamId: ROUTING_RULES_DATA_ID,
};

apiInstance
  .getTeamOnCallUsers(params)
  .then((data: v2.TeamOnCallResponders) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

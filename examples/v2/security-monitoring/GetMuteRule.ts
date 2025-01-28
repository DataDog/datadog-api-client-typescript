/**
 * Get details of a mute rule returns "Mute rule details" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "valid_mute_rule" in the system
const VALID_MUTE_RULE_DATA_ID = process.env.VALID_MUTE_RULE_DATA_ID as string;

const params: v2.SecurityMonitoringApiGetMuteRuleRequest = {
  muteRuleId: VALID_MUTE_RULE_DATA_ID,
};

apiInstance
  .getMuteRule(params)
  .then((data: v2.MuteRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

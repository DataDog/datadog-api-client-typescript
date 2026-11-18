/**
 * Update the outreach mode returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateSecurityAgentOutreachMode"] = true;
const apiInstance = new v2.BitsSecurityAnalystApi(configuration);

const params: v2.BitsSecurityAnalystApiUpdateSecurityAgentOutreachModeRequest =
  {
    body: {
      data: {
        attributes: {
          mode: "automated",
        },
        type: "outreach_policy",
      },
    },
  };

apiInstance
  .updateSecurityAgentOutreachMode(params)
  .then((data: v2.SecurityAgentOutreachModeResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

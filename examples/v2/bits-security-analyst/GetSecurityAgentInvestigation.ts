/**
 * Get a Bits Security Analyst investigation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getSecurityAgentInvestigation"] = true;
const apiInstance = new v2.BitsSecurityAnalystApi(configuration);

const params: v2.BitsSecurityAnalystApiGetSecurityAgentInvestigationRequest = {
  investigationId: "investigation_id",
};

apiInstance
  .getSecurityAgentInvestigation(params)
  .then((data: v2.SecurityAgentInvestigationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

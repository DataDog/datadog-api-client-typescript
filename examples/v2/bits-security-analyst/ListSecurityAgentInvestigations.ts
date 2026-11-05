/**
 * List Bits Security Analyst investigations returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listSecurityAgentInvestigations"] = true;
const apiInstance = new v2.BitsSecurityAnalystApi(configuration);

const params: v2.BitsSecurityAnalystApiListSecurityAgentInvestigationsRequest =
  {
    pageSize: 1,
  };

apiInstance
  .listSecurityAgentInvestigations(params)
  .then((data: v2.SecurityAgentInvestigationsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

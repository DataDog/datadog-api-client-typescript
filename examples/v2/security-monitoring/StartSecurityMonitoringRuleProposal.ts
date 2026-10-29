/**
 * Start a rule proposal returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.startSecurityMonitoringRuleProposal"] =
  true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiStartSecurityMonitoringRuleProposalRequest =
  {
    body: {
      data: {
        type: "rule_proposals",
        attributes: {
          inputType: "natural_language",
          input:
            "Detect repeated failed Okta logins followed by a successful login from the same IP.",
        },
      },
    },
  };

apiInstance
  .startSecurityMonitoringRuleProposal(params)
  .then((data: v2.SecurityMonitoringRuleProposalStartResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

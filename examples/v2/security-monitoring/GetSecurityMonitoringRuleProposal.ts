/**
 * Get a rule proposal returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getSecurityMonitoringRuleProposal"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "rule_proposal" in the system
const RULE_PROPOSAL_DATA_ID = process.env.RULE_PROPOSAL_DATA_ID as string;

const params: v2.SecurityMonitoringApiGetSecurityMonitoringRuleProposalRequest =
  {
    proposalId: RULE_PROPOSAL_DATA_ID,
  };

apiInstance
  .getSecurityMonitoringRuleProposal(params)
  .then((data: v2.SecurityMonitoringRuleProposalResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

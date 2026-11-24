/**
 * Add an allowed outreach domain returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.addSecurityAgentOutreachPolicyDomain"] =
  true;
const apiInstance = new v2.BitsSecurityAnalystApi(configuration);

const params: v2.BitsSecurityAnalystApiAddSecurityAgentOutreachPolicyDomainRequest =
  {
    body: {
      data: {
        attributes: {
          domain: "acme.com",
        },
        type: "outreach_policy_domain_add",
      },
    },
  };

apiInstance
  .addSecurityAgentOutreachPolicyDomain(params)
  .then((data: v2.SecurityAgentOutreachPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

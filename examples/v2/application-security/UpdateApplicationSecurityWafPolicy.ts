/**
 * Update a WAF Policy returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ApplicationSecurityApi(configuration);

const params: v2.ApplicationSecurityApiUpdateApplicationSecurityWafPolicyRequest =
  {
    body: {
      data: {
        attributes: {
          description: "Policy applied to internal web applications.",
          isDefault: false,
          name: "Internal Network Policy",
          protectionPresets: ["attack-tools"],
          rules: [
            {
              blocking: false,
              enabled: true,
              id: "rasp-001-002",
            },
          ],
          scope: [
            {
              env: "prod",
              service: "billing-service",
            },
          ],
          version: 0,
        },
        type: "policy",
      },
    },
    policyId: "policy_id",
  };

apiInstance
  .updateApplicationSecurityWafPolicy(params)
  .then((data: v2.ApplicationSecurityPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

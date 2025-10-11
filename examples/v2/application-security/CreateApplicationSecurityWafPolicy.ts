/**
 * Create a WAF Policy returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ApplicationSecurityApi(configuration);

const params: v2.ApplicationSecurityApiCreateApplicationSecurityWafPolicyRequest =
  {
    body: {
      data: {
        attributes: {
          basedOn: "recommended",
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
  };

apiInstance
  .createApplicationSecurityWafPolicy(params)
  .then((data: v2.ApplicationSecurityPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

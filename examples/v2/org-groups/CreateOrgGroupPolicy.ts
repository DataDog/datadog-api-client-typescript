/**
 * Create an org group policy returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createOrgGroupPolicy"] = true;
const apiInstance = new v2.OrgGroupsApi(configuration);

const params: v2.OrgGroupsApiCreateOrgGroupPolicyRequest = {
  body: {
    data: {
      attributes: {
        content: {
          value: "UTC",
        },
        enforcementTier: "DEFAULT",
        policyName: "monitor_timezone",
        policyType: "org_config",
      },
      relationships: {
        orgGroup: {
          data: {
            id: "a1b2c3d4-e5f6-7890-abcd-ef0123456789",
            type: "org_groups",
          },
        },
      },
      type: "org_group_policies",
    },
  },
};

apiInstance
  .createOrgGroupPolicy(params)
  .then((data: v2.OrgGroupPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

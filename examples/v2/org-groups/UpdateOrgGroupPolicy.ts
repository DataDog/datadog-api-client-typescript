/**
 * Update an org group policy returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateOrgGroupPolicy"] = true;
const apiInstance = new v2.OrgGroupsApi(configuration);

const params: v2.OrgGroupsApiUpdateOrgGroupPolicyRequest = {
  body: {
    data: {
      attributes: {
        content: {
          value: "UTC",
        },
        enforcementTier: "DEFAULT",
      },
      id: "1a2b3c4d-5e6f-7890-abcd-ef0123456789",
      type: "org_group_policies",
    },
  },
  orgGroupPolicyId: "1a2b3c4d-5e6f-7890-abcd-ef0123456789",
};

apiInstance
  .updateOrgGroupPolicy(params)
  .then((data: v2.OrgGroupPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Create an org group policy override returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createOrgGroupPolicyOverride"] = true;
const apiInstance = new v2.OrgGroupsApi(configuration);

const params: v2.OrgGroupsApiCreateOrgGroupPolicyOverrideRequest = {
  body: {
    data: {
      attributes: {
        orgSite: "us1",
        orgUuid: "c3d4e5f6-a7b8-9012-cdef-012345678901",
      },
      relationships: {
        orgGroup: {
          data: {
            id: "a1b2c3d4-e5f6-7890-abcd-ef0123456789",
            type: "org_groups",
          },
        },
        orgGroupPolicy: {
          data: {
            id: "1a2b3c4d-5e6f-7890-abcd-ef0123456789",
            type: "org_group_policies",
          },
        },
      },
      type: "org_group_policy_overrides",
    },
  },
};

apiInstance
  .createOrgGroupPolicyOverride(params)
  .then((data: v2.OrgGroupPolicyOverrideResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

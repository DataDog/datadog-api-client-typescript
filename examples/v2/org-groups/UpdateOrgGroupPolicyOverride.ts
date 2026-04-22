/**
 * Update an org group policy override returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateOrgGroupPolicyOverride"] = true;
const apiInstance = new v2.OrgGroupsApi(configuration);

const params: v2.OrgGroupsApiUpdateOrgGroupPolicyOverrideRequest = {
  body: {
    data: {
      attributes: {
        orgSite: "datadoghq.com",
        orgUuid: "c3d4e5f6-a7b8-9012-cdef-012345678901",
      },
      id: "9f8e7d6c-5b4a-3210-fedc-ba0987654321",
      type: "org_group_policy_overrides",
    },
  },
  orgGroupPolicyOverrideId: "9f8e7d6c-5b4a-3210-fedc-ba0987654321",
};

apiInstance
  .updateOrgGroupPolicyOverride(params)
  .then((data: v2.OrgGroupPolicyOverrideResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

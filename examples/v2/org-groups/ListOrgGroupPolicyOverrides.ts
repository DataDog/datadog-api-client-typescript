/**
 * List org group policy overrides returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listOrgGroupPolicyOverrides"] = true;
const apiInstance = new v2.OrgGroupsApi(configuration);

const params: v2.OrgGroupsApiListOrgGroupPolicyOverridesRequest = {
  filterOrgGroupId: "a1b2c3d4-e5f6-7890-abcd-ef0123456789",
};

apiInstance
  .listOrgGroupPolicyOverrides(params)
  .then((data: v2.OrgGroupPolicyOverrideListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

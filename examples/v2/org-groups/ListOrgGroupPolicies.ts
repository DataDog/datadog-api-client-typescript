/**
 * List org group policies returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listOrgGroupPolicies"] = true;
const apiInstance = new v2.OrgGroupsApi(configuration);

const params: v2.OrgGroupsApiListOrgGroupPoliciesRequest = {
  filterOrgGroupId: "a1b2c3d4-e5f6-7890-abcd-ef0123456789",
};

apiInstance
  .listOrgGroupPolicies(params)
  .then((data: v2.OrgGroupPolicyListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

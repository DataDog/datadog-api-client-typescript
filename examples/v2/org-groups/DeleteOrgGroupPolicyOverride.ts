/**
 * Delete an org group policy override returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteOrgGroupPolicyOverride"] = true;
const apiInstance = new v2.OrgGroupsApi(configuration);

const params: v2.OrgGroupsApiDeleteOrgGroupPolicyOverrideRequest = {
  orgGroupPolicyOverrideId: "9f8e7d6c-5b4a-3210-fedc-ba0987654321",
};

apiInstance
  .deleteOrgGroupPolicyOverride(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Delete an org group policy returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteOrgGroupPolicy"] = true;
const apiInstance = new v2.OrgGroupsApi(configuration);

const params: v2.OrgGroupsApiDeleteOrgGroupPolicyRequest = {
  orgGroupPolicyId: "1a2b3c4d-5e6f-7890-abcd-ef0123456789",
};

apiInstance
  .deleteOrgGroupPolicy(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

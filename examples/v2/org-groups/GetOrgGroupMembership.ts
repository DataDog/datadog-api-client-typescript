/**
 * Get an org group membership returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getOrgGroupMembership"] = true;
const apiInstance = new v2.OrgGroupsApi(configuration);

const params: v2.OrgGroupsApiGetOrgGroupMembershipRequest = {
  orgGroupMembershipId: "f1e2d3c4-b5a6-7890-1234-567890abcdef",
};

apiInstance
  .getOrgGroupMembership(params)
  .then((data: v2.OrgGroupMembershipResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Update an org group membership returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateOrgGroupMembership"] = true;
const apiInstance = new v2.OrgGroupsApi(configuration);

const params: v2.OrgGroupsApiUpdateOrgGroupMembershipRequest = {
  body: {
    data: {
      id: "f1e2d3c4-b5a6-7890-1234-567890abcdef",
      relationships: {
        orgGroup: {
          data: {
            id: "a1b2c3d4-e5f6-7890-abcd-ef0123456789",
            type: "org_groups",
          },
        },
      },
      type: "org_group_memberships",
    },
  },
  orgGroupMembershipId: "f1e2d3c4-b5a6-7890-1234-567890abcdef",
};

apiInstance
  .updateOrgGroupMembership(params)
  .then((data: v2.OrgGroupMembershipResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

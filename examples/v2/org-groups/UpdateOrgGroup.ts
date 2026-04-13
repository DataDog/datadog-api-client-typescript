/**
 * Update an org group returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateOrgGroup"] = true;
const apiInstance = new v2.OrgGroupsApi(configuration);

const params: v2.OrgGroupsApiUpdateOrgGroupRequest = {
  body: {
    data: {
      attributes: {
        name: "Updated Org Group Name",
      },
      id: "a1b2c3d4-e5f6-7890-abcd-ef0123456789",
      type: "org_groups",
    },
  },
  orgGroupId: "a1b2c3d4-e5f6-7890-abcd-ef0123456789",
};

apiInstance
  .updateOrgGroup(params)
  .then((data: v2.OrgGroupResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Create an org group returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createOrgGroup"] = true;
const apiInstance = new v2.OrgGroupsApi(configuration);

const params: v2.OrgGroupsApiCreateOrgGroupRequest = {
  body: {
    data: {
      attributes: {
        name: "My Org Group",
      },
      type: "org_groups",
    },
  },
};

apiInstance
  .createOrgGroup(params)
  .then((data: v2.OrgGroupResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

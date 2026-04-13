/**
 * List org group memberships returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listOrgGroupMemberships"] = true;
const apiInstance = new v2.OrgGroupsApi(configuration);

apiInstance
  .listOrgGroupMemberships()
  .then((data: v2.OrgGroupMembershipListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

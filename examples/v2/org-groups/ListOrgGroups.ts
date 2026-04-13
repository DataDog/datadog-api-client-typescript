/**
 * List org groups returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listOrgGroups"] = true;
const apiInstance = new v2.OrgGroupsApi(configuration);

apiInstance
  .listOrgGroups()
  .then((data: v2.OrgGroupListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

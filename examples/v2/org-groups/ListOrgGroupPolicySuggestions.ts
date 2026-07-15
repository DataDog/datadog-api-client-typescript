/**
 * List org group policy suggestions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listOrgGroupPolicySuggestions"] = true;
const apiInstance = new v2.OrgGroupsApi(configuration);

const params: v2.OrgGroupsApiListOrgGroupPolicySuggestionsRequest = {
  filterOrgGroupId: "a1b2c3d4-e5f6-7890-abcd-ef0123456789",
};

apiInstance
  .listOrgGroupPolicySuggestions(params)
  .then((data: v2.OrgGroupPolicySuggestionListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

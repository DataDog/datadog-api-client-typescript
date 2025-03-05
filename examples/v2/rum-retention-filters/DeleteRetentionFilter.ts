/**
 * Delete a RUM retention filter returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumRetentionFiltersApi(configuration);

const params: v2.RumRetentionFiltersApiDeleteRetentionFilterRequest = {
  appId: "a33671aa-24fd-4dcd-ba4b-5bbdbafe7690",
  rfId: "fe34ee09-14cf-4976-9362-08044c0dea80",
};

apiInstance
  .deleteRetentionFilter(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

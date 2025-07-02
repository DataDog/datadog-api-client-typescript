/**
 * Search Synthetic tests with boolean query parameters
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiSearchTestsRequest = {
  includeFullConfig: true,
  searchSuites: true,
  facetsOnly: true,
  start: 10,
  count: 5,
  sort: "name,desc",
};

apiInstance
  .searchTests(params)
  .then((data: v1.SyntheticsListTestsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

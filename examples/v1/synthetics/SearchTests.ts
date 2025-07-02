/**
 * Search Synthetic tests returns "OK - Returns the list of Synthetic tests matching the search." response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

apiInstance
  .searchTests()
  .then((data: v1.SyntheticsListTestsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

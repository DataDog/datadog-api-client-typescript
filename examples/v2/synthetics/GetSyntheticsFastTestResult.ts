/**
 * Get a fast test result returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiGetSyntheticsFastTestResultRequest = {
  id: "abc12345-1234-1234-1234-abc123456789",
};

apiInstance
  .getSyntheticsFastTestResult(params)
  .then((data: v2.SyntheticsFastTestResult) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

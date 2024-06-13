/**
 * Delete a tag filtering entry returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

const params: v1.AWSIntegrationApiDeleteAWSTagFilterRequest = {
  body: {
    accountId: "FAKEAC0FAKEAC2FAKEAC",
    namespace: "api_gateway",
  },
};

apiInstance
  .deleteAWSTagFilter(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

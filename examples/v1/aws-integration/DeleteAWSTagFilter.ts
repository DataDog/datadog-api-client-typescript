/**
 * Delete a tag filtering entry returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v1.AWSIntegrationApi(configuration);

const params: v1.AWSIntegrationApiDeleteAWSTagFilterRequest = {
  body: {
    accountId: "FAKEAC0FAKEAC2FAKEAC",
    namespace: "elb",
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

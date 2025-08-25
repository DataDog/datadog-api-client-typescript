/**
 * Set an AWS tag filter returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

const params: v1.AWSIntegrationApiCreateAWSTagFilterRequest = {
  body: {
    accountId: "123456789012",
    namespace: "elb",
    tagFilterStr: "prod*",
  },
};

apiInstance
  .createAWSTagFilter(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

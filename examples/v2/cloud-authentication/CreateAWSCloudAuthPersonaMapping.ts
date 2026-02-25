/**
 * Create an AWS cloud authentication persona mapping returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createAWSCloudAuthPersonaMapping"] = true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

const params: v2.CloudAuthenticationApiCreateAWSCloudAuthPersonaMappingRequest =
  {
    body: {
      data: {
        attributes: {
          accountIdentifier: "test@test.com",
          arnPattern: "arn:aws:iam::123456789012:user/testuser",
        },
        type: "aws_cloud_auth_config",
      },
    },
  };

apiInstance
  .createAWSCloudAuthPersonaMapping(params)
  .then((data: v2.AWSCloudAuthPersonaMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

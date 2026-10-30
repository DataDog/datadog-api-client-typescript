/**
 * Create an AWS cloud authentication intake mapping returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createAWSCloudAuthIntakeMapping"] = true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

// there is an integrated AWS test account for WIF

const params: v2.CloudAuthenticationApiCreateAWSCloudAuthIntakeMappingRequest =
  {
    body: {
      data: {
        type: "aws_cloud_auth_intake_mapping",
        attributes: {
          arnPattern:
            "arn:aws:sts::123456789012:assumed-role/DatadogAgent-de20b7e944abfac3/*",
        },
      },
    },
  };

apiInstance
  .createAWSCloudAuthIntakeMapping(params)
  .then((data: v2.AWSCloudAuthIntakeMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

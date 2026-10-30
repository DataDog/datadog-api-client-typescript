/**
 * Get an AWS cloud authentication intake mapping returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getAWSCloudAuthIntakeMapping"] = true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

// there is a valid "aws_cloud_auth_intake_mapping" in the system
const AWS_CLOUD_AUTH_INTAKE_MAPPING_DATA_ID = process.env
  .AWS_CLOUD_AUTH_INTAKE_MAPPING_DATA_ID as string;

const params: v2.CloudAuthenticationApiGetAWSCloudAuthIntakeMappingRequest = {
  intakeMappingId: AWS_CLOUD_AUTH_INTAKE_MAPPING_DATA_ID,
};

apiInstance
  .getAWSCloudAuthIntakeMapping(params)
  .then((data: v2.AWSCloudAuthIntakeMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * AWS Integration - Delete account returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteAWSAccountv2"] = true;
const apiInstance = new v2.AWSIntegrationApi(configuration);

const params: v2.AWSIntegrationApiDeleteAWSAccountv2Request = {
  awsAccountConfigId: "aws_account_config_id",
};

apiInstance
  .deleteAWSAccountv2(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

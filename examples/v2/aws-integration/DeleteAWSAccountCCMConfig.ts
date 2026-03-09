/**
 * Delete AWS CCM config returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteAWSAccountCCMConfig"] = true;
const apiInstance = new v2.AWSIntegrationApi(configuration);

const params: v2.AWSIntegrationApiDeleteAWSAccountCCMConfigRequest = {
  awsAccountConfigId: "aws_account_config_id",
};

apiInstance
  .deleteAWSAccountCCMConfig(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

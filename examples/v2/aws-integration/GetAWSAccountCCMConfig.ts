/**
 * Get AWS CCM config returns "AWS CCM Config object" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getAWSAccountCCMConfig"] = true;
const apiInstance = new v2.AWSIntegrationApi(configuration);

const params: v2.AWSIntegrationApiGetAWSAccountCCMConfigRequest = {
  awsAccountConfigId: "aws_account_config_id",
};

apiInstance
  .getAWSAccountCCMConfig(params)
  .then((data: v2.AWSCcmConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

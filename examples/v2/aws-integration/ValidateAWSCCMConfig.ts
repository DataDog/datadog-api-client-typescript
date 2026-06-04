/**
 * Validate AWS CCM config returns "AWS CCM Config validation result" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.validateAWSCCMConfig"] = true;
const apiInstance = new v2.AWSIntegrationApi(configuration);

const params: v2.AWSIntegrationApiValidateAWSCCMConfigRequest = {
  body: {
    data: {
      attributes: {
        accountId: "123456789012",
        bucketName: "billing",
        bucketRegion: "us-east-1",
        reportName: "cost-and-usage-report",
        reportPrefix: "reports",
      },
      type: "ccm_config_validation",
    },
  },
};

apiInstance
  .validateAWSCCMConfig(params)
  .then((data: v2.AWSCcmConfigValidationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

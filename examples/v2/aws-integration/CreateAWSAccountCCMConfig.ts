/**
 * Create AWS CCM config returns "AWS CCM Config object" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createAWSAccountCCMConfig"] = true;
const apiInstance = new v2.AWSIntegrationApi(configuration);

const params: v2.AWSIntegrationApiCreateAWSAccountCCMConfigRequest = {
  body: {
    data: {
      attributes: {
        ccmConfig: {
          dataExportConfigs: [
            {
              bucketName: "billing",
              bucketRegion: "us-east-1",
              reportName: "cost-and-usage-report",
              reportPrefix: "reports",
              reportType: "CUR2.0",
            },
          ],
        },
      },
      type: "ccm_config",
    },
  },
  awsAccountConfigId: "aws_account_config_id",
};

apiInstance
  .createAWSAccountCCMConfig(params)
  .then((data: v2.AWSCcmConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

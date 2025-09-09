/**
 * Get an AWS integration by config ID returns "AWS Account object" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AWSIntegrationApi(configuration);

// there is a valid "aws_account_v2" in the system
const AWS_ACCOUNT_V2_DATA_ID = process.env.AWS_ACCOUNT_V2_DATA_ID as string;

const params: v2.AWSIntegrationApiGetAWSAccountRequest = {
  awsAccountConfigId: AWS_ACCOUNT_V2_DATA_ID,
};

apiInstance
  .getAWSAccount(params)
  .then((data: v2.AWSAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

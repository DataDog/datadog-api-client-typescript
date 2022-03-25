/**
 * Delete an AWS integration returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

const params: v1.AWSIntegrationApiDeleteAWSAccountRequest = {
  body: {
    accountId: "1234567",
    roleName: "DatadogAWSIntegrationRole",
  },
};

apiInstance
  .deleteAWSAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * AWS Integration - Get all accounts returns "AWS Account object" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listAWSAccountsv2"] = true;
const apiInstance = new v2.AWSIntegrationApi(configuration);

apiInstance
  .listAWSAccountsv2()
  .then((data: v2.AWSAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

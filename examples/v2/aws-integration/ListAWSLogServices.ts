/**
 * AWS Integration - List log services returns "AWS Logs Services List object" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listAWSLogServices"] = true;
const apiInstance = new v2.AWSIntegrationApi(configuration);

apiInstance
  .listAWSLogServices()
  .then((data: v2.AWSLogsServicesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

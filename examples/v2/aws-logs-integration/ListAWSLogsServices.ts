/**
 * Get list of AWS log ready services returns "AWS Logs Services List object" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listAWSLogsServices"] = true;
const apiInstance = new v2.AWSLogsIntegrationApi(configuration);

apiInstance
  .listAWSLogsServices()
  .then((data: v2.AWSLogsServicesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

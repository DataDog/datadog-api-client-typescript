/**
 * List all AWS Logs integrations returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.AWSLogsIntegrationApi(configuration);

apiInstance
  .listAWSLogsIntegrations()
  .then((data: v1.AWSLogsListResponse[]) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

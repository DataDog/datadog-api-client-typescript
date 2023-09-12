/**
 * List custom destinations returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listLogsCustomDestinations"] = true;
const apiInstance = new v2.LogsCustomDestinationsApi(configuration);

apiInstance
  .listLogsCustomDestinations()
  .then((data: v2.CustomDestinationListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

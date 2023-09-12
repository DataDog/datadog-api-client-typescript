/**
 * Get a custom destination returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getLogsCustomDestination"] = true;
const apiInstance = new v2.LogsCustomDestinationsApi(configuration);

// there is a valid "logs_custom_destination" in the system
const LOGS_CUSTOM_DESTINATION_DATA_ID = process.env
  .LOGS_CUSTOM_DESTINATION_DATA_ID as string;

const params: v2.LogsCustomDestinationsApiGetLogsCustomDestinationRequest = {
  customDestinationId: LOGS_CUSTOM_DESTINATION_DATA_ID,
};

apiInstance
  .getLogsCustomDestination(params)
  .then((data: v2.CustomDestinationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

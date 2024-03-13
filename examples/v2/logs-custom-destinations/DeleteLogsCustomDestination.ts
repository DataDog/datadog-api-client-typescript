/**
 * Delete a custom destination returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.LogsCustomDestinationsApi(configuration);

// there is a valid "custom_destination" in the system
const CUSTOM_DESTINATION_DATA_ID = process.env
  .CUSTOM_DESTINATION_DATA_ID as string;

const params: v2.LogsCustomDestinationsApiDeleteLogsCustomDestinationRequest = {
  customDestinationId: CUSTOM_DESTINATION_DATA_ID,
};

apiInstance
  .deleteLogsCustomDestination(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

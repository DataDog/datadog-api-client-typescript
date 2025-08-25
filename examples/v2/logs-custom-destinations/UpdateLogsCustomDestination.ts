/**
 * Update a custom destination returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.LogsCustomDestinationsApi(configuration);

// there is a valid "custom_destination" in the system
const CUSTOM_DESTINATION_DATA_ID = process.env
  .CUSTOM_DESTINATION_DATA_ID as string;

const params: v2.LogsCustomDestinationsApiUpdateLogsCustomDestinationRequest = {
  body: {
    data: {
      attributes: {
        name: "Nginx logs (Updated)",
        query: "source:nginx",
        enabled: false,
        forwardTags: false,
        forwardTagsRestrictionListType: "BLOCK_LIST",
      },
      type: "custom_destination",
      id: CUSTOM_DESTINATION_DATA_ID,
    },
  },
  customDestinationId: CUSTOM_DESTINATION_DATA_ID,
};

apiInstance
  .updateLogsCustomDestination(params)
  .then((data: v2.CustomDestinationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

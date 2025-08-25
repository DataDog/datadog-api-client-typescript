/**
 * Cancels a data deletion request returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.cancelDataDeletionRequest"] = true;
const apiInstance = new v2.DataDeletionApi(configuration);

// there is a valid "deletion_request" in the system
const DELETION_REQUEST_DATA_ID = process.env.DELETION_REQUEST_DATA_ID as string;

const params: v2.DataDeletionApiCancelDataDeletionRequestRequest = {
  id: DELETION_REQUEST_DATA_ID,
};

apiInstance
  .cancelDataDeletionRequest(params)
  .then((data: v2.CancelDataDeletionResponseBody) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

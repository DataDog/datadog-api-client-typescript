/**
 * List degradations with source ID filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

// there is a valid "degradation" in the system
const DEGRADATION_DATA_ID = process.env.DEGRADATION_DATA_ID as string;

const params: v2.StatusPagesApiListDegradationsRequest = {
  filterSourceId: DEGRADATION_DATA_ID,
};

apiInstance
  .listDegradations(params)
  .then((data: v2.DegradationArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

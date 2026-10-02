/**
 * Delete metric collection returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.ExperimentsApi(configuration);

// there is a valid "experiment_metric_collection" in the system
const EXPERIMENT_METRIC_COLLECTION_DATA_ID = process.env
  .EXPERIMENT_METRIC_COLLECTION_DATA_ID as string;

const params: v2.ExperimentsApiDeleteMetricCollectionRequest = {
  metricCollectionId: EXPERIMENT_METRIC_COLLECTION_DATA_ID,
};

apiInstance
  .deleteMetricCollection(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

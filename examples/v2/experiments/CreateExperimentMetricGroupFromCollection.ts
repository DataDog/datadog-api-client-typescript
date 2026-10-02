/**
 * Create experiment metric group from collection returns "Created" response
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

// there is a valid "experiment" in the system
const EXPERIMENT_DATA_ID = process.env.EXPERIMENT_DATA_ID as string;

// there is a valid "experiment_metric_collection_with_metric" in the system
const EXPERIMENT_METRIC_COLLECTION_WITH_METRIC_DATA_ID = process.env
  .EXPERIMENT_METRIC_COLLECTION_WITH_METRIC_DATA_ID as string;

const params: v2.ExperimentsApiCreateExperimentMetricGroupFromCollectionRequest =
  {
    experimentId: EXPERIMENT_DATA_ID,
    metricCollectionId: EXPERIMENT_METRIC_COLLECTION_WITH_METRIC_DATA_ID,
  };

apiInstance
  .createExperimentMetricGroupFromCollection(params)
  .then((data: v2.ExperimentsExperimentMetricGroupMutationV2) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

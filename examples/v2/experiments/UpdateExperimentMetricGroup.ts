/**
 * Update experiment metric group returns "OK" response
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

// there is a valid "experiment_metric_group" in the system
const EXPERIMENT_METRIC_GROUP_DATA_ID = process.env
  .EXPERIMENT_METRIC_GROUP_DATA_ID as string;

const params: v2.ExperimentsApiUpdateExperimentMetricGroupRequest = {
  body: {
    data: {
      type: "experiment-metric-groups",
      id: EXPERIMENT_METRIC_GROUP_DATA_ID,
      attributes: {
        name: "ex-14bb9543f523edde updated",
      },
    },
  },
  experimentId: EXPERIMENT_DATA_ID,
  metricGroupId: EXPERIMENT_METRIC_GROUP_DATA_ID,
};

apiInstance
  .updateExperimentMetricGroup(params)
  .then((data: v2.ExperimentsExperimentMetricGroupMutationV2) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

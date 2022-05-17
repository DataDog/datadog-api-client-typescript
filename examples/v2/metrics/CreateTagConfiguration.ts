/**
 * Create a tag configuration returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

<<<<<<< HEAD
const configuration = v2.createConfiguration();
||||||| parent of 74bf8c72d (Fix examples)
const configuration = v2.createConfiguration();
configuration.unstableOperations["createTagConfiguration"] = true;
=======
const configuration = client.createConfiguration();
configuration.unstableOperations["createTagConfiguration"] = true;
>>>>>>> 74bf8c72d (Fix examples)
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiCreateTagConfigurationRequest = {
  body: {
    data: {
      type: "manage_tags",
      id: "ExampleCreateatagconfigurationreturnsCreatedresponse",
      attributes: {
        tags: ["app", "datacenter"],
        metricType: "gauge",
      },
    },
  },
  metricName: "ExampleCreateatagconfigurationreturnsCreatedresponse",
};

apiInstance
  .createTagConfiguration(params)
  .then((data: v2.MetricTagConfigurationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

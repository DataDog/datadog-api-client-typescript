/**
 * Delete a tag configuration returns "No Content" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
configuration.unstableOperations["deleteTagConfiguration"] = true;
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiDeleteTagConfigurationRequest = {
  metricName: "ExampleDeleteatagconfigurationreturnsNoContentresponse",
};

apiInstance
  .deleteTagConfiguration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

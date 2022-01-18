/**
 * List tag configurations with a tag filter returns "Success" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
configuration.unstableOperations["listTagConfigurations"] = true;
const apiInstance = new v2.MetricsApi(configuration);

let params: v2.MetricsApiListTagConfigurationsRequest = {
  filterTags:
    "ExampleListtagconfigurationswithatagfilterreturnsSuccessresponse",
};

apiInstance
  .listTagConfigurations(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

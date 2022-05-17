/**
 * List tag configurations returns "Success" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

<<<<<<< HEAD
const configuration = v2.createConfiguration();
||||||| parent of 74bf8c72d (Fix examples)
const configuration = v2.createConfiguration();
configuration.unstableOperations["listTagConfigurations"] = true;
=======
const configuration = client.createConfiguration();
configuration.unstableOperations["listTagConfigurations"] = true;
>>>>>>> 74bf8c72d (Fix examples)
const apiInstance = new v2.MetricsApi(configuration);

apiInstance
  .listTagConfigurations()
  .then((data: v2.MetricsAndMetricTagConfigurationsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

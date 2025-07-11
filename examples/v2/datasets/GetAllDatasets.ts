/**
 * Get all datasets returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DatasetsApi(configuration);

apiInstance
  .getAllDatasets()
  .then((data: v2.DatasetResponseMulti) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

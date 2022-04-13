/**
 * Get indexes order returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsIndexesApi(configuration);

apiInstance
  .getLogsIndexOrder()
  .then((data: v1.LogsIndexesOrder) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

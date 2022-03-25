/**
 * Get an index returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsIndexesApi(configuration);

const params: v1.LogsIndexesApiGetLogsIndexRequest = {
  name: "name",
};

apiInstance
  .getLogsIndex(params)
  .then((data: v1.LogsIndex) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

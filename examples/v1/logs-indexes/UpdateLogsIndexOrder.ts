/**
 * Update indexes order returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsIndexesApi(configuration);

const params: v1.LogsIndexesApiUpdateLogsIndexOrderRequest = {
  body: {
    indexNames: ["main", "payments", "web"],
  },
};

apiInstance
  .updateLogsIndexOrder(params)
  .then((data: v1.LogsIndexesOrder) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Get all downtimes returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

const params: v1.DowntimesApiListDowntimesRequest = {
  withCreator: true,
};

apiInstance
  .listDowntimes(params)
  .then((data: v1.Downtime[]) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

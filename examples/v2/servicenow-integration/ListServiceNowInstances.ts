/**
 * List ServiceNow instances returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listServiceNowInstances"] = true;
const apiInstance = new v2.ServiceNowIntegrationApi(configuration);

apiInstance
  .listServiceNowInstances()
  .then((data: v2.ServiceNowInstancesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Get service list returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.APMApi(configuration);

const params: v2.APMApiGetServiceListRequest = {
  filterEnv: "filter[env]",
};

apiInstance
  .getServiceList(params)
  .then((data: v2.ServiceList) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

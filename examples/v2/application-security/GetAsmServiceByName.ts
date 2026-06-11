/**
 * Get Application Security details for a service returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getAsmServiceByName"] = true;
const apiInstance = new v2.ApplicationSecurityApi(configuration);

const params: v2.ApplicationSecurityApiGetAsmServiceByNameRequest = {
  serviceFilter: "service_filter",
};

apiInstance
  .getAsmServiceByName(params)
  .then((data: v2.ApplicationSecurityServicesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

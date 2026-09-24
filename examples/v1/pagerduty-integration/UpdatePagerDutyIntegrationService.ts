/**
 * Update a single service object returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v1.PagerDutyIntegrationApi(configuration);

const params: v1.PagerDutyIntegrationApiUpdatePagerDutyIntegrationServiceRequest =
  {
    body: {
      serviceKey: "",
    },
    serviceName: "service_name",
  };

apiInstance
  .updatePagerDutyIntegrationService(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

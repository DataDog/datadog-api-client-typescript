/**
 * Create a new service object returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.PagerDutyIntegrationApi(configuration);

const params: v1.PagerDutyIntegrationApiCreatePagerDutyIntegrationServiceRequest =
  {
    body: {
      serviceKey: "",
      serviceName: "",
    },
  };

apiInstance
  .createPagerDutyIntegrationService(params)
  .then((data: v1.PagerDutyServiceName) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

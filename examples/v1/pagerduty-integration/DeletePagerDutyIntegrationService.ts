/**
 * Delete a single service object returns "No Content" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.PagerDutyIntegrationApi(configuration);

const params: v1.PagerDutyIntegrationApiDeletePagerDutyIntegrationServiceRequest =
  {
    serviceName: "service_name",
  };

apiInstance
  .deletePagerDutyIntegrationService(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

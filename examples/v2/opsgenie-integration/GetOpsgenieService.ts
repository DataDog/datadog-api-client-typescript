/**
 * Get a single service object returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.OpsgenieIntegrationApi(configuration);

const params: v2.OpsgenieIntegrationApiGetOpsgenieServiceRequest = {
  integrationServiceId: "integration_service_id",
};

apiInstance
  .getOpsgenieService(params)
  .then((data: v2.OpsgenieServiceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

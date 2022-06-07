/**
 * Update a single service object returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.OpsgenieIntegrationApi(configuration);

const params: v2.OpsgenieIntegrationApiUpdateOpsgenieServiceRequest = {
  body: {
    data: {
      attributes: {
        customUrl: "https://example.com",
        name: "fake-opsgenie-service-name",
        opsgenieApiKey: "00000000-0000-0000-0000-000000000000",
        region: "us",
      },
      id: "596da4af-0563-4097-90ff-07230c3f9db3",
      type: "opsgenie-service",
    },
  },
  integrationServiceId: "integration_service_id",
};

apiInstance
  .updateOpsgenieService(params)
  .then((data: v2.OpsgenieServiceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

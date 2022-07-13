/**
 * Update a single service object returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OpsgenieIntegrationApi(configuration);

// there is a valid "opsgenie_service" in the system
const OPSGENIE_SERVICE_DATA_ID = process.env.OPSGENIE_SERVICE_DATA_ID as string;

const params: v2.OpsgenieIntegrationApiUpdateOpsgenieServiceRequest = {
  body: {
    data: {
      attributes: {
        name: "fake-opsgenie-service-name--updated",
        opsgenieApiKey: "00000000-0000-0000-0000-000000000000",
        region: "eu",
      },
      id: OPSGENIE_SERVICE_DATA_ID,
      type: "opsgenie-service",
    },
  },
  integrationServiceId: OPSGENIE_SERVICE_DATA_ID,
};

apiInstance
  .updateOpsgenieService(params)
  .then((data: v2.OpsgenieServiceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

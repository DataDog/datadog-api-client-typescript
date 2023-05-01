/**
 * Create a new service object returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OpsgenieIntegrationApi(configuration);

const params: v2.OpsgenieIntegrationApiCreateOpsgenieServiceRequest = {
  body: {
    data: {
      attributes: {
        name: "Example-Opsgenie-Integration",
        opsgenieApiKey: "00000000-0000-0000-0000-000000000000",
        region: "us",
      },
      type: "opsgenie-service",
    },
  },
};

apiInstance
  .createOpsgenieService(params)
  .then((data: v2.OpsgenieServiceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

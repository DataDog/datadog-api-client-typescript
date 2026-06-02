/**
 * Create a new Opsgenie account returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OpsgenieIntegrationApi(configuration);

const params: v2.OpsgenieIntegrationApiCreateOpsgenieAccountRequest = {
  body: {
    data: {
      attributes: {
        apiKey: "00000000-0000-0000-0000-000000000000",
        region: "us",
      },
      type: "opsgenie-account",
    },
  },
};

apiInstance
  .createOpsgenieAccount(params)
  .then((data: v2.OpsgenieAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

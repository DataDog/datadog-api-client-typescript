/**
 * Update an Opsgenie account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OpsgenieIntegrationApi(configuration);

const params: v2.OpsgenieIntegrationApiUpdateOpsgenieAccountRequest = {
  body: {
    data: {
      attributes: {
        apiKey: "00000000-0000-0000-0000-000000000000",
        region: "us",
      },
      id: "596da4af-0563-4097-90ff-07230c3f9db3",
      type: "opsgenie-account",
    },
  },
  accountId: "account_id",
};

apiInstance
  .updateOpsgenieAccount(params)
  .then((data: v2.OpsgenieAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

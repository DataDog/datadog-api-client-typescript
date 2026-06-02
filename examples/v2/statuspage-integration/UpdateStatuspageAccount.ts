/**
 * Update the Statuspage account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatuspageIntegrationApi(configuration);

const params: v2.StatuspageIntegrationApiUpdateStatuspageAccountRequest = {
  body: {
    data: {
      attributes: {
        apiKey: "00000000-0000-0000-0000-000000000000",
      },
      type: "statuspage-account",
    },
  },
};

apiInstance
  .updateStatuspageAccount(params)
  .then((data: v2.StatuspageAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

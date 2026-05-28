/**
 * Get the Statuspage account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatuspageIntegrationApi(configuration);

apiInstance
  .getStatuspageAccount()
  .then((data: v2.StatuspageAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

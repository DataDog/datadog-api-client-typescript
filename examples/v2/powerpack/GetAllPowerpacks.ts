/**
 * Get all powerpacks returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.PowerpackApi(configuration);

apiInstance
  .getAllPowerpacks()
  .then((data: v2.GetAllPowerpacksResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

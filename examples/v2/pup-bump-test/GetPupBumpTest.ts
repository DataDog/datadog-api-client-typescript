/**
 * Get pup bump test resource returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getPupBumpTest"] = true;
const apiInstance = new v2.PupBumpTestApi(configuration);

apiInstance
  .getPupBumpTest()
  .then((data: v2.PupBumpTestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

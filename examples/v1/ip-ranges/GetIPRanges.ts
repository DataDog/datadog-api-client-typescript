/**
 * List IP Ranges returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.IPRangesApi(configuration);

apiInstance
  .getIPRanges()
  .then((data: v1.IPRanges) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

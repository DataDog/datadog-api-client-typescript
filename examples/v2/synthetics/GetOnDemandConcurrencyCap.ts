/**
 * Get the on-demand concurrency cap returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

apiInstance
  .getOnDemandConcurrencyCap()
  .then((data: v2.OnDemandConcurrencyCapResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Get HAMR organization connection returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getHamrOrgConnection"] = true;
const apiInstance = new v2.HighAvailabilityMultiRegionApi(configuration);

apiInstance
  .getHamrOrgConnection()
  .then((data: v2.HamrOrgConnectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

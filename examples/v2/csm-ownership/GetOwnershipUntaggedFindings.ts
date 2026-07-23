/**
 * Count untagged findings by ownership confidence returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getOwnershipUntaggedFindings"] = true;
const apiInstance = new v2.CSMOwnershipApi(configuration);

apiInstance
  .getOwnershipUntaggedFindings()
  .then((data: v2.OwnershipUntaggedFindingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

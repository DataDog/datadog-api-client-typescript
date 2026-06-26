/**
 * List governance limits returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listGovernanceLimits"] = true;
const apiInstance = new v2.GovernanceSettingsApi(configuration);

apiInstance
  .listGovernanceLimits()
  .then((data: v2.GovernanceLimitsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

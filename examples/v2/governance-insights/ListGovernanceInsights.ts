/**
 * List governance insights returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listGovernanceInsights"] = true;
const apiInstance = new v2.GovernanceInsightsApi(configuration);

apiInstance
  .listGovernanceInsights()
  .then((data: v2.GovernanceInsightsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

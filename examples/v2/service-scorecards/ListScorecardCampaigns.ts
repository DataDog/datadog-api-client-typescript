/**
 * List all campaigns returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listScorecardCampaigns"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

apiInstance
  .listScorecardCampaigns()
  .then((data: v2.ListCampaignsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Delete a campaign returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteScorecardCampaign"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

const params: v2.ServiceScorecardsApiDeleteScorecardCampaignRequest = {
  campaignId: "c10ODp0VCrrIpXmz",
};

apiInstance
  .deleteScorecardCampaign(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

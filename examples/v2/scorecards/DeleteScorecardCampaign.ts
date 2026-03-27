/**
 * Delete a campaign returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ScorecardsApi(configuration);

const params: v2.ScorecardsApiDeleteScorecardCampaignRequest = {
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

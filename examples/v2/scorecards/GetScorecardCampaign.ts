/**
 * Get a campaign returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ScorecardsApi(configuration);

const params: v2.ScorecardsApiGetScorecardCampaignRequest = {
  campaignId: "c10ODp0VCrrIpXmz",
};

apiInstance
  .getScorecardCampaign(params)
  .then((data: v2.CampaignResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

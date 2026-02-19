/**
 * Get a campaign returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getScorecardCampaign"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

const params: v2.ServiceScorecardsApiGetScorecardCampaignRequest = {
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

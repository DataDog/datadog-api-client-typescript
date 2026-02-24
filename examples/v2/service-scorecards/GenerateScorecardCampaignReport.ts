/**
 * Generate campaign report returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.generateScorecardCampaignReport"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

const params: v2.ServiceScorecardsApiGenerateScorecardCampaignReportRequest = {
  body: {
    data: {
      attributes: {
        slack: {
          channelId: "C024BDQ4N",
          channelName: "service-scorecards",
          workspaceId: "T024BDQ4N",
          workspaceName: "datadog-workspace",
        },
      },
      type: "campaign-report",
    },
  },
  campaignId: "c10ODp0VCrrIpXmz",
};

apiInstance
  .generateScorecardCampaignReport(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

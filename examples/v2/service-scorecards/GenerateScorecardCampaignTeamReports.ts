/**
 * Generate team-specific campaign reports returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.generateScorecardCampaignTeamReports"] =
  true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

const params: v2.ServiceScorecardsApiGenerateScorecardCampaignTeamReportsRequest =
  {
    body: {
      data: {
        attributes: {
          entityOwners: [
            {
              slack: {
                channelId: "C024BDQ4N",
                workspaceId: "T024BDQ4N",
              },
              teamId: "550e8400-e29b-41d4-a716-446655440000",
            },
          ],
        },
        type: "campaign-team-report",
      },
    },
    campaignId: "c10ODp0VCrrIpXmz",
  };

apiInstance
  .generateScorecardCampaignTeamReports(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

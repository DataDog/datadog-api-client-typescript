/**
 * Update a campaign returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateScorecardCampaign"] = true;
const apiInstance = new v2.ServiceScorecardsApi(configuration);

const params: v2.ServiceScorecardsApiUpdateScorecardCampaignRequest = {
  body: {
    data: {
      attributes: {
        description: "Campaign to improve security posture for Q1 2024.",
        dueDate: new Date(2024, 3, 31, 23, 59, 59, 0),
        entityScope: "kind:service AND team:platform",
        guidance: "Please ensure all services pass the security requirements.",
        key: "q1-security-2024",
        name: "Q1 Security Campaign",
        ownerId: "550e8400-e29b-41d4-a716-446655440000",
        ruleIds: ["q8MQxk8TCqrHnWkx", "r9NRyl9UDrsIoXly"],
        startDate: new Date(2024, 1, 1, 0, 0, 0, 0),
        status: "in_progress",
      },
      type: "campaign",
    },
  },
  campaignId: "c10ODp0VCrrIpXmz",
};

apiInstance
  .updateScorecardCampaign(params)
  .then((data: v2.CampaignResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

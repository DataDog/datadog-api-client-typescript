/**
 * Set On-Call team routing rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

// there is a valid "dd_team" in the system
const DD_TEAM_DATA_ID = process.env.DD_TEAM_DATA_ID as string;

// there is a valid "escalation_policy" in the system
const ESCALATION_POLICY_DATA_ID = process.env
  .ESCALATION_POLICY_DATA_ID as string;

const params: v2.OnCallApiSetOnCallTeamRoutingRulesRequest = {
  body: {
    data: {
      attributes: {
        rules: [
          {
            actions: [
              {
                channel: "channel",
                type: "send_slack_message",
                workspace: "workspace",
              },
            ],
            query: "tags.service:test",
            timeRestriction: {
              timeZone: "Europe/Paris",
              restrictions: [
                {
                  endDay: "monday",
                  endTime: "17:00:00",
                  startDay: "monday",
                  startTime: "09:00:00",
                },
                {
                  endDay: "tuesday",
                  endTime: "17:00:00",
                  startDay: "tuesday",
                  startTime: "09:00:00",
                },
              ],
            },
          },
          {
            policyId: ESCALATION_POLICY_DATA_ID,
            query: "",
            urgency: "low",
          },
        ],
      },
      id: DD_TEAM_DATA_ID,
      type: "team_routing_rules",
    },
  },
  teamId: DD_TEAM_DATA_ID,
  include: "rules",
};

apiInstance
  .setOnCallTeamRoutingRules(params)
  .then((data: v2.TeamRoutingRules) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

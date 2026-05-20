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
                type: "escalation_policy",
                policyId: ESCALATION_POLICY_DATA_ID,
                urgency: "low",
              },
            ],
            query: "tags.service:time_restrictions",
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
            actions: [
              {
                type: "escalation_policy",
                policyId: ESCALATION_POLICY_DATA_ID,
                urgency: "low",
                ackTimeoutMinutes: 30,
                supportHours: {
                  timeZone: "Europe/Paris",
                  restrictions: [
                    {
                      endDay: "wednesday",
                      endTime: "17:00:00",
                      startDay: "wednesday",
                      startTime: "09:00:00",
                    },
                    {
                      endDay: "thursday",
                      endTime: "17:00:00",
                      startDay: "thursday",
                      startTime: "09:00:00",
                    },
                  ],
                },
              },
            ],
            query: "tags.service:support_hours_and_acknowledgment_timeout",
          },
          {
            policyId: ESCALATION_POLICY_DATA_ID,
            query: "tags.service:legacy_policy_definition",
            urgency: "low",
          },
          {
            actions: [
              {
                type: "escalation_policy",
                policyId: ESCALATION_POLICY_DATA_ID,
                urgency: "low",
              },
            ],
            query: "",
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

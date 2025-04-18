/**
 * Create on-call escalation policy returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

// there is a valid "schedule" in the system
const SCHEDULE_DATA_ID = process.env.SCHEDULE_DATA_ID as string;

// there is a valid "dd_team" in the system
const DD_TEAM_DATA_ID = process.env.DD_TEAM_DATA_ID as string;

const params: v2.OnCallApiCreateOnCallEscalationPolicyRequest = {
  body: {
    data: {
      attributes: {
        description: "Escalation Policy 1 description",
        name: "Example-On-Call",
        resolvePageOnPolicyEnd: true,
        retries: 2,
        steps: [
          {
            assignment: "default",
            escalateAfterSeconds: 3600,
            targets: [
              {
                id: USER_DATA_ID,
                type: "users",
              },
              {
                id: SCHEDULE_DATA_ID,
                type: "schedules",
              },
              {
                id: DD_TEAM_DATA_ID,
                type: "teams",
              },
            ],
          },
        ],
      },
      relationships: {
        teams: {
          data: [
            {
              id: DD_TEAM_DATA_ID,
              type: "teams",
            },
          ],
        },
      },
      type: "policies",
    },
  },
};

apiInstance
  .createOnCallEscalationPolicy(params)
  .then((data: v2.EscalationPolicy) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

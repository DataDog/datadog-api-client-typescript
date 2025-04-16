/**
 * Update on call escalation policy returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

// there is a valid "escalation_policy" in the system
const ESCALATION_POLICY_DATA_ID = process.env
  .ESCALATION_POLICY_DATA_ID as string;
const ESCALATION_POLICY_DATA_RELATIONSHIPS_STEPS_DATA_0_ID = process.env
  .ESCALATION_POLICY_DATA_RELATIONSHIPS_STEPS_DATA_0_ID as string;

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

// there is a valid "dd_team" in the system
const DD_TEAM_DATA_ID = process.env.DD_TEAM_DATA_ID as string;

const params: v2.OnCallApiUpdateOnCallEscalationPolicyRequest = {
  body: {
    data: {
      attributes: {
        description: "Example-On-Call",
        name: "Example-On-Call-updated",
        resolvePageOnPolicyEnd: false,
        retries: 0,
        steps: [
          {
            assignment: "default",
            escalateAfterSeconds: 3600,
            id: ESCALATION_POLICY_DATA_RELATIONSHIPS_STEPS_DATA_0_ID,
            targets: [
              {
                id: USER_DATA_ID,
                type: "users",
              },
            ],
          },
        ],
      },
      id: ESCALATION_POLICY_DATA_ID,
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
  policyId: ESCALATION_POLICY_DATA_ID,
};

apiInstance
  .updateOnCallEscalationPolicy(params)
  .then((data: v2.EscalationPolicy) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

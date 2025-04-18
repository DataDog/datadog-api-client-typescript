/**
 * Get on-call escalation policy returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

// there is a valid "escalation_policy" in the system
const ESCALATION_POLICY_DATA_ID = process.env
  .ESCALATION_POLICY_DATA_ID as string;

const params: v2.OnCallApiGetOnCallEscalationPolicyRequest = {
  policyId: ESCALATION_POLICY_DATA_ID,
};

apiInstance
  .getOnCallEscalationPolicy(params)
  .then((data: v2.EscalationPolicy) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

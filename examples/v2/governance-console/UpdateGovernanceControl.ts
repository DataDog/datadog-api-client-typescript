/**
 * Update a control returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateGovernanceControl"] = true;
const apiInstance = new v2.GovernanceConsoleApi(configuration);

const params: v2.GovernanceConsoleApiUpdateGovernanceControlRequest = {
  body: {
    data: {
      attributes: {
        mitigationType: "revoke_api_key",
      },
      type: "governance_control",
    },
  },
  detectionType: "detection_type",
};

apiInstance
  .updateGovernanceControl(params)
  .then((data: v2.GovernanceControlResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Override the severity of security findings returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateFindingsSeverity"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiUpdateFindingsSeverityRequest = {
  body: {
    data: {
      attributes: {
        severity: {
          action: "set",
          description: "Database contains sensitive data.",
          value: "high",
        },
      },
      id: "00000000-0000-0000-0000-000000000001",
      relationships: {
        findings: {
          data: [
            {
              id: "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==",
              type: "findings",
            },
          ],
        },
      },
      type: "severity_override",
    },
  },
};

apiInstance
  .updateFindingsSeverity(params)
  .then((data: v2.SeverityOverrideResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

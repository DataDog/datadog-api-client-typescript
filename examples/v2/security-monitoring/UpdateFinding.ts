/**
 * Mute or unmute a finding returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateFinding"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiUpdateFindingRequest = {
  body: {
    data: {
      attributes: {
        mute: {
          description: "To be resolved later",
          expirationDate: 1778721573794,
          muted: true,
          reason: "ACCEPTED_RISK",
        },
      },
      id: "AQAAAYbb1i0gijTHEQAAAABBWWJiMWkwZ0FBQ2FuNzBJVGZXZ3B3QUE",
      type: "finding",
    },
  },
  findingId: "AQAAAYbb1i0gijTHEQAAAABBWWJiMWkwZ0FBQ2FuNzBJVGZXZ3B3QUE",
};

apiInstance
  .updateFinding(params)
  .then((data: v2.MuteFindingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

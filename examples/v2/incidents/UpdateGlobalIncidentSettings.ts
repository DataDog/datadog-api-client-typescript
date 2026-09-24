/**
 * Update global incident settings returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateGlobalIncidentSettings"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiUpdateGlobalIncidentSettingsRequest = {
  body: {
    data: {
      attributes: {
        analyticsDashboardId: "abc-123-def",
      },
      type: "incidents_global_settings",
    },
  },
};

apiInstance
  .updateGlobalIncidentSettings(params)
  .then((data: v2.GlobalIncidentSettingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

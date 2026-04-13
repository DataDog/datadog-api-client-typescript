/**
 * Update a secure embed for a dashboard returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateDashboardSecureEmbed"] = true;
const apiInstance = new v2.DashboardSecureEmbedApi(configuration);

const params: v2.DashboardSecureEmbedApiUpdateDashboardSecureEmbedRequest = {
  body: {
    data: {
      attributes: {
        globalTime: {
          liveSpan: "1h",
        },
        globalTimeSelectable: true,
        selectableTemplateVars: [
          {
            defaultValues: ["1"],
            name: "org_id",
            prefix: "org_id",
            visibleTags: ["1"],
          },
        ],
        status: "active",
        title: "Q1 Metrics Dashboard (Updated)",
        viewingPreferences: {
          highDensity: false,
          theme: "system",
        },
      },
      type: "secure_embed_update_request",
    },
  },
  dashboardId: "dashboard_id",
  token: "token",
};

apiInstance
  .updateDashboardSecureEmbed(params)
  .then((data: v2.SecureEmbedUpdateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

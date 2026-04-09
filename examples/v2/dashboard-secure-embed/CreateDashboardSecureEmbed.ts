/**
 * Create a secure embed for a dashboard returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createDashboardSecureEmbed"] = true;
const apiInstance = new v2.DashboardSecureEmbedApi(configuration);

const params: v2.DashboardSecureEmbedApiCreateDashboardSecureEmbedRequest = {
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
        title: "Q1 Metrics Dashboard",
        viewingPreferences: {
          highDensity: false,
          theme: "system",
        },
      },
      type: "secure_embed_request",
    },
  },
  dashboardId: "dashboard_id",
};

apiInstance
  .createDashboardSecureEmbed(params)
  .then((data: v2.SecureEmbedCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

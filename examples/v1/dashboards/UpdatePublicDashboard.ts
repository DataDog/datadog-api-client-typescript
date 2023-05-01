/**
 * Update a shared dashboard returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

// there is a valid "shared_dashboard" in the system
const SHARED_DASHBOARD_TOKEN = process.env.SHARED_DASHBOARD_TOKEN as string;

const params: v1.DashboardsApiUpdatePublicDashboardRequest = {
  body: {
    globalTime: {
      liveSpan: "15m",
    },
    shareList: [],
    shareType: "open",
  },
  token: SHARED_DASHBOARD_TOKEN,
};

apiInstance
  .updatePublicDashboard(params)
  .then((data: v1.SharedDashboard) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

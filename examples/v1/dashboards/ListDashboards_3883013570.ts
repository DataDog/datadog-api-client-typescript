/**
 * Get all dashboards with version "2027-01-01" returns "OK" response
 */

import { client, v1_20270101 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v1_20270101.DashboardsApi(configuration);

const params: v1_20270101.DashboardsApiListDashboardsRequest = {
  filterShared: false,
};

apiInstance
  .listDashboards(params)
  .then((data: v1_20270101.DashboardSummary) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

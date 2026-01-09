/**
 * Create status page returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.StatusPagesApi(configuration);

const params: v2.StatusPagesApiCreateStatusPageRequest = {
  body: {
    data: {
      attributes: {
        name: "[DD Integration Tests] 5e2fd69be33e79aa",
        domainPrefix: "dd-integrations-tests-5e2fd69be33e79aa",
        enabled: true,
        type: "internal",
        visualizationType: "bars_and_uptime_percentage",
      },
      type: "status_pages",
    },
  },
};

apiInstance
  .createStatusPage(params)
  .then((data: v2.StatusPage) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

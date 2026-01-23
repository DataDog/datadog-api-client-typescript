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
        name: "A Status Page",
        domainPrefix: "5e2fd69be33e79aa",
        components: [
          {
            name: "Login",
            type: "component",
            position: 0,
          },
          {
            name: "Settings",
            type: "component",
            position: 1,
          },
        ],
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

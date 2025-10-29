/**
 * Get rum funnel returns "Successful response with funnel analysis data" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getRumFunnel"] = true;
const apiInstance = new v2.FunnelApi(configuration);

const params: v2.FunnelApiGetRumFunnelRequest = {
  body: {
    data: {
      attributes: {
        dataSource: "rum",
        enforcedExecutionType: "",
        requestId: "",
        search: {
          crossSessionFilter: "",
          queryString: "@type:view",
          steps: [
            {
              facet: "@view.name",
              stepFilter: "",
              value: "/apm/home",
            },
            {
              facet: "@view.name",
              stepFilter: "",
              value: "/apm/traces",
            },
          ],
          subqueryId: "",
        },
        time: {
          from: 1756425600000,
          to: 1756857600000,
        },
      },
      id: "funnel_request",
      type: "funnel_request",
    },
  },
};

apiInstance
  .getRumFunnel(params)
  .then((data: v2.FunnelResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

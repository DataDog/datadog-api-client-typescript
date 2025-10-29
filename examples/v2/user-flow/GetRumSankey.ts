/**
 * Get rum sankey returns "Successful response with Sankey diagram data" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getRumSankey"] = true;
const apiInstance = new v2.UserFlowApi(configuration);

const params: v2.UserFlowApiGetRumSankeyRequest = {
  body: {
    data: {
      attributes: {
        dataSource: "",
        definition: {
          entriesPerStep: 10,
          numberOfSteps: 5,
          source: "@view.name",
          target: "@view.name",
        },
        enforcedExecutionType: "",
        requestId: "",
        sampling: {
          enabled: true,
        },
        search: {
          audienceFilters: {},
          query: "@type:view @application.id:*",
          subqueryId: "",
        },
        time: {
          from: 1756425600000,
          to: 1756857600000,
        },
      },
      id: "sankey_request",
      type: "sankey_request",
    },
  },
};

apiInstance
  .getRumSankey(params)
  .then((data: v2.SankeyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

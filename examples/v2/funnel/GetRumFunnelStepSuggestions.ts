/**
 * Get rum funnel step suggestions returns "Successful response with funnel step suggestions" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getRumFunnelStepSuggestions"] = true;
const apiInstance = new v2.FunnelApi(configuration);

const params: v2.FunnelApiGetRumFunnelStepSuggestionsRequest = {
  body: {
    data: {
      attributes: {
        dataSource: "",
        search: {
          crossSessionFilter: "",
          queryString: "@type:view",
          steps: [
            {
              facet: "@view.name",
              stepFilter: "",
              value: "/apm/home",
            },
          ],
          subqueryId: "",
        },
        termSearch: {
          query: "apm",
        },
        time: {
          from: 1756425600000,
          to: 1756857600000,
        },
      },
      id: "funnel_suggestion_request",
      type: "funnel_suggestion_request",
    },
  },
};

apiInstance
  .getRumFunnelStepSuggestions(params)
  .then((data: v2.FunnelSuggestionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

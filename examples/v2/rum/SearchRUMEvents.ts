/**
 * Search RUM events returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RUMApi(configuration);

let params: v2.RUMApiSearchRUMEventsRequest = {
  body: {
    filter: {
      from: "now-15m",
      query: "@type:session AND @session.type:user",
      to: "now",
    },
    options: {
      timeOffset: 0,
      timezone: "GMT",
    },
    page: {
      limit: 25,
    },
    sort: "timestamp",
  },
};

apiInstance
  .searchRUMEvents(params)
  .then((data: v2.RUMEventsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

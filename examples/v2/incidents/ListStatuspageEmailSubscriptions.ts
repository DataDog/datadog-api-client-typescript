/**
 * List status page email subscriptions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listStatuspageEmailSubscriptions"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiListStatuspageEmailSubscriptionsRequest = {
  pageId: "page_id",
};

apiInstance
  .listStatuspageEmailSubscriptions(params)
  .then((data: v2.IncidentStatuspageSubscriptionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

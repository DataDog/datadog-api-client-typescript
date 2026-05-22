/**
 * Create a status page email subscription returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createStatuspageEmailSubscription"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateStatuspageEmailSubscriptionRequest = {
  body: {
    data: {
      attributes: {
        email: "user@example.com",
      },
      type: "statuspage_email_subscription",
    },
  },
  pageId: "page_id",
};

apiInstance
  .createStatuspageEmailSubscription(params)
  .then((data: v2.IncidentStatuspageSubscriptionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

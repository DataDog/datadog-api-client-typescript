/**
 * Send server-side events returns "Request accepted for processing (always 202 empty JSON)." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiSubmitProductAnalyticsEventRequest = {
  body: {
    account: {
      id: "account-67890",
    },
    application: {
      id: "123abcde-123a-123b-1234-123456789abc",
    },
    event: {
      name: "payment.processed",
    },
    session: {
      id: "session-abcdef",
    },
    type: "server",
    usr: {
      id: "user-12345",
    },
  },
};

apiInstance
  .submitProductAnalyticsEvent(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

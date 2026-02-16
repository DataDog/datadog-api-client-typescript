/**
 * Import email subscriptions returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.importEmailSubscriptions"] = true;
const apiInstance = new v2.StatusPagesApi(configuration);

const params: v2.StatusPagesApiImportEmailSubscriptionsRequest = {
  body: {
    data: [
      {
        attributes: {
          emailAddress: "test@example.com",
        },
        relationships: {
          subscribedComponents: {
            data: [
              {
                id: "00000000-0000-0000-0000-000000000000",
                type: "status_page_components",
              },
            ],
          },
        },
        type: "email_subscriptions",
      },
    ],
  },
  pageId: "ed50804f-f823-4d2c-ba56-c998cbd0ae0a",
};

apiInstance
  .importEmailSubscriptions(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

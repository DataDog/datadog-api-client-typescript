/**
 * Post a change event returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.EventsApi(configuration);

const params: v2.EventsApiCreateEventRequest = {
  body: {
    attributes: {
      attributes: {
        author: {
          name: "user",
          type: "user",
        },
        changeMetadata: {
          resource_link: "/feature/fallback_payments_test",
          user: "{'email': 'dd_user_email', 'name': 'dd_user'}",
        },
        changedResource: {
          name: "fallback_payments_test",
          type: "feature_flag",
        },
        impactedResources: [
          {
            name: "payments_api",
            type: "service",
          },
        ],
        newValue: {
          enabled: "True",
          percentage: "50%",
          rule: "{'datacenter': 'us1.prod'}",
        },
        prevValue: {
          enabled: "True",
          percentage: "10%",
          rule: "{'datacenter': 'us1.prod'}",
        },
      },
      category: "change",
      message: "payment_processed feature flag has been enabled",
      tags: ["environment:test"],
      title: "payment_processed feature flag updated",
    },
    type: "event",
  },
};

apiInstance
  .createEvent(params)
  .then((data: v2.ChangeEventCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

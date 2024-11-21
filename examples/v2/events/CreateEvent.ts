/**
 * Post an event returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.EventsApi(configuration);

const params: v2.EventsApiCreateEventRequest = {
  body: {
    data: {
      attributes: {
        attributes: {
          author: {
            name: "datadog@datadog.com",
            type: "user",
          },
          changeMetadata: {
            dd: "{'team': 'datadog_team', 'user_email': 'datadog@datadog.com', 'user_id': 'datadog_user_id', 'user_name': 'datadog_username'}",
            resource_link: "datadog.com/feature/fallback_payments_test",
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
            rule: "{'datacenter': 'devcycle.us1.prod'}",
          },
          prevValue: {
            enabled: "True",
            percentage: "10%",
            rule: "{'datacenter': 'devcycle.us1.prod'}",
          },
        },
        category: "change",
        message: "payment_processed feature flag has been enabled",
        tags: ["environment:test"],
        title: "payment_processed feature flag updated",
      },
      type: "event",
    },
  },
};

apiInstance
  .createEvent(params)
  .then((data: v2.EventCreateResponsePayload) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

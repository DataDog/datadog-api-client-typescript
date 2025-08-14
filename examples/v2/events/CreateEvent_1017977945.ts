/**
 * Post an event with metric_configuration resource type returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.EventsApi(configuration);

const params: v2.EventsApiCreateEventRequest = {
  body: {
    data: {
      attributes: {
        aggregationKey: "aggregation_key_123",
        attributes: {
          author: {
            name: "example@datadog.com",
            type: "user",
          },
          changeMetadata: {
            dd: "{'team': 'datadog_team', 'user_email': 'datadog@datadog.com', 'user_id': 'datadog_user_id', 'user_name': 'datadog_username'}",
            resource_link: "datadog.com/metric/config_test",
          },
          changedResource: {
            name: "config_test",
            type: "metric_configuration",
          },
          impactedResources: [
            {
              name: "system.cpu.usage",
              type: "service",
            },
          ],
          newValue: {
            aggregation: "avg",
            tags: "['env:prod', 'service:web']",
            unit: "percent",
          },
          prevValue: {
            aggregation: "sum",
            tags: "['env:prod']",
            unit: "percent",
          },
        },
        category: "change",
        integrationId: "custom-events",
        message: "metric configuration has been updated",
        tags: ["env:api_client_test"],
        title: "metric configuration updated",
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

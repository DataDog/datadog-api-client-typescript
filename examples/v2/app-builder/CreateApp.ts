/**
 * Create App returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createApp"] = true;
const apiInstance = new v2.AppBuilderApi(configuration);

const params: v2.AppBuilderApiCreateAppRequest = {
  body: {
    data: {
      attributes: {
        components: [
          {
            events: [],
            name: "grid0",
            properties: {
              children: [
                {
                  events: [],
                  name: "gridCell0",
                  properties: {
                    children: [
                      {
                        events: [],
                        name: "calloutValue0",
                        properties: {
                          isVisible: true,
                        },
                        type: "calloutValue",
                      },
                    ],
                    isVisible: "true",
                  },
                  type: "gridCell",
                },
              ],
            },
            type: "grid",
          },
        ],
        description: "This is a simple example app",
        embeddedQueries: [],
        name: "Example App",
        rootInstanceName: "grid0",
      },
      type: "appDefinitions",
    },
  },
};

apiInstance
  .createApp(params)
  .then((data: v2.CreateAppResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

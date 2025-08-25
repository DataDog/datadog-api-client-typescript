/**
 * Create a new powerpack returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.PowerpackApi(configuration);

const params: v2.PowerpackApiCreatePowerpackRequest = {
  body: {
    data: {
      attributes: {
        description: "Sample powerpack",
        groupWidget: {
          definition: {
            layoutType: "ordered",
            showTitle: true,
            title: "Sample Powerpack",
            type: "group",
            widgets: [
              {
                definition: {
                  content: "test",
                  type: "note",
                },
              },
            ],
          },
          layout: {
            height: 3,
            width: 12,
            x: 0,
            y: 0,
          },
          liveSpan: "1h",
        },
        name: "Example-Powerpack",
        tags: ["tag:sample"],
        templateVariables: [
          {
            defaults: ["*"],
            name: "sample",
          },
        ],
      },
      type: "powerpack",
    },
  },
};

apiInstance
  .createPowerpack(params)
  .then((data: v2.PowerpackResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

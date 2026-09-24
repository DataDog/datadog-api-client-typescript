/**
 * Create a DEM journey returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DEMApi(configuration);

const params: v2.DEMApiCreateJourneyRequest = {
  body: {
    data: {
      attributes: {
        description: "Tracks the user checkout flow from cart to confirmation.",
        journeyRum: {
          filter:
            "@application.id:11111111-2222-3333-4444-555555555555 env:prod",
          rumSteps: [
            {
              nodes: [
                {
                  appId: "11111111-2222-3333-4444-555555555555",
                  query: `@action.name:"Checkout"`,
                },
              ],
              type: "start",
            },
            {
              nodes: [
                {
                  appId: "11111111-2222-3333-4444-555555555555",
                  query: `@view.url_path:"/confirmation"`,
                },
              ],
              type: "stop",
            },
          ],
          variants: [
            {
              name: "Mobile checkout",
              rumSteps: [
                {
                  nodes: [
                    {
                      appId: "11111111-2222-3333-4444-555555555555",
                      query: `@action.name:"Checkout"`,
                    },
                  ],
                  type: "start",
                },
                {
                  nodes: [
                    {
                      appId: "11111111-2222-3333-4444-555555555555",
                      query: `@view.url_path:"/confirmation"`,
                    },
                  ],
                  type: "stop",
                },
              ],
            },
          ],
        },
        name: "Checkout Flow",
        tags: ["team:synthetics", "env:prod"],
        variants: [
          {
            name: "Mobile checkout",
            rumSteps: [
              {
                nodes: [
                  {
                    appId: "11111111-2222-3333-4444-555555555555",
                    query: `@action.name:"Checkout"`,
                  },
                ],
                type: "start",
              },
              {
                nodes: [
                  {
                    appId: "11111111-2222-3333-4444-555555555555",
                    query: `@view.url_path:"/confirmation"`,
                  },
                ],
                type: "stop",
              },
            ],
          },
        ],
      },
      type: "journeys",
    },
  },
};

apiInstance
  .createJourney(params)
  .then((data: v2.DemJourneyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

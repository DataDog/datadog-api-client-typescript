/**
 * Update a DEM journey returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DEMApi(configuration);

const params: v2.DEMApiUpdateJourneyRequest = {
  body: {
    data: {
      attributes: {
        description: "Tracks the user checkout flow from cart to confirmation.",
        journeyRum: {
          filter: "env:prod",
          rumSteps: [
            {
              nodes: [
                {
                  query: "action.name:'checkout'",
                },
              ],
              type: "start",
            },
            {
              nodes: [
                {
                  query: "action.name:'confirmation'",
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
                      query: "action.name:'checkout'",
                    },
                  ],
                  type: "start",
                },
                {
                  nodes: [
                    {
                      query: "action.name:'confirmation'",
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
                    query: "action.name:'checkout'",
                  },
                ],
                type: "start",
              },
              {
                nodes: [
                  {
                    query: "action.name:'confirmation'",
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
  journeyId: "journey_id",
};

apiInstance
  .updateJourney(params)
  .then((data: v2.DemJourneyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

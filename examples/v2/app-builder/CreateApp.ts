/**
 * Create App returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AppBuilderApi(configuration);

const params: v2.AppBuilderApiCreateAppRequest = {
  body: {
    data: {
      type: "appDefinitions",
      attributes: {
        rootInstanceName: "grid0",
        components: [
          {
            name: "grid0",
            type: "grid",
            properties: {
              children: [
                {
                  type: "gridCell",
                  name: "gridCell0",
                  properties: {
                    children: [
                      {
                        name: "text0",
                        type: "text",
                        properties: {
                          isVisible: true,
                        },
                        events: [],
                      },
                    ],
                    isVisible: "true",
                  },
                  events: [],
                },
                {
                  type: "gridCell",
                  name: "gridCell2",
                  properties: {
                    children: [
                      {
                        name: "table0",
                        type: "table",
                        properties: {
                          isVisible: true,
                        },
                        events: [],
                      },
                    ],
                    isVisible: "true",
                  },
                  events: [],
                },
                {
                  type: "gridCell",
                  name: "gridCell1",
                  properties: {
                    children: [
                      {
                        name: "text1",
                        type: "text",
                        properties: {
                          isVisible: true,
                        },
                        events: [],
                      },
                    ],
                    isVisible: "true",
                  },
                  events: [],
                },
                {
                  type: "gridCell",
                  name: "gridCell3",
                  properties: {
                    children: [
                      {
                        name: "button0",
                        type: "button",
                        properties: {
                          isVisible: true,
                        },
                        events: [
                          {
                            name: "click",
                            type: "setStateVariableValue",
                          },
                        ],
                      },
                    ],
                    isVisible: "true",
                  },
                  events: [],
                },
                {
                  type: "gridCell",
                  name: "gridCell4",
                  properties: {
                    children: [
                      {
                        name: "button1",
                        type: "button",
                        properties: {
                          isVisible: true,
                        },
                        events: [
                          {
                            name: "click",
                            type: "setStateVariableValue",
                          },
                        ],
                      },
                    ],
                    isVisible: "true",
                  },
                  events: [],
                },
              ],
              backgroundColor: "default",
            },
            events: [],
          },
        ],
        queries: [
          {
            id: "92ff0bb8-553b-4f31-87c7-ef5bd16d47d5",
            type: "action",
            name: "fetchFacts",
            events: [],
            properties: {
              spec: {
                fqn: "com.datadoghq.http.request",
                connectionId: "5e63f4a8-4ce6-47de-ba11-f6617c1d54f3",
                inputs: {
                  verb: "GET",
                  url: "https://catfact.ninja/facts",
                  urlParams:
                    "[{'key': 'limit', 'value': '${pageSize.value.toString()}'}, {'key': 'page', 'value': '${(table0.pageIndex + 1).toString()}'}]",
                },
              },
            },
          },
          {
            type: "stateVariable",
            name: "pageSize",
            properties: {
              defaultValue: "${20}",
            },
            id: "afd03c81-4075-4432-8618-ba09d52d2f2d",
          },
          {
            type: "dataTransform",
            name: "randomFact",
            properties: {
              outputs:
                "${(() => {const facts = fetchFacts.outputs.body.data\nreturn facts[Math.floor(Math.random()*facts.length)]\n})()}",
            },
            id: "0fb22859-47dc-4137-9e41-7b67d04c525c",
          },
        ],
        name: "Example Cat Facts Viewer",
        description:
          "This is a slightly complicated example app that fetches and displays cat facts",
      },
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

/**
 * Update a notebook returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.NotebooksApi(configuration);

// there is a valid "notebook" in the system
const NOTEBOOK_DATA_ID = parseInt(process.env.NOTEBOOK_DATA_ID as string);

const params: v1.NotebooksApiUpdateNotebookRequest = {
  body: {
    data: {
      attributes: {
        cells: [
          {
            attributes: {
              definition: {
                text:
                  `## Some test markdown

` +
                  "```" +
                  `
var x, y;
x = 5;
y = 6;
` +
                  "```",
                type: "markdown",
              },
            },
            type: "notebook_cells",
          },
          {
            attributes: {
              definition: {
                requests: [
                  {
                    displayType: "line",
                    q: "avg:system.load.1{*}",
                    style: {
                      lineType: "solid",
                      lineWidth: "normal",
                      palette: "dog_classic",
                    },
                  },
                ],
                showLegend: true,
                type: "timeseries",
                yaxis: {
                  scale: "linear",
                },
              },
              graphSize: "m",
              splitBy: {
                keys: [],
                tags: [],
              },
              time: undefined,
            },
            type: "notebook_cells",
          },
        ],
        name: "Example-Notebook-updated",
        status: "published",
        time: {
          liveSpan: "1h",
        },
      },
      type: "notebooks",
    },
  },
  notebookId: NOTEBOOK_DATA_ID,
};

apiInstance
  .updateNotebook(params)
  .then((data: v1.NotebookResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Create a new dashboard with query_table widget and text formatting
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard",
    description: "",
    widgets: [
      {
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          type: "query_table",
          requests: [
            {
              queries: [
                {
                  aggregator: "avg",
                  dataSource: "metrics",
                  name: "query1",
                  query:
                    "avg:aws.stream.globalaccelerator.processed_bytes_in{*} by {aws_account,acceleratoripaddress}",
                },
                {
                  aggregator: "avg",
                  dataSource: "metrics",
                  name: "query2",
                  query:
                    "avg:aws.stream.globalaccelerator.processed_bytes_out{*} by {aws_account,acceleratoripaddress}",
                },
              ],
              responseFormat: "scalar",
              textFormats: [
                [
                  {
                    match: {
                      type: "is",
                      value: "fruit",
                    },
                    palette: "white_on_red",
                    replace: {
                      type: "all",
                      _with: "vegetable",
                    },
                  },
                  {
                    match: {
                      type: "is",
                      value: "animal",
                    },
                    palette: "custom_bg",
                    customBgColor: "#632ca6",
                  },
                  {
                    match: {
                      type: "is",
                      value: "robot",
                    },
                    palette: "red_on_white",
                  },
                  {
                    match: {
                      type: "is",
                      value: "ai",
                    },
                    palette: "yellow_on_white",
                  },
                ],
                [
                  {
                    match: {
                      type: "is_not",
                      value: "xyz",
                    },
                    palette: "white_on_yellow",
                  },
                ],
                [
                  {
                    match: {
                      type: "contains",
                      value: "test",
                    },
                    palette: "white_on_green",
                    replace: {
                      type: "all",
                      _with: "vegetable",
                    },
                  },
                ],
                [
                  {
                    match: {
                      type: "does_not_contain",
                      value: "blah",
                    },
                    palette: "black_on_light_red",
                  },
                ],
                [
                  {
                    match: {
                      type: "starts_with",
                      value: "abc",
                    },
                    palette: "black_on_light_yellow",
                  },
                ],
                [
                  {
                    match: {
                      type: "ends_with",
                      value: "xyz",
                    },
                    palette: "black_on_light_green",
                  },
                  {
                    match: {
                      type: "ends_with",
                      value: "zzz",
                    },
                    palette: "green_on_white",
                  },
                  {
                    match: {
                      type: "is",
                      value: "animal",
                    },
                    palette: "custom_text",
                    customFgColor: "#632ca6",
                  },
                ],
              ],
              formulas: [],
            },
          ],
          hasSearchBar: "never",
        },
        layout: {
          x: 0,
          y: 0,
          width: 4,
          height: 4,
        },
      },
    ],
    templateVariables: [],
    layoutType: "free",
    notifyList: [],
  },
};

apiInstance
  .createDashboard(params)
  .then((data: v1.Dashboard) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

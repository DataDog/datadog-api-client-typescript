/**
 * Create cases for security findings returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateCasesRequest = {
  body: {
    data: [
      {
        attributes: {
          title: "A title",
          description: "A description",
        },
        relationships: {
          findings: {
            data: [
              {
                id: "YjdhNDM3N2QyNTFjYmUwYTY3NDdhMTg0YTk2Yjg5MDl-ZjNmMzAwOTFkZDNhNGQzYzI0MzgxNTk4MjRjZmE2NzE=",
                type: "findings",
              },
            ],
          },
          project: {
            data: {
              id: "959a6f71-bac8-4027-b1d3-2264f569296f",
              type: "projects",
            },
          },
        },
        type: "cases",
      },
      {
        attributes: {
          title: "A title",
          description: "A description",
        },
        relationships: {
          findings: {
            data: [
              {
                id: "OGRlMDIwYzk4MjFmZTZiNTQwMzk2ZjUxNzg0MDc0NjR-MTk3Yjk4MDI4ZDQ4YzI2ZGZiMWJmMTNhNDEwZGZkYWI=",
                type: "findings",
              },
            ],
          },
          project: {
            data: {
              id: "959a6f71-bac8-4027-b1d3-2264f569296f",
              type: "projects",
            },
          },
        },
        type: "cases",
      },
    ],
  },
};

apiInstance
  .createCases(params)
  .then((data: v2.FindingCaseResponseArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

/**
 * Create case for security finding returns "Created" response
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
                id: "ZGZhMDI3ZjdjMDM3YjJmNzcxNTlhZGMwMjdmZWNiNTZ-MTVlYTNmYWU3NjNlOTNlYTE2YjM4N2JmZmI4Yjk5N2Y=",
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

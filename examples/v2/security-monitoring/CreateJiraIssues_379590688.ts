/**
 * Create Jira issue for security finding returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateJiraIssuesRequest = {
  body: {
    data: [
      {
        type: "jira_issues",
        attributes: {},
        relationships: {
          _case: {
            data: {
              type: "cases",
              id: "6a773295-8729-4034-aada-53b64cbe02e7",
            },
          },
        },
      },
    ],
    included: [
      {
        type: "cases",
        attributes: {
          title: "A title",
          description: "A description",
        },
        relationships: {
          project: {
            data: {
              type: "projects",
              id: "959a6f71-bac8-4027-b1d3-2264f569296f",
            },
          },
          findings: {
            data: [
              {
                type: "findings",
                id: "ZGZhMDI3ZjdjMDM3YjJmNzcxNTlhZGMwMjdmZWNiNTZ-MTVlYTNmYWU3NjNlOTNlYTE2YjM4N2JmZmI4Yjk5N2Y=",
              },
            ],
          },
        },
        id: "6a773295-8729-4034-aada-53b64cbe02e7",
      },
      {
        type: "projects",
        id: "959a6f71-bac8-4027-b1d3-2264f569296f",
      },
      {
        type: "findings",
        id: "ZGZhMDI3ZjdjMDM3YjJmNzcxNTlhZGMwMjdmZWNiNTZ-MTVlYTNmYWU3NjNlOTNlYTE2YjM4N2JmZmI4Yjk5N2Y=",
      },
    ],
  },
};

apiInstance
  .createJiraIssues(params)
  .then((data: v2.FindingCaseResponseArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

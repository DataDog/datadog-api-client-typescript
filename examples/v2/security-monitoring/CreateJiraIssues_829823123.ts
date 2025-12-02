/**
 * Create Jira issue for security findings returns "Created" response
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
              id: "e469ceda-957a-4557-a607-9ff25032e9ca",
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
                id: "MzUxMDI4OWYyYWEyODRhYjQ0Zjg2YjY2ZTFmNjRjYzd-NDU2OWQyNTk1MjM5OGI2NzJjMTVhYjhiODY1ZDcwZWY=",
              },
              {
                type: "findings",
                id: "ZjE2ZGI5YjdmYTQyYzhhMDQ3Nzc3YjM1NGQ2Y2NmZTd-NDU2OWQyNTk1MjM5OGI2NzJjMTVhYjhiODY1ZDcwZWY=",
              },
            ],
          },
        },
        id: "e469ceda-957a-4557-a607-9ff25032e9ca",
      },
      {
        type: "projects",
        id: "959a6f71-bac8-4027-b1d3-2264f569296f",
      },
      {
        type: "findings",
        id: "MzUxMDI4OWYyYWEyODRhYjQ0Zjg2YjY2ZTFmNjRjYzd-NDU2OWQyNTk1MjM5OGI2NzJjMTVhYjhiODY1ZDcwZWY=",
      },
      {
        type: "findings",
        id: "ZjE2ZGI5YjdmYTQyYzhhMDQ3Nzc3YjM1NGQ2Y2NmZTd-NDU2OWQyNTk1MjM5OGI2NzJjMTVhYjhiODY1ZDcwZWY=",
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

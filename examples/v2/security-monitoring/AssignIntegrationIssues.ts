/**
 * Assign or un-assign Jira issues to security findings returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.assignIntegrationIssues"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiAssignIntegrationIssuesRequest = {
  body: {
    data: {
      attributes: {
        action: "assign",
        assignment: {
          jira: {
            "https://jira.example.com/browse/SEC-123": [
              "MDBjMzdhYzgyNGZkZGJiZmY0OGNmYjNiMWQ2ODY0YmR-OTc0YjMzNjM1Y2UyODA2YTEyNWQxYmNkZjhmODllNzg=",
            ],
          },
        },
        type: "findings",
      },
      id: "some_id",
      type: "issue_assignment",
    },
  },
};

apiInstance
  .assignIntegrationIssues(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

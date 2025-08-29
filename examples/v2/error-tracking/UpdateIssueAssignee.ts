/**
 * Update the assignee of an issue returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ErrorTrackingApi(configuration);

// there is a valid "issue" in the system
const ISSUE_ID = process.env.ISSUE_ID as string;

const params: v2.ErrorTrackingApiUpdateIssueAssigneeRequest = {
  body: {
    data: {
      id: "87cb11a0-278c-440a-99fe-701223c80296",
      type: "assignee",
    },
  },
  issueId: ISSUE_ID,
};

apiInstance
  .updateIssueAssignee(params)
  .then((data: v2.IssueResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

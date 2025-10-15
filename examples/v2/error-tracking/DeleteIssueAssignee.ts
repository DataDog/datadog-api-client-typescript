/**
 * Remove the assignee of an issue returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ErrorTrackingApi(configuration);

// there is a valid "issue" in the system
const ISSUE_ID = process.env.ISSUE_ID as string;

const params: v2.ErrorTrackingApiDeleteIssueAssigneeRequest = {
  issueId: ISSUE_ID,
};

apiInstance
  .deleteIssueAssignee(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

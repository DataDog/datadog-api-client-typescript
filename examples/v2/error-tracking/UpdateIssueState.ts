/**
 * Update the state of an issue returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ErrorTrackingApi(configuration);

// there is a valid "issue" in the system
const ISSUE_ID = process.env.ISSUE_ID as string;

const params: v2.ErrorTrackingApiUpdateIssueStateRequest = {
  body: {
    data: {
      attributes: {
        state: "RESOLVED",
      },
      id: ISSUE_ID,
      type: "error_tracking_issue",
    },
  },
  issueId: ISSUE_ID,
};

apiInstance
  .updateIssueState(params)
  .then((data: v2.IssueResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

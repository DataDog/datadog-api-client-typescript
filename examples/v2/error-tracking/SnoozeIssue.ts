/**
 * Snooze an issue returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.snoozeIssue"] = true;
const apiInstance = new v2.ErrorTrackingApi(configuration);

// there is a valid "issue" in the system
const ISSUE_ID = process.env.ISSUE_ID as string;

const params: v2.ErrorTrackingApiSnoozeIssueRequest = {
  body: {
    data: {
      attributes: {
        condition: {
          kind: "ELAPSED_TIME",
          duration: "168h",
        },
      },
      id: ISSUE_ID,
      type: "error_tracking_issue",
    },
  },
  issueId: ISSUE_ID,
};

apiInstance
  .snoozeIssue(params)
  .then((data: v2.IssueResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

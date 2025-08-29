/**
 * Get the details of an error tracking issue returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ErrorTrackingApi(configuration);

// there is a valid "issue" in the system
const ISSUE_ID = process.env.ISSUE_ID as string;

const params: v2.ErrorTrackingApiGetIssueRequest = {
  issueId: ISSUE_ID,
};

apiInstance
  .getIssue(params)
  .then((data: v2.IssueResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

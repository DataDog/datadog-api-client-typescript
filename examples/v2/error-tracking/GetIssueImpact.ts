/**
 * Get the impact of an error tracking issue returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getIssueImpact"] = true;
const apiInstance = new v2.ErrorTrackingApi(configuration);

// there is a valid "issue" in the system
const ISSUE_ID = process.env.ISSUE_ID as string;

const params: v2.ErrorTrackingApiGetIssueImpactRequest = {
  issueId: ISSUE_ID,
  filterFrom: 1635333071000,
  filterTo: 1636629071000,
};

apiInstance
  .getIssueImpact(params)
  .then((data: v2.IssueImpactResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

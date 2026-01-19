/**
 * List Jira accounts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listJiraAccounts"] = true;
const apiInstance = new v2.JiraIntegrationApi(configuration);

apiInstance
  .listJiraAccounts()
  .then((data: v2.JiraAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

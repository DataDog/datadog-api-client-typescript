/**
 * Get code coverage summary for an existing commit with valid repository
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getCodeCoverageCommitSummary"] = true;
const apiInstance = new v2.CodeCoverageApi(configuration);

const params: v2.CodeCoverageApiGetCodeCoverageCommitSummaryRequest = {
  body: {
    data: {
      attributes: {
        repositoryId: "github.com/datadog/shopist",
        commitSha: "c55b0ce584e139bde41a00002ab31bc7d75f791d",
      },
      type: "ci_app_coverage_commit_summary_request",
    },
  },
};

apiInstance
  .getCodeCoverageCommitSummary(params)
  .then((data: v2.CoverageSummaryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

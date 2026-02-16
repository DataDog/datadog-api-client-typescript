/**
 * Get code coverage summary for a commit returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getCodeCoverageCommitSummary"] = true;
const apiInstance = new v2.CodeCoverageApi(configuration);

const params: v2.CodeCoverageApiGetCodeCoverageCommitSummaryRequest = {
  body: {
    data: {
      attributes: {
        commitSha: "66adc9350f2cc9b250b69abddab733dd55e1a588",
        repositoryId: "github.com/datadog/shopist",
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

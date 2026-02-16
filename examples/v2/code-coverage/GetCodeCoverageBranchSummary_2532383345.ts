/**
 * Get code coverage summary for an existing branch with valid repository
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getCodeCoverageBranchSummary"] = true;
const apiInstance = new v2.CodeCoverageApi(configuration);

const params: v2.CodeCoverageApiGetCodeCoverageBranchSummaryRequest = {
  body: {
    data: {
      attributes: {
        repositoryId: "github.com/datadog/shopist",
        branch: "prod",
      },
      type: "ci_app_coverage_branch_summary_request",
    },
  },
};

apiInstance
  .getCodeCoverageBranchSummary(params)
  .then((data: v2.CoverageSummaryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

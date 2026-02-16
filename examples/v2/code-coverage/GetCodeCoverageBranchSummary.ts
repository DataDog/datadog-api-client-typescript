/**
 * Get code coverage summary for a branch returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getCodeCoverageBranchSummary"] = true;
const apiInstance = new v2.CodeCoverageApi(configuration);

const params: v2.CodeCoverageApiGetCodeCoverageBranchSummaryRequest = {
  body: {
    data: {
      attributes: {
        branch: "prod",
        repositoryId: "github.com/datadog/shopist",
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

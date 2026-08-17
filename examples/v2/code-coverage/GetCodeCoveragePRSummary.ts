/**
 * Get code coverage summary for a pull request returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CodeCoverageApi(configuration);

const params: v2.CodeCoverageApiGetCodeCoveragePRSummaryRequest = {
  body: {
    data: {
      attributes: {
        prNumber: 42,
        repositoryUrl: "https://github.com/datadog/shopist",
      },
      type: "ci_app_coverage_pr_summary_request",
    },
  },
};

apiInstance
  .getCodeCoveragePRSummary(params)
  .then((data: v2.CoverageSummaryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

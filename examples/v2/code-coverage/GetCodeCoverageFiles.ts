/**
 * Get per-file code coverage data returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CodeCoverageApi(configuration);

const params: v2.CodeCoverageApiGetCodeCoverageFilesRequest = {
  body: {
    data: {
      attributes: {
        changedOnly: true,
        commitSha: "66adc9350f2cc9b250b69abddab733dd55e1a588",
        repositoryUrl: "https://github.com/datadog/shopist",
      },
      type: "ci_app_coverage_files_request",
    },
  },
};

apiInstance
  .getCodeCoverageFiles(params)
  .then((data: v2.FilesCoverageResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));

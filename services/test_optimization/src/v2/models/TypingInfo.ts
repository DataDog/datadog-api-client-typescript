import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { FlakyTest } from "./FlakyTest";
import { FlakyTestAttributes } from "./FlakyTestAttributes";
import { FlakyTestPipelineStats } from "./FlakyTestPipelineStats";
import { FlakyTestRunMetadata } from "./FlakyTestRunMetadata";
import { FlakyTestStats } from "./FlakyTestStats";
import { FlakyTestsPagination } from "./FlakyTestsPagination";
import { FlakyTestsSearchFilter } from "./FlakyTestsSearchFilter";
import { FlakyTestsSearchPageOptions } from "./FlakyTestsSearchPageOptions";
import { FlakyTestsSearchRequest } from "./FlakyTestsSearchRequest";
import { FlakyTestsSearchRequestAttributes } from "./FlakyTestsSearchRequestAttributes";
import { FlakyTestsSearchRequestData } from "./FlakyTestsSearchRequestData";
import { FlakyTestsSearchResponse } from "./FlakyTestsSearchResponse";
import { FlakyTestsSearchResponseMeta } from "./FlakyTestsSearchResponseMeta";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    FlakyTestAttributesFlakyState: [
      "active",
      "fixed",
      "quarantined",
      "disabled",
    ],
    FlakyTestType: ["flaky_test"],
    FlakyTestsSearchRequestDataType: ["search_flaky_tests_request"],
    FlakyTestsSearchSort: [
      "fqn",
      "-fqn",
      "first_flaked",
      "-first_flaked",
      "last_flaked",
      "-last_flaked",
      "failure_rate",
      "-failure_rate",
      "pipelines_failed",
      "-pipelines_failed",
      "pipelines_duration_lost",
      "-pipelines_duration_lost",
    ],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    FlakyTest: FlakyTest,
    FlakyTestAttributes: FlakyTestAttributes,
    FlakyTestPipelineStats: FlakyTestPipelineStats,
    FlakyTestRunMetadata: FlakyTestRunMetadata,
    FlakyTestStats: FlakyTestStats,
    FlakyTestsPagination: FlakyTestsPagination,
    FlakyTestsSearchFilter: FlakyTestsSearchFilter,
    FlakyTestsSearchPageOptions: FlakyTestsSearchPageOptions,
    FlakyTestsSearchRequest: FlakyTestsSearchRequest,
    FlakyTestsSearchRequestAttributes: FlakyTestsSearchRequestAttributes,
    FlakyTestsSearchRequestData: FlakyTestsSearchRequestData,
    FlakyTestsSearchResponse: FlakyTestsSearchResponse,
    FlakyTestsSearchResponseMeta: FlakyTestsSearchResponseMeta,
  },
};

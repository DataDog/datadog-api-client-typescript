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
import { UpdateFlakyTestsRequest } from "./UpdateFlakyTestsRequest";
import { UpdateFlakyTestsRequestAttributes } from "./UpdateFlakyTestsRequestAttributes";
import { UpdateFlakyTestsRequestData } from "./UpdateFlakyTestsRequestData";
import { UpdateFlakyTestsRequestTest } from "./UpdateFlakyTestsRequestTest";
import { UpdateFlakyTestsResponse } from "./UpdateFlakyTestsResponse";
import { UpdateFlakyTestsResponseAttributes } from "./UpdateFlakyTestsResponseAttributes";
import { UpdateFlakyTestsResponseData } from "./UpdateFlakyTestsResponseData";
import { UpdateFlakyTestsResponseResult } from "./UpdateFlakyTestsResponseResult";

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
    UpdateFlakyTestsRequestDataType: ["update_flaky_test_state_request"],
    UpdateFlakyTestsRequestTestNewState: [
      "active",
      "quarantined",
      "disabled",
      "fixed",
    ],
    UpdateFlakyTestsResponseDataType: ["update_flaky_test_state_response"],
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
    UpdateFlakyTestsRequest: UpdateFlakyTestsRequest,
    UpdateFlakyTestsRequestAttributes: UpdateFlakyTestsRequestAttributes,
    UpdateFlakyTestsRequestData: UpdateFlakyTestsRequestData,
    UpdateFlakyTestsRequestTest: UpdateFlakyTestsRequestTest,
    UpdateFlakyTestsResponse: UpdateFlakyTestsResponse,
    UpdateFlakyTestsResponseAttributes: UpdateFlakyTestsResponseAttributes,
    UpdateFlakyTestsResponseData: UpdateFlakyTestsResponseData,
    UpdateFlakyTestsResponseResult: UpdateFlakyTestsResponseResult,
  },
};

import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { FlakyTest } from "./FlakyTest";
import { FlakyTestAttributes } from "./FlakyTestAttributes";
import { FlakyTestHistory } from "./FlakyTestHistory";
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
import { TestOptimizationDeleteServiceSettingsRequest } from "./TestOptimizationDeleteServiceSettingsRequest";
import { TestOptimizationDeleteServiceSettingsRequestAttributes } from "./TestOptimizationDeleteServiceSettingsRequestAttributes";
import { TestOptimizationDeleteServiceSettingsRequestData } from "./TestOptimizationDeleteServiceSettingsRequestData";
import { TestOptimizationGetServiceSettingsRequest } from "./TestOptimizationGetServiceSettingsRequest";
import { TestOptimizationGetServiceSettingsRequestAttributes } from "./TestOptimizationGetServiceSettingsRequestAttributes";
import { TestOptimizationGetServiceSettingsRequestData } from "./TestOptimizationGetServiceSettingsRequestData";
import { TestOptimizationServiceSettingsAttributes } from "./TestOptimizationServiceSettingsAttributes";
import { TestOptimizationServiceSettingsData } from "./TestOptimizationServiceSettingsData";
import { TestOptimizationServiceSettingsResponse } from "./TestOptimizationServiceSettingsResponse";
import { TestOptimizationUpdateServiceSettingsRequest } from "./TestOptimizationUpdateServiceSettingsRequest";
import { TestOptimizationUpdateServiceSettingsRequestAttributes } from "./TestOptimizationUpdateServiceSettingsRequestAttributes";
import { TestOptimizationUpdateServiceSettingsRequestData } from "./TestOptimizationUpdateServiceSettingsRequestData";
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
    TestOptimizationDeleteServiceSettingsRequestDataType: [
      "test_optimization_delete_service_settings_request",
    ],
    TestOptimizationGetServiceSettingsRequestDataType: [
      "test_optimization_get_service_settings_request",
    ],
    TestOptimizationServiceSettingsType: ["test_optimization_service_settings"],
    TestOptimizationUpdateServiceSettingsRequestDataType: [
      "test_optimization_update_service_settings_request",
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
    FlakyTestHistory: FlakyTestHistory,
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
    TestOptimizationDeleteServiceSettingsRequest:
      TestOptimizationDeleteServiceSettingsRequest,
    TestOptimizationDeleteServiceSettingsRequestAttributes:
      TestOptimizationDeleteServiceSettingsRequestAttributes,
    TestOptimizationDeleteServiceSettingsRequestData:
      TestOptimizationDeleteServiceSettingsRequestData,
    TestOptimizationGetServiceSettingsRequest:
      TestOptimizationGetServiceSettingsRequest,
    TestOptimizationGetServiceSettingsRequestAttributes:
      TestOptimizationGetServiceSettingsRequestAttributes,
    TestOptimizationGetServiceSettingsRequestData:
      TestOptimizationGetServiceSettingsRequestData,
    TestOptimizationServiceSettingsAttributes:
      TestOptimizationServiceSettingsAttributes,
    TestOptimizationServiceSettingsData: TestOptimizationServiceSettingsData,
    TestOptimizationServiceSettingsResponse:
      TestOptimizationServiceSettingsResponse,
    TestOptimizationUpdateServiceSettingsRequest:
      TestOptimizationUpdateServiceSettingsRequest,
    TestOptimizationUpdateServiceSettingsRequestAttributes:
      TestOptimizationUpdateServiceSettingsRequestAttributes,
    TestOptimizationUpdateServiceSettingsRequestData:
      TestOptimizationUpdateServiceSettingsRequestData,
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

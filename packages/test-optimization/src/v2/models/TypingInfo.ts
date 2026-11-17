import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { BranchCoverageSummaryRequest } from "./BranchCoverageSummaryRequest";
import { BranchCoverageSummaryRequestAttributes } from "./BranchCoverageSummaryRequestAttributes";
import { BranchCoverageSummaryRequestData } from "./BranchCoverageSummaryRequestData";
import { CIAppAggregateBucketValueTimeseriesPoint } from "./CIAppAggregateBucketValueTimeseriesPoint";
import { CIAppAggregateSort } from "./CIAppAggregateSort";
import { CIAppCompute } from "./CIAppCompute";
import { CIAppEventAttributes } from "./CIAppEventAttributes";
import { CIAppGroupByHistogram } from "./CIAppGroupByHistogram";
import { CIAppQueryOptions } from "./CIAppQueryOptions";
import { CIAppQueryPageOptions } from "./CIAppQueryPageOptions";
import { CIAppResponseLinks } from "./CIAppResponseLinks";
import { CIAppResponseMetadataWithPagination } from "./CIAppResponseMetadataWithPagination";
import { CIAppResponsePage } from "./CIAppResponsePage";
import { CIAppTestEvent } from "./CIAppTestEvent";
import { CIAppTestEventsRequest } from "./CIAppTestEventsRequest";
import { CIAppTestEventsResponse } from "./CIAppTestEventsResponse";
import { CIAppTestsAggregateRequest } from "./CIAppTestsAggregateRequest";
import { CIAppTestsAggregationBucketsResponse } from "./CIAppTestsAggregationBucketsResponse";
import { CIAppTestsAnalyticsAggregateResponse } from "./CIAppTestsAnalyticsAggregateResponse";
import { CIAppTestsBucketResponse } from "./CIAppTestsBucketResponse";
import { CIAppTestsGroupBy } from "./CIAppTestsGroupBy";
import { CIAppTestsQueryFilter } from "./CIAppTestsQueryFilter";
import { CIAppWarning } from "./CIAppWarning";
import { CommitCoverageSummaryRequest } from "./CommitCoverageSummaryRequest";
import { CommitCoverageSummaryRequestAttributes } from "./CommitCoverageSummaryRequestAttributes";
import { CommitCoverageSummaryRequestData } from "./CommitCoverageSummaryRequestData";
import { CoverageSummaryAttributes } from "./CoverageSummaryAttributes";
import { CoverageSummaryCodeownerStats } from "./CoverageSummaryCodeownerStats";
import { CoverageSummaryData } from "./CoverageSummaryData";
import { CoverageSummaryFlagStats } from "./CoverageSummaryFlagStats";
import { CoverageSummaryResponse } from "./CoverageSummaryResponse";
import { CoverageSummaryServiceStats } from "./CoverageSummaryServiceStats";
import { FileCoverageLines } from "./FileCoverageLines";
import { FilesCoverageAttributes } from "./FilesCoverageAttributes";
import { FilesCoverageData } from "./FilesCoverageData";
import { FilesCoverageRequest } from "./FilesCoverageRequest";
import { FilesCoverageRequestAttributes } from "./FilesCoverageRequestAttributes";
import { FilesCoverageRequestData } from "./FilesCoverageRequestData";
import { FilesCoverageResponse } from "./FilesCoverageResponse";
import { FlakyTest } from "./FlakyTest";
import { FlakyTestAttributes } from "./FlakyTestAttributes";
import { FlakyTestHistory } from "./FlakyTestHistory";
import { FlakyTestHistoryPolicyMeta } from "./FlakyTestHistoryPolicyMeta";
import { FlakyTestHistoryPolicyMetaConfig } from "./FlakyTestHistoryPolicyMetaConfig";
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
import { PRCoverageSummaryRequest } from "./PRCoverageSummaryRequest";
import { PRCoverageSummaryRequestAttributes } from "./PRCoverageSummaryRequestAttributes";
import { PRCoverageSummaryRequestData } from "./PRCoverageSummaryRequestData";
import { TestOptimizationDeleteServiceSettingsRequest } from "./TestOptimizationDeleteServiceSettingsRequest";
import { TestOptimizationDeleteServiceSettingsRequestAttributes } from "./TestOptimizationDeleteServiceSettingsRequestAttributes";
import { TestOptimizationDeleteServiceSettingsRequestData } from "./TestOptimizationDeleteServiceSettingsRequestData";
import { TestOptimizationFlakyTestsManagementPoliciesAttemptToFix } from "./TestOptimizationFlakyTestsManagementPoliciesAttemptToFix";
import { TestOptimizationFlakyTestsManagementPoliciesAttributes } from "./TestOptimizationFlakyTestsManagementPoliciesAttributes";
import { TestOptimizationFlakyTestsManagementPoliciesAutoDisableRule } from "./TestOptimizationFlakyTestsManagementPoliciesAutoDisableRule";
import { TestOptimizationFlakyTestsManagementPoliciesAutoQuarantineRule } from "./TestOptimizationFlakyTestsManagementPoliciesAutoQuarantineRule";
import { TestOptimizationFlakyTestsManagementPoliciesBranchRule } from "./TestOptimizationFlakyTestsManagementPoliciesBranchRule";
import { TestOptimizationFlakyTestsManagementPoliciesData } from "./TestOptimizationFlakyTestsManagementPoliciesData";
import { TestOptimizationFlakyTestsManagementPoliciesDisabled } from "./TestOptimizationFlakyTestsManagementPoliciesDisabled";
import { TestOptimizationFlakyTestsManagementPoliciesDisabledFailureRateRule } from "./TestOptimizationFlakyTestsManagementPoliciesDisabledFailureRateRule";
import { TestOptimizationFlakyTestsManagementPoliciesGetRequest } from "./TestOptimizationFlakyTestsManagementPoliciesGetRequest";
import { TestOptimizationFlakyTestsManagementPoliciesGetRequestAttributes } from "./TestOptimizationFlakyTestsManagementPoliciesGetRequestAttributes";
import { TestOptimizationFlakyTestsManagementPoliciesGetRequestData } from "./TestOptimizationFlakyTestsManagementPoliciesGetRequestData";
import { TestOptimizationFlakyTestsManagementPoliciesQuarantined } from "./TestOptimizationFlakyTestsManagementPoliciesQuarantined";
import { TestOptimizationFlakyTestsManagementPoliciesQuarantinedFailureRateRule } from "./TestOptimizationFlakyTestsManagementPoliciesQuarantinedFailureRateRule";
import { TestOptimizationFlakyTestsManagementPoliciesResponse } from "./TestOptimizationFlakyTestsManagementPoliciesResponse";
import { TestOptimizationFlakyTestsManagementPoliciesUpdateRequest } from "./TestOptimizationFlakyTestsManagementPoliciesUpdateRequest";
import { TestOptimizationFlakyTestsManagementPoliciesUpdateRequestAttributes } from "./TestOptimizationFlakyTestsManagementPoliciesUpdateRequestAttributes";
import { TestOptimizationFlakyTestsManagementPoliciesUpdateRequestData } from "./TestOptimizationFlakyTestsManagementPoliciesUpdateRequestData";
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
    BranchCoverageSummaryRequestType: [
      "ci_app_coverage_branch_summary_request",
    ],
    CIAppAggregateSortType: ["alphabetical", "measure"],
    CIAppAggregationFunction: [
      "count",
      "cardinality",
      "pc75",
      "pc90",
      "pc95",
      "pc98",
      "pc99",
      "sum",
      "min",
      "max",
      "avg",
      "median",
      "latest",
      "earliest",
      "most_frequent",
      "delta",
    ],
    CIAppComputeType: ["timeseries", "total"],
    CIAppResponseStatus: ["done", "timeout"],
    CIAppSort: ["timestamp", "-timestamp"],
    CIAppSortOrder: ["asc", "desc"],
    CIAppTestEventTypeName: ["citest"],
    CIAppTestLevel: ["session", "module", "suite", "test"],
    CommitCoverageSummaryRequestType: [
      "ci_app_coverage_commit_summary_request",
    ],
    CoverageSummaryType: ["ci_app_coverage_summary"],
    FilesCoverageRequestType: ["ci_app_coverage_files_request"],
    FilesCoverageResponseType: ["ci_app_coverage_files"],
    FlakyTestAttributesFlakyState: [
      "active",
      "fixed",
      "quarantined",
      "disabled",
    ],
    FlakyTestHistoryPolicyId: [
      "ftm_policy.manual",
      "ftm_policy.fixed",
      "ftm_policy.disable.failure_rate",
      "ftm_policy.disable.branch_flake",
      "ftm_policy.disable.days_active",
      "ftm_policy.quarantine.failure_rate",
      "ftm_policy.quarantine.branch_flake",
      "ftm_policy.quarantine.days_active",
      "unknown",
    ],
    FlakyTestImpactLevel: ["low", "medium", "high"],
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
    PRCoverageSummaryRequestType: ["ci_app_coverage_pr_summary_request"],
    TestOptimizationDeleteServiceSettingsRequestDataType: [
      "test_optimization_delete_service_settings_request",
    ],
    TestOptimizationFlakyTestsManagementPoliciesDisabledStatus: [
      "active",
      "quarantined",
    ],
    TestOptimizationFlakyTestsManagementPoliciesType: [
      "test_optimization_flaky_tests_management_policies",
    ],
    TestOptimizationGetFlakyTestsManagementPoliciesRequestDataType: [
      "test_optimization_get_flaky_tests_management_policies_request",
    ],
    TestOptimizationGetServiceSettingsRequestDataType: [
      "test_optimization_get_service_settings_request",
    ],
    TestOptimizationServiceSettingsType: ["test_optimization_service_settings"],
    TestOptimizationUpdateFlakyTestsManagementPoliciesRequestDataType: [
      "test_optimization_update_flaky_tests_management_policies_request",
    ],
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
  oneOfMap: {
    CIAppAggregateBucketValue: [
      "string",
      "number",
      "Array<CIAppAggregateBucketValueTimeseriesPoint>",
    ],
    CIAppGroupByMissing: ["string", "number"],
    CIAppGroupByTotal: ["boolean", "string", "number"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    BranchCoverageSummaryRequest: BranchCoverageSummaryRequest,
    BranchCoverageSummaryRequestAttributes:
      BranchCoverageSummaryRequestAttributes,
    BranchCoverageSummaryRequestData: BranchCoverageSummaryRequestData,
    CIAppAggregateBucketValueTimeseriesPoint:
      CIAppAggregateBucketValueTimeseriesPoint,
    CIAppAggregateSort: CIAppAggregateSort,
    CIAppCompute: CIAppCompute,
    CIAppEventAttributes: CIAppEventAttributes,
    CIAppGroupByHistogram: CIAppGroupByHistogram,
    CIAppQueryOptions: CIAppQueryOptions,
    CIAppQueryPageOptions: CIAppQueryPageOptions,
    CIAppResponseLinks: CIAppResponseLinks,
    CIAppResponseMetadataWithPagination: CIAppResponseMetadataWithPagination,
    CIAppResponsePage: CIAppResponsePage,
    CIAppTestEvent: CIAppTestEvent,
    CIAppTestEventsRequest: CIAppTestEventsRequest,
    CIAppTestEventsResponse: CIAppTestEventsResponse,
    CIAppTestsAggregateRequest: CIAppTestsAggregateRequest,
    CIAppTestsAggregationBucketsResponse: CIAppTestsAggregationBucketsResponse,
    CIAppTestsAnalyticsAggregateResponse: CIAppTestsAnalyticsAggregateResponse,
    CIAppTestsBucketResponse: CIAppTestsBucketResponse,
    CIAppTestsGroupBy: CIAppTestsGroupBy,
    CIAppTestsQueryFilter: CIAppTestsQueryFilter,
    CIAppWarning: CIAppWarning,
    CommitCoverageSummaryRequest: CommitCoverageSummaryRequest,
    CommitCoverageSummaryRequestAttributes:
      CommitCoverageSummaryRequestAttributes,
    CommitCoverageSummaryRequestData: CommitCoverageSummaryRequestData,
    CoverageSummaryAttributes: CoverageSummaryAttributes,
    CoverageSummaryCodeownerStats: CoverageSummaryCodeownerStats,
    CoverageSummaryData: CoverageSummaryData,
    CoverageSummaryFlagStats: CoverageSummaryFlagStats,
    CoverageSummaryResponse: CoverageSummaryResponse,
    CoverageSummaryServiceStats: CoverageSummaryServiceStats,
    FileCoverageLines: FileCoverageLines,
    FilesCoverageAttributes: FilesCoverageAttributes,
    FilesCoverageData: FilesCoverageData,
    FilesCoverageRequest: FilesCoverageRequest,
    FilesCoverageRequestAttributes: FilesCoverageRequestAttributes,
    FilesCoverageRequestData: FilesCoverageRequestData,
    FilesCoverageResponse: FilesCoverageResponse,
    FlakyTest: FlakyTest,
    FlakyTestAttributes: FlakyTestAttributes,
    FlakyTestHistory: FlakyTestHistory,
    FlakyTestHistoryPolicyMeta: FlakyTestHistoryPolicyMeta,
    FlakyTestHistoryPolicyMetaConfig: FlakyTestHistoryPolicyMetaConfig,
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
    PRCoverageSummaryRequest: PRCoverageSummaryRequest,
    PRCoverageSummaryRequestAttributes: PRCoverageSummaryRequestAttributes,
    PRCoverageSummaryRequestData: PRCoverageSummaryRequestData,
    TestOptimizationDeleteServiceSettingsRequest:
      TestOptimizationDeleteServiceSettingsRequest,
    TestOptimizationDeleteServiceSettingsRequestAttributes:
      TestOptimizationDeleteServiceSettingsRequestAttributes,
    TestOptimizationDeleteServiceSettingsRequestData:
      TestOptimizationDeleteServiceSettingsRequestData,
    TestOptimizationFlakyTestsManagementPoliciesAttemptToFix:
      TestOptimizationFlakyTestsManagementPoliciesAttemptToFix,
    TestOptimizationFlakyTestsManagementPoliciesAttributes:
      TestOptimizationFlakyTestsManagementPoliciesAttributes,
    TestOptimizationFlakyTestsManagementPoliciesAutoDisableRule:
      TestOptimizationFlakyTestsManagementPoliciesAutoDisableRule,
    TestOptimizationFlakyTestsManagementPoliciesAutoQuarantineRule:
      TestOptimizationFlakyTestsManagementPoliciesAutoQuarantineRule,
    TestOptimizationFlakyTestsManagementPoliciesBranchRule:
      TestOptimizationFlakyTestsManagementPoliciesBranchRule,
    TestOptimizationFlakyTestsManagementPoliciesData:
      TestOptimizationFlakyTestsManagementPoliciesData,
    TestOptimizationFlakyTestsManagementPoliciesDisabled:
      TestOptimizationFlakyTestsManagementPoliciesDisabled,
    TestOptimizationFlakyTestsManagementPoliciesDisabledFailureRateRule:
      TestOptimizationFlakyTestsManagementPoliciesDisabledFailureRateRule,
    TestOptimizationFlakyTestsManagementPoliciesGetRequest:
      TestOptimizationFlakyTestsManagementPoliciesGetRequest,
    TestOptimizationFlakyTestsManagementPoliciesGetRequestAttributes:
      TestOptimizationFlakyTestsManagementPoliciesGetRequestAttributes,
    TestOptimizationFlakyTestsManagementPoliciesGetRequestData:
      TestOptimizationFlakyTestsManagementPoliciesGetRequestData,
    TestOptimizationFlakyTestsManagementPoliciesQuarantined:
      TestOptimizationFlakyTestsManagementPoliciesQuarantined,
    TestOptimizationFlakyTestsManagementPoliciesQuarantinedFailureRateRule:
      TestOptimizationFlakyTestsManagementPoliciesQuarantinedFailureRateRule,
    TestOptimizationFlakyTestsManagementPoliciesResponse:
      TestOptimizationFlakyTestsManagementPoliciesResponse,
    TestOptimizationFlakyTestsManagementPoliciesUpdateRequest:
      TestOptimizationFlakyTestsManagementPoliciesUpdateRequest,
    TestOptimizationFlakyTestsManagementPoliciesUpdateRequestAttributes:
      TestOptimizationFlakyTestsManagementPoliciesUpdateRequestAttributes,
    TestOptimizationFlakyTestsManagementPoliciesUpdateRequestData:
      TestOptimizationFlakyTestsManagementPoliciesUpdateRequestData,
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

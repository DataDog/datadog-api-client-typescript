import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CheckCanDeleteMonitorResponse } from "./CheckCanDeleteMonitorResponse";
import { CheckCanDeleteMonitorResponseData } from "./CheckCanDeleteMonitorResponseData";
import { Creator } from "./Creator";
import { DeletedMonitor } from "./DeletedMonitor";
import { MatchingDowntime } from "./MatchingDowntime";
import { Monitor } from "./Monitor";
import { MonitorAsset } from "./MonitorAsset";
import { MonitorFormulaAndFunctionCostQueryDefinition } from "./MonitorFormulaAndFunctionCostQueryDefinition";
import { MonitorFormulaAndFunctionDataQualityMonitorOptions } from "./MonitorFormulaAndFunctionDataQualityMonitorOptions";
import { MonitorFormulaAndFunctionDataQualityQueryDefinition } from "./MonitorFormulaAndFunctionDataQualityQueryDefinition";
import { MonitorFormulaAndFunctionEventQueryDefinition } from "./MonitorFormulaAndFunctionEventQueryDefinition";
import { MonitorFormulaAndFunctionEventQueryDefinitionCompute } from "./MonitorFormulaAndFunctionEventQueryDefinitionCompute";
import { MonitorFormulaAndFunctionEventQueryDefinitionSearch } from "./MonitorFormulaAndFunctionEventQueryDefinitionSearch";
import { MonitorFormulaAndFunctionEventQueryGroupBy } from "./MonitorFormulaAndFunctionEventQueryGroupBy";
import { MonitorFormulaAndFunctionEventQueryGroupBySort } from "./MonitorFormulaAndFunctionEventQueryGroupBySort";
import { MonitorGroupSearchResponse } from "./MonitorGroupSearchResponse";
import { MonitorGroupSearchResponseCounts } from "./MonitorGroupSearchResponseCounts";
import { MonitorGroupSearchResult } from "./MonitorGroupSearchResult";
import { MonitorOptions } from "./MonitorOptions";
import { MonitorOptionsAggregation } from "./MonitorOptionsAggregation";
import { MonitorOptionsCustomSchedule } from "./MonitorOptionsCustomSchedule";
import { MonitorOptionsCustomScheduleRecurrence } from "./MonitorOptionsCustomScheduleRecurrence";
import { MonitorOptionsSchedulingOptions } from "./MonitorOptionsSchedulingOptions";
import { MonitorOptionsSchedulingOptionsEvaluationWindow } from "./MonitorOptionsSchedulingOptionsEvaluationWindow";
import { MonitorSearchCountItem } from "./MonitorSearchCountItem";
import { MonitorSearchResponse } from "./MonitorSearchResponse";
import { MonitorSearchResponseCounts } from "./MonitorSearchResponseCounts";
import { MonitorSearchResponseMetadata } from "./MonitorSearchResponseMetadata";
import { MonitorSearchResult } from "./MonitorSearchResult";
import { MonitorSearchResultNotification } from "./MonitorSearchResultNotification";
import { MonitorState } from "./MonitorState";
import { MonitorStateGroup } from "./MonitorStateGroup";
import { MonitorThresholdWindowOptions } from "./MonitorThresholdWindowOptions";
import { MonitorThresholds } from "./MonitorThresholds";
import { MonitorUpdateRequest } from "./MonitorUpdateRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    MonitorAssetCategory: ["runbook"],
    MonitorAssetResourceType: ["notebook"],
    MonitorDeviceID: [
      "laptop_large",
      "tablet",
      "mobile_small",
      "chrome.laptop_large",
      "chrome.tablet",
      "chrome.mobile_small",
      "firefox.laptop_large",
      "firefox.tablet",
      "firefox.mobile_small",
    ],
    MonitorDraftStatus: ["draft", "published"],
    MonitorFormulaAndFunctionCostAggregator: [
      "avg",
      "sum",
      "max",
      "min",
      "last",
      "area",
      "l2norm",
      "percentile",
      "stddev",
    ],
    MonitorFormulaAndFunctionCostDataSource: [
      "metrics",
      "cloud_cost",
      "datadog_usage",
    ],
    MonitorFormulaAndFunctionDataQualityDataSource: ["data_quality_metrics"],
    MonitorFormulaAndFunctionDataQualityModelTypeOverride: [
      "freshness",
      "percentage",
      "any",
    ],
    MonitorFormulaAndFunctionEventAggregation: [
      "count",
      "cardinality",
      "median",
      "pc75",
      "pc90",
      "pc95",
      "pc98",
      "pc99",
      "sum",
      "min",
      "max",
      "avg",
    ],
    MonitorFormulaAndFunctionEventsDataSource: [
      "rum",
      "ci_pipelines",
      "ci_tests",
      "audit",
      "events",
      "logs",
      "spans",
      "database_queries",
      "network",
      "network_path",
    ],
    MonitorOptionsNotificationPresets: [
      "show_all",
      "hide_query",
      "hide_handles",
      "hide_all",
      "hide_query_and_handles",
      "show_only_snapshot",
      "hide_handles_and_footer",
    ],
    MonitorOverallStates: [
      "Alert",
      "Ignored",
      "No Data",
      "OK",
      "Skipped",
      "Unknown",
      "Warn",
    ],
    MonitorRenotifyStatusType: ["alert", "warn", "no data"],
    MonitorType: [
      "composite",
      "event alert",
      "log alert",
      "metric alert",
      "process alert",
      "query alert",
      "rum alert",
      "service check",
      "synthetics alert",
      "trace-analytics alert",
      "slo alert",
      "event-v2 alert",
      "audit alert",
      "ci-pipelines alert",
      "ci-tests alert",
      "error-tracking alert",
      "database-monitoring alert",
      "network-performance alert",
      "cost alert",
      "data-quality alert",
      "network-path alert",
    ],
    OnMissingDataOption: [
      "default",
      "show_no_data",
      "show_and_notify_no_data",
      "resolve",
    ],
    QuerySortOrder: ["asc", "desc"],
  },
  oneOfMap: {
    MonitorFormulaAndFunctionQueryDefinition: [
      "MonitorFormulaAndFunctionEventQueryDefinition",
      "MonitorFormulaAndFunctionCostQueryDefinition",
      "MonitorFormulaAndFunctionDataQualityQueryDefinition",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CheckCanDeleteMonitorResponse: CheckCanDeleteMonitorResponse,
    CheckCanDeleteMonitorResponseData: CheckCanDeleteMonitorResponseData,
    Creator: Creator,
    DeletedMonitor: DeletedMonitor,
    MatchingDowntime: MatchingDowntime,
    Monitor: Monitor,
    MonitorAsset: MonitorAsset,
    MonitorFormulaAndFunctionCostQueryDefinition:
      MonitorFormulaAndFunctionCostQueryDefinition,
    MonitorFormulaAndFunctionDataQualityMonitorOptions:
      MonitorFormulaAndFunctionDataQualityMonitorOptions,
    MonitorFormulaAndFunctionDataQualityQueryDefinition:
      MonitorFormulaAndFunctionDataQualityQueryDefinition,
    MonitorFormulaAndFunctionEventQueryDefinition:
      MonitorFormulaAndFunctionEventQueryDefinition,
    MonitorFormulaAndFunctionEventQueryDefinitionCompute:
      MonitorFormulaAndFunctionEventQueryDefinitionCompute,
    MonitorFormulaAndFunctionEventQueryDefinitionSearch:
      MonitorFormulaAndFunctionEventQueryDefinitionSearch,
    MonitorFormulaAndFunctionEventQueryGroupBy:
      MonitorFormulaAndFunctionEventQueryGroupBy,
    MonitorFormulaAndFunctionEventQueryGroupBySort:
      MonitorFormulaAndFunctionEventQueryGroupBySort,
    MonitorGroupSearchResponse: MonitorGroupSearchResponse,
    MonitorGroupSearchResponseCounts: MonitorGroupSearchResponseCounts,
    MonitorGroupSearchResult: MonitorGroupSearchResult,
    MonitorOptions: MonitorOptions,
    MonitorOptionsAggregation: MonitorOptionsAggregation,
    MonitorOptionsCustomSchedule: MonitorOptionsCustomSchedule,
    MonitorOptionsCustomScheduleRecurrence:
      MonitorOptionsCustomScheduleRecurrence,
    MonitorOptionsSchedulingOptions: MonitorOptionsSchedulingOptions,
    MonitorOptionsSchedulingOptionsEvaluationWindow:
      MonitorOptionsSchedulingOptionsEvaluationWindow,
    MonitorSearchCountItem: MonitorSearchCountItem,
    MonitorSearchResponse: MonitorSearchResponse,
    MonitorSearchResponseCounts: MonitorSearchResponseCounts,
    MonitorSearchResponseMetadata: MonitorSearchResponseMetadata,
    MonitorSearchResult: MonitorSearchResult,
    MonitorSearchResultNotification: MonitorSearchResultNotification,
    MonitorState: MonitorState,
    MonitorStateGroup: MonitorStateGroup,
    MonitorThresholdWindowOptions: MonitorThresholdWindowOptions,
    MonitorThresholds: MonitorThresholds,
    MonitorUpdateRequest: MonitorUpdateRequest,
  },
};

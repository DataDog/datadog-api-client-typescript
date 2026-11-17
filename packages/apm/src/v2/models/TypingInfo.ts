import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { APMTraceSpan } from "./APMTraceSpan";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { PrunedTraceAttributes } from "./PrunedTraceAttributes";
import { PrunedTraceData } from "./PrunedTraceData";
import { PrunedTraceResponse } from "./PrunedTraceResponse";
import { ReorderRetentionFiltersRequest } from "./ReorderRetentionFiltersRequest";
import { RetentionFilter } from "./RetentionFilter";
import { RetentionFilterAll } from "./RetentionFilterAll";
import { RetentionFilterAllAttributes } from "./RetentionFilterAllAttributes";
import { RetentionFilterAttributes } from "./RetentionFilterAttributes";
import { RetentionFilterCreateAttributes } from "./RetentionFilterCreateAttributes";
import { RetentionFilterCreateData } from "./RetentionFilterCreateData";
import { RetentionFilterCreateRequest } from "./RetentionFilterCreateRequest";
import { RetentionFilterCreateResponse } from "./RetentionFilterCreateResponse";
import { RetentionFilterResponse } from "./RetentionFilterResponse";
import { RetentionFilterUpdateAttributes } from "./RetentionFilterUpdateAttributes";
import { RetentionFilterUpdateData } from "./RetentionFilterUpdateData";
import { RetentionFilterUpdateRequest } from "./RetentionFilterUpdateRequest";
import { RetentionFilterWithoutAttributes } from "./RetentionFilterWithoutAttributes";
import { RetentionFiltersResponse } from "./RetentionFiltersResponse";
import { ServiceList } from "./ServiceList";
import { ServiceListData } from "./ServiceListData";
import { ServiceListDataAttributes } from "./ServiceListDataAttributes";
import { ServiceListDataAttributesMetadataItems } from "./ServiceListDataAttributesMetadataItems";
import { Span } from "./Span";
import { SpansAggregateBucket } from "./SpansAggregateBucket";
import { SpansAggregateBucketAttributes } from "./SpansAggregateBucketAttributes";
import { SpansAggregateBucketValueTimeseriesPoint } from "./SpansAggregateBucketValueTimeseriesPoint";
import { SpansAggregateData } from "./SpansAggregateData";
import { SpansAggregateRequest } from "./SpansAggregateRequest";
import { SpansAggregateRequestAttributes } from "./SpansAggregateRequestAttributes";
import { SpansAggregateResponse } from "./SpansAggregateResponse";
import { SpansAggregateResponseMetadata } from "./SpansAggregateResponseMetadata";
import { SpansAggregateSort } from "./SpansAggregateSort";
import { SpansAttributes } from "./SpansAttributes";
import { SpansCompute } from "./SpansCompute";
import { SpansFilter } from "./SpansFilter";
import { SpansFilterCreate } from "./SpansFilterCreate";
import { SpansGroupBy } from "./SpansGroupBy";
import { SpansGroupByHistogram } from "./SpansGroupByHistogram";
import { SpansListRequest } from "./SpansListRequest";
import { SpansListRequestAttributes } from "./SpansListRequestAttributes";
import { SpansListRequestData } from "./SpansListRequestData";
import { SpansListRequestPage } from "./SpansListRequestPage";
import { SpansListResponse } from "./SpansListResponse";
import { SpansListResponseLinks } from "./SpansListResponseLinks";
import { SpansListResponseMetadata } from "./SpansListResponseMetadata";
import { SpansMetricCompute } from "./SpansMetricCompute";
import { SpansMetricCreateAttributes } from "./SpansMetricCreateAttributes";
import { SpansMetricCreateData } from "./SpansMetricCreateData";
import { SpansMetricCreateRequest } from "./SpansMetricCreateRequest";
import { SpansMetricFilter } from "./SpansMetricFilter";
import { SpansMetricGroupBy } from "./SpansMetricGroupBy";
import { SpansMetricResponse } from "./SpansMetricResponse";
import { SpansMetricResponseAttributes } from "./SpansMetricResponseAttributes";
import { SpansMetricResponseCompute } from "./SpansMetricResponseCompute";
import { SpansMetricResponseData } from "./SpansMetricResponseData";
import { SpansMetricResponseFilter } from "./SpansMetricResponseFilter";
import { SpansMetricResponseGroupBy } from "./SpansMetricResponseGroupBy";
import { SpansMetricUpdateAttributes } from "./SpansMetricUpdateAttributes";
import { SpansMetricUpdateCompute } from "./SpansMetricUpdateCompute";
import { SpansMetricUpdateData } from "./SpansMetricUpdateData";
import { SpansMetricUpdateRequest } from "./SpansMetricUpdateRequest";
import { SpansMetricsResponse } from "./SpansMetricsResponse";
import { SpansQueryFilter } from "./SpansQueryFilter";
import { SpansQueryOptions } from "./SpansQueryOptions";
import { SpansResponseMetadataPage } from "./SpansResponseMetadataPage";
import { SpansWarning } from "./SpansWarning";
import { SummarizedSpan } from "./SummarizedSpan";
import { SummarizedTrace } from "./SummarizedTrace";
import { TraceAttributes } from "./TraceAttributes";
import { TraceData } from "./TraceData";
import { TraceResponse } from "./TraceResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    APMSpanErrorFlag: [0, 1],
    ApmRetentionFilterType: ["apm_retention_filter"],
    PrunedTraceType: ["pruned_trace"],
    RetentionFilterAllType: [
      "spans-sampling-processor",
      "spans-errors-sampling-processor",
      "spans-appsec-sampling-processor",
    ],
    RetentionFilterType: ["spans-sampling-processor"],
    ServiceListDataType: ["services_list"],
    SpansAggregateBucketType: ["bucket"],
    SpansAggregateRequestType: ["aggregate_request"],
    SpansAggregateResponseStatus: ["done", "timeout"],
    SpansAggregateSortType: ["alphabetical", "measure"],
    SpansAggregationFunction: [
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
    ],
    SpansComputeType: ["timeseries", "total"],
    SpansListRequestType: ["search_request"],
    SpansMetricComputeAggregationType: ["count", "distribution"],
    SpansMetricType: ["spans_metrics"],
    SpansSort: ["timestamp", "-timestamp"],
    SpansSortOrder: ["asc", "desc"],
    SpansType: ["spans"],
    TraceType: ["trace"],
  },
  oneOfMap: {
    SpansAggregateBucketValue: [
      "string",
      "number",
      "Array<SpansAggregateBucketValueTimeseriesPoint>",
    ],
    SpansGroupByMissing: ["string", "number"],
    SpansGroupByTotal: ["boolean", "string", "number"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    APMTraceSpan: APMTraceSpan,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    PrunedTraceAttributes: PrunedTraceAttributes,
    PrunedTraceData: PrunedTraceData,
    PrunedTraceResponse: PrunedTraceResponse,
    ReorderRetentionFiltersRequest: ReorderRetentionFiltersRequest,
    RetentionFilter: RetentionFilter,
    RetentionFilterAll: RetentionFilterAll,
    RetentionFilterAllAttributes: RetentionFilterAllAttributes,
    RetentionFilterAttributes: RetentionFilterAttributes,
    RetentionFilterCreateAttributes: RetentionFilterCreateAttributes,
    RetentionFilterCreateData: RetentionFilterCreateData,
    RetentionFilterCreateRequest: RetentionFilterCreateRequest,
    RetentionFilterCreateResponse: RetentionFilterCreateResponse,
    RetentionFilterResponse: RetentionFilterResponse,
    RetentionFilterUpdateAttributes: RetentionFilterUpdateAttributes,
    RetentionFilterUpdateData: RetentionFilterUpdateData,
    RetentionFilterUpdateRequest: RetentionFilterUpdateRequest,
    RetentionFilterWithoutAttributes: RetentionFilterWithoutAttributes,
    RetentionFiltersResponse: RetentionFiltersResponse,
    ServiceList: ServiceList,
    ServiceListData: ServiceListData,
    ServiceListDataAttributes: ServiceListDataAttributes,
    ServiceListDataAttributesMetadataItems:
      ServiceListDataAttributesMetadataItems,
    Span: Span,
    SpansAggregateBucket: SpansAggregateBucket,
    SpansAggregateBucketAttributes: SpansAggregateBucketAttributes,
    SpansAggregateBucketValueTimeseriesPoint:
      SpansAggregateBucketValueTimeseriesPoint,
    SpansAggregateData: SpansAggregateData,
    SpansAggregateRequest: SpansAggregateRequest,
    SpansAggregateRequestAttributes: SpansAggregateRequestAttributes,
    SpansAggregateResponse: SpansAggregateResponse,
    SpansAggregateResponseMetadata: SpansAggregateResponseMetadata,
    SpansAggregateSort: SpansAggregateSort,
    SpansAttributes: SpansAttributes,
    SpansCompute: SpansCompute,
    SpansFilter: SpansFilter,
    SpansFilterCreate: SpansFilterCreate,
    SpansGroupBy: SpansGroupBy,
    SpansGroupByHistogram: SpansGroupByHistogram,
    SpansListRequest: SpansListRequest,
    SpansListRequestAttributes: SpansListRequestAttributes,
    SpansListRequestData: SpansListRequestData,
    SpansListRequestPage: SpansListRequestPage,
    SpansListResponse: SpansListResponse,
    SpansListResponseLinks: SpansListResponseLinks,
    SpansListResponseMetadata: SpansListResponseMetadata,
    SpansMetricCompute: SpansMetricCompute,
    SpansMetricCreateAttributes: SpansMetricCreateAttributes,
    SpansMetricCreateData: SpansMetricCreateData,
    SpansMetricCreateRequest: SpansMetricCreateRequest,
    SpansMetricFilter: SpansMetricFilter,
    SpansMetricGroupBy: SpansMetricGroupBy,
    SpansMetricResponse: SpansMetricResponse,
    SpansMetricResponseAttributes: SpansMetricResponseAttributes,
    SpansMetricResponseCompute: SpansMetricResponseCompute,
    SpansMetricResponseData: SpansMetricResponseData,
    SpansMetricResponseFilter: SpansMetricResponseFilter,
    SpansMetricResponseGroupBy: SpansMetricResponseGroupBy,
    SpansMetricUpdateAttributes: SpansMetricUpdateAttributes,
    SpansMetricUpdateCompute: SpansMetricUpdateCompute,
    SpansMetricUpdateData: SpansMetricUpdateData,
    SpansMetricUpdateRequest: SpansMetricUpdateRequest,
    SpansMetricsResponse: SpansMetricsResponse,
    SpansQueryFilter: SpansQueryFilter,
    SpansQueryOptions: SpansQueryOptions,
    SpansResponseMetadataPage: SpansResponseMetadataPage,
    SpansWarning: SpansWarning,
    SummarizedSpan: SummarizedSpan,
    SummarizedTrace: SummarizedTrace,
    TraceAttributes: TraceAttributes,
    TraceData: TraceData,
    TraceResponse: TraceResponse,
  },
};

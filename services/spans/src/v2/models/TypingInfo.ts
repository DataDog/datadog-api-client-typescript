import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
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
import { SpansGroupBy } from "./SpansGroupBy";
import { SpansGroupByHistogram } from "./SpansGroupByHistogram";
import { SpansListRequest } from "./SpansListRequest";
import { SpansListRequestAttributes } from "./SpansListRequestAttributes";
import { SpansListRequestData } from "./SpansListRequestData";
import { SpansListRequestPage } from "./SpansListRequestPage";
import { SpansListResponse } from "./SpansListResponse";
import { SpansListResponseLinks } from "./SpansListResponseLinks";
import { SpansListResponseMetadata } from "./SpansListResponseMetadata";
import { SpansQueryFilter } from "./SpansQueryFilter";
import { SpansQueryOptions } from "./SpansQueryOptions";
import { SpansResponseMetadataPage } from "./SpansResponseMetadataPage";
import { SpansWarning } from "./SpansWarning";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
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
    SpansSort: ["timestamp", "-timestamp"],
    SpansSortOrder: ["asc", "desc"],
    SpansType: ["spans"],
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
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
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
    SpansGroupBy: SpansGroupBy,
    SpansGroupByHistogram: SpansGroupByHistogram,
    SpansListRequest: SpansListRequest,
    SpansListRequestAttributes: SpansListRequestAttributes,
    SpansListRequestData: SpansListRequestData,
    SpansListRequestPage: SpansListRequestPage,
    SpansListResponse: SpansListResponse,
    SpansListResponseLinks: SpansListResponseLinks,
    SpansListResponseMetadata: SpansListResponseMetadata,
    SpansQueryFilter: SpansQueryFilter,
    SpansQueryOptions: SpansQueryOptions,
    SpansResponseMetadataPage: SpansResponseMetadataPage,
    SpansWarning: SpansWarning,
  },
};

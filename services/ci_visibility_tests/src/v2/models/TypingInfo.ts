import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
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

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
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
  },
};

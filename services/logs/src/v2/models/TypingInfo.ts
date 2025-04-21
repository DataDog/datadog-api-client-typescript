import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { HTTPLogError } from "./HTTPLogError";
import { HTTPLogErrors } from "./HTTPLogErrors";
import { HTTPLogItem } from "./HTTPLogItem";
import { Log } from "./Log";
import { LogAttributes } from "./LogAttributes";
import { LogsAggregateBucket } from "./LogsAggregateBucket";
import { LogsAggregateBucketValueTimeseriesPoint } from "./LogsAggregateBucketValueTimeseriesPoint";
import { LogsAggregateRequest } from "./LogsAggregateRequest";
import { LogsAggregateRequestPage } from "./LogsAggregateRequestPage";
import { LogsAggregateResponse } from "./LogsAggregateResponse";
import { LogsAggregateResponseData } from "./LogsAggregateResponseData";
import { LogsAggregateSort } from "./LogsAggregateSort";
import { LogsCompute } from "./LogsCompute";
import { LogsGroupBy } from "./LogsGroupBy";
import { LogsGroupByHistogram } from "./LogsGroupByHistogram";
import { LogsListRequest } from "./LogsListRequest";
import { LogsListRequestPage } from "./LogsListRequestPage";
import { LogsListResponse } from "./LogsListResponse";
import { LogsListResponseLinks } from "./LogsListResponseLinks";
import { LogsQueryFilter } from "./LogsQueryFilter";
import { LogsQueryOptions } from "./LogsQueryOptions";
import { LogsResponseMetadata } from "./LogsResponseMetadata";
import { LogsResponseMetadataPage } from "./LogsResponseMetadataPage";
import { LogsWarning } from "./LogsWarning";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ContentEncoding: ["identity", "gzip", "deflate"],
    LogType: ["log"],
    LogsAggregateResponseStatus: ["done", "timeout"],
    LogsAggregateSortType: ["alphabetical", "measure"],
    LogsAggregationFunction: [
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
    LogsComputeType: ["timeseries", "total"],
    LogsSort: ["timestamp", "-timestamp"],
    LogsSortOrder: ["asc", "desc"],
    LogsStorageTier: ["indexes", "online-archives", "flex"],
  },
  oneOfMap: {
    LogsAggregateBucketValue: [
      "string",
      "number",
      "Array<LogsAggregateBucketValueTimeseriesPoint>",
    ],
    LogsGroupByMissing: ["string", "number"],
    LogsGroupByTotal: ["boolean", "string", "number"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    HTTPLogError: HTTPLogError,
    HTTPLogErrors: HTTPLogErrors,
    HTTPLogItem: HTTPLogItem,
    Log: Log,
    LogAttributes: LogAttributes,
    LogsAggregateBucket: LogsAggregateBucket,
    LogsAggregateBucketValueTimeseriesPoint:
      LogsAggregateBucketValueTimeseriesPoint,
    LogsAggregateRequest: LogsAggregateRequest,
    LogsAggregateRequestPage: LogsAggregateRequestPage,
    LogsAggregateResponse: LogsAggregateResponse,
    LogsAggregateResponseData: LogsAggregateResponseData,
    LogsAggregateSort: LogsAggregateSort,
    LogsCompute: LogsCompute,
    LogsGroupBy: LogsGroupBy,
    LogsGroupByHistogram: LogsGroupByHistogram,
    LogsListRequest: LogsListRequest,
    LogsListRequestPage: LogsListRequestPage,
    LogsListResponse: LogsListResponse,
    LogsListResponseLinks: LogsListResponseLinks,
    LogsQueryFilter: LogsQueryFilter,
    LogsQueryOptions: LogsQueryOptions,
    LogsResponseMetadata: LogsResponseMetadata,
    LogsResponseMetadataPage: LogsResponseMetadataPage,
    LogsWarning: LogsWarning,
  },
};

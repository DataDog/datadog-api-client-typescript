import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { RUMAggregateBucketValueTimeseriesPoint } from "./RUMAggregateBucketValueTimeseriesPoint";
import { RUMAggregateRequest } from "./RUMAggregateRequest";
import { RUMAggregateSort } from "./RUMAggregateSort";
import { RUMAggregationBucketsResponse } from "./RUMAggregationBucketsResponse";
import { RUMAnalyticsAggregateResponse } from "./RUMAnalyticsAggregateResponse";
import { RUMApplication } from "./RUMApplication";
import { RUMApplicationAttributes } from "./RUMApplicationAttributes";
import { RUMApplicationCreate } from "./RUMApplicationCreate";
import { RUMApplicationCreateAttributes } from "./RUMApplicationCreateAttributes";
import { RUMApplicationCreateRequest } from "./RUMApplicationCreateRequest";
import { RUMApplicationList } from "./RUMApplicationList";
import { RUMApplicationListAttributes } from "./RUMApplicationListAttributes";
import { RUMApplicationResponse } from "./RUMApplicationResponse";
import { RUMApplicationUpdate } from "./RUMApplicationUpdate";
import { RUMApplicationUpdateAttributes } from "./RUMApplicationUpdateAttributes";
import { RUMApplicationUpdateRequest } from "./RUMApplicationUpdateRequest";
import { RUMApplicationsResponse } from "./RUMApplicationsResponse";
import { RUMBucketResponse } from "./RUMBucketResponse";
import { RUMCompute } from "./RUMCompute";
import { RUMEvent } from "./RUMEvent";
import { RUMEventAttributes } from "./RUMEventAttributes";
import { RUMEventsResponse } from "./RUMEventsResponse";
import { RUMGroupBy } from "./RUMGroupBy";
import { RUMGroupByHistogram } from "./RUMGroupByHistogram";
import { RUMQueryFilter } from "./RUMQueryFilter";
import { RUMQueryOptions } from "./RUMQueryOptions";
import { RUMQueryPageOptions } from "./RUMQueryPageOptions";
import { RUMResponseLinks } from "./RUMResponseLinks";
import { RUMResponseMetadata } from "./RUMResponseMetadata";
import { RUMResponsePage } from "./RUMResponsePage";
import { RUMSearchEventsRequest } from "./RUMSearchEventsRequest";
import { RUMWarning } from "./RUMWarning";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RUMAggregateSortType: ["alphabetical", "measure"],
    RUMAggregationFunction: [
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
    RUMApplicationCreateType: ["rum_application_create"],
    RUMApplicationListType: ["rum_application"],
    RUMApplicationType: ["rum_application"],
    RUMApplicationUpdateType: ["rum_application_update"],
    RUMComputeType: ["timeseries", "total"],
    RUMEventType: ["rum"],
    RUMResponseStatus: ["done", "timeout"],
    RUMSort: ["timestamp", "-timestamp"],
    RUMSortOrder: ["asc", "desc"],
  },
  oneOfMap: {
    RUMAggregateBucketValue: [
      "string",
      "number",
      "Array<RUMAggregateBucketValueTimeseriesPoint>",
    ],
    RUMGroupByMissing: ["string", "number"],
    RUMGroupByTotal: ["boolean", "string", "number"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    RUMAggregateBucketValueTimeseriesPoint:
      RUMAggregateBucketValueTimeseriesPoint,
    RUMAggregateRequest: RUMAggregateRequest,
    RUMAggregateSort: RUMAggregateSort,
    RUMAggregationBucketsResponse: RUMAggregationBucketsResponse,
    RUMAnalyticsAggregateResponse: RUMAnalyticsAggregateResponse,
    RUMApplication: RUMApplication,
    RUMApplicationAttributes: RUMApplicationAttributes,
    RUMApplicationCreate: RUMApplicationCreate,
    RUMApplicationCreateAttributes: RUMApplicationCreateAttributes,
    RUMApplicationCreateRequest: RUMApplicationCreateRequest,
    RUMApplicationList: RUMApplicationList,
    RUMApplicationListAttributes: RUMApplicationListAttributes,
    RUMApplicationResponse: RUMApplicationResponse,
    RUMApplicationUpdate: RUMApplicationUpdate,
    RUMApplicationUpdateAttributes: RUMApplicationUpdateAttributes,
    RUMApplicationUpdateRequest: RUMApplicationUpdateRequest,
    RUMApplicationsResponse: RUMApplicationsResponse,
    RUMBucketResponse: RUMBucketResponse,
    RUMCompute: RUMCompute,
    RUMEvent: RUMEvent,
    RUMEventAttributes: RUMEventAttributes,
    RUMEventsResponse: RUMEventsResponse,
    RUMGroupBy: RUMGroupBy,
    RUMGroupByHistogram: RUMGroupByHistogram,
    RUMQueryFilter: RUMQueryFilter,
    RUMQueryOptions: RUMQueryOptions,
    RUMQueryPageOptions: RUMQueryPageOptions,
    RUMResponseLinks: RUMResponseLinks,
    RUMResponseMetadata: RUMResponseMetadata,
    RUMResponsePage: RUMResponsePage,
    RUMSearchEventsRequest: RUMSearchEventsRequest,
    RUMWarning: RUMWarning,
  },
};

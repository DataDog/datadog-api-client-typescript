import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DashboardSearchAggregationBucketKey } from "./DashboardSearchAggregationBucketKey";
import { DashboardSearchAggregationBucketMultiKey } from "./DashboardSearchAggregationBucketMultiKey";
import { DashboardSearchAggregations } from "./DashboardSearchAggregations";
import { DashboardSearchAttributes } from "./DashboardSearchAttributes";
import { DashboardSearchMetadata } from "./DashboardSearchMetadata";
import { DashboardSearchResponse } from "./DashboardSearchResponse";
import { DashboardSearchResponseMeta } from "./DashboardSearchResponseMeta";
import { DashboardSearchResultData } from "./DashboardSearchResultData";
import { DashboardSearchUser } from "./DashboardSearchUser";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    MetricDashboardType: ["dashboards"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DashboardSearchAggregationBucketKey: DashboardSearchAggregationBucketKey,
    DashboardSearchAggregationBucketMultiKey:
      DashboardSearchAggregationBucketMultiKey,
    DashboardSearchAggregations: DashboardSearchAggregations,
    DashboardSearchAttributes: DashboardSearchAttributes,
    DashboardSearchMetadata: DashboardSearchMetadata,
    DashboardSearchResponse: DashboardSearchResponse,
    DashboardSearchResponseMeta: DashboardSearchResponseMeta,
    DashboardSearchResultData: DashboardSearchResultData,
    DashboardSearchUser: DashboardSearchUser,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};

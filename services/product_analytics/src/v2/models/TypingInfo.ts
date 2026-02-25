import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ProductAnalyticsAnalyticsQuery } from "./ProductAnalyticsAnalyticsQuery";
import { ProductAnalyticsAnalyticsRequest } from "./ProductAnalyticsAnalyticsRequest";
import { ProductAnalyticsAnalyticsRequestAttributes } from "./ProductAnalyticsAnalyticsRequestAttributes";
import { ProductAnalyticsAnalyticsRequestData } from "./ProductAnalyticsAnalyticsRequestData";
import { ProductAnalyticsAudienceAccountSubquery } from "./ProductAnalyticsAudienceAccountSubquery";
import { ProductAnalyticsAudienceFilters } from "./ProductAnalyticsAudienceFilters";
import { ProductAnalyticsAudienceSegmentSubquery } from "./ProductAnalyticsAudienceSegmentSubquery";
import { ProductAnalyticsAudienceUserSubquery } from "./ProductAnalyticsAudienceUserSubquery";
import { ProductAnalyticsCompute } from "./ProductAnalyticsCompute";
import { ProductAnalyticsEventQuery } from "./ProductAnalyticsEventQuery";
import { ProductAnalyticsEventSearch } from "./ProductAnalyticsEventSearch";
import { ProductAnalyticsGroupBy } from "./ProductAnalyticsGroupBy";
import { ProductAnalyticsGroupBySort } from "./ProductAnalyticsGroupBySort";
import { ProductAnalyticsInterval } from "./ProductAnalyticsInterval";
import { ProductAnalyticsOccurrenceFilter } from "./ProductAnalyticsOccurrenceFilter";
import { ProductAnalyticsOccurrenceQuery } from "./ProductAnalyticsOccurrenceQuery";
import { ProductAnalyticsOccurrenceSearch } from "./ProductAnalyticsOccurrenceSearch";
import { ProductAnalyticsResponseMeta } from "./ProductAnalyticsResponseMeta";
import { ProductAnalyticsScalarColumn } from "./ProductAnalyticsScalarColumn";
import { ProductAnalyticsScalarColumnMeta } from "./ProductAnalyticsScalarColumnMeta";
import { ProductAnalyticsScalarResponse } from "./ProductAnalyticsScalarResponse";
import { ProductAnalyticsScalarResponseAttributes } from "./ProductAnalyticsScalarResponseAttributes";
import { ProductAnalyticsScalarResponseData } from "./ProductAnalyticsScalarResponseData";
import { ProductAnalyticsSerie } from "./ProductAnalyticsSerie";
import { ProductAnalyticsServerSideEventError } from "./ProductAnalyticsServerSideEventError";
import { ProductAnalyticsServerSideEventErrors } from "./ProductAnalyticsServerSideEventErrors";
import { ProductAnalyticsServerSideEventItem } from "./ProductAnalyticsServerSideEventItem";
import { ProductAnalyticsServerSideEventItemAccount } from "./ProductAnalyticsServerSideEventItemAccount";
import { ProductAnalyticsServerSideEventItemApplication } from "./ProductAnalyticsServerSideEventItemApplication";
import { ProductAnalyticsServerSideEventItemEvent } from "./ProductAnalyticsServerSideEventItemEvent";
import { ProductAnalyticsServerSideEventItemSession } from "./ProductAnalyticsServerSideEventItemSession";
import { ProductAnalyticsServerSideEventItemUsr } from "./ProductAnalyticsServerSideEventItemUsr";
import { ProductAnalyticsTimeseriesResponse } from "./ProductAnalyticsTimeseriesResponse";
import { ProductAnalyticsTimeseriesResponseAttributes } from "./ProductAnalyticsTimeseriesResponseAttributes";
import { ProductAnalyticsTimeseriesResponseData } from "./ProductAnalyticsTimeseriesResponseData";
import { ProductAnalyticsUnit } from "./ProductAnalyticsUnit";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ProductAnalyticsAnalyticsRequestType: [
      "formula_analytics_extended_request",
    ],
    ProductAnalyticsEventQueryDataSource: ["product_analytics"],
    ProductAnalyticsExecutionType: [
      "simple",
      "background",
      "trino-multistep",
      "materialized-view",
    ],
    ProductAnalyticsOccurrenceQueryDataSource: ["product_analytics_occurrence"],
    ProductAnalyticsResponseMetaStatus: ["done", "running", "timeout"],
    ProductAnalyticsScalarColumnType: ["number", "group"],
    ProductAnalyticsScalarResponseType: ["scalar_response"],
    ProductAnalyticsServerSideEventItemType: ["server"],
    ProductAnalyticsTimeseriesResponseType: ["timeseries_response"],
    QuerySortOrder: ["asc", "desc"],
  },
  oneOfMap: {
    ProductAnalyticsBaseQuery: [
      "ProductAnalyticsEventQuery",
      "ProductAnalyticsOccurrenceQuery",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ProductAnalyticsAnalyticsQuery: ProductAnalyticsAnalyticsQuery,
    ProductAnalyticsAnalyticsRequest: ProductAnalyticsAnalyticsRequest,
    ProductAnalyticsAnalyticsRequestAttributes:
      ProductAnalyticsAnalyticsRequestAttributes,
    ProductAnalyticsAnalyticsRequestData: ProductAnalyticsAnalyticsRequestData,
    ProductAnalyticsAudienceAccountSubquery:
      ProductAnalyticsAudienceAccountSubquery,
    ProductAnalyticsAudienceFilters: ProductAnalyticsAudienceFilters,
    ProductAnalyticsAudienceSegmentSubquery:
      ProductAnalyticsAudienceSegmentSubquery,
    ProductAnalyticsAudienceUserSubquery: ProductAnalyticsAudienceUserSubquery,
    ProductAnalyticsCompute: ProductAnalyticsCompute,
    ProductAnalyticsEventQuery: ProductAnalyticsEventQuery,
    ProductAnalyticsEventSearch: ProductAnalyticsEventSearch,
    ProductAnalyticsGroupBy: ProductAnalyticsGroupBy,
    ProductAnalyticsGroupBySort: ProductAnalyticsGroupBySort,
    ProductAnalyticsInterval: ProductAnalyticsInterval,
    ProductAnalyticsOccurrenceFilter: ProductAnalyticsOccurrenceFilter,
    ProductAnalyticsOccurrenceQuery: ProductAnalyticsOccurrenceQuery,
    ProductAnalyticsOccurrenceSearch: ProductAnalyticsOccurrenceSearch,
    ProductAnalyticsResponseMeta: ProductAnalyticsResponseMeta,
    ProductAnalyticsScalarColumn: ProductAnalyticsScalarColumn,
    ProductAnalyticsScalarColumnMeta: ProductAnalyticsScalarColumnMeta,
    ProductAnalyticsScalarResponse: ProductAnalyticsScalarResponse,
    ProductAnalyticsScalarResponseAttributes:
      ProductAnalyticsScalarResponseAttributes,
    ProductAnalyticsScalarResponseData: ProductAnalyticsScalarResponseData,
    ProductAnalyticsSerie: ProductAnalyticsSerie,
    ProductAnalyticsServerSideEventError: ProductAnalyticsServerSideEventError,
    ProductAnalyticsServerSideEventErrors:
      ProductAnalyticsServerSideEventErrors,
    ProductAnalyticsServerSideEventItem: ProductAnalyticsServerSideEventItem,
    ProductAnalyticsServerSideEventItemAccount:
      ProductAnalyticsServerSideEventItemAccount,
    ProductAnalyticsServerSideEventItemApplication:
      ProductAnalyticsServerSideEventItemApplication,
    ProductAnalyticsServerSideEventItemEvent:
      ProductAnalyticsServerSideEventItemEvent,
    ProductAnalyticsServerSideEventItemSession:
      ProductAnalyticsServerSideEventItemSession,
    ProductAnalyticsServerSideEventItemUsr:
      ProductAnalyticsServerSideEventItemUsr,
    ProductAnalyticsTimeseriesResponse: ProductAnalyticsTimeseriesResponse,
    ProductAnalyticsTimeseriesResponseAttributes:
      ProductAnalyticsTimeseriesResponseAttributes,
    ProductAnalyticsTimeseriesResponseData:
      ProductAnalyticsTimeseriesResponseData,
    ProductAnalyticsUnit: ProductAnalyticsUnit,
  },
};

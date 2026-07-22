import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DdsqlTabularQueryColumn } from "./DdsqlTabularQueryColumn";
import { DdsqlTabularQueryFetchRequest } from "./DdsqlTabularQueryFetchRequest";
import { DdsqlTabularQueryFetchRequestAttributes } from "./DdsqlTabularQueryFetchRequestAttributes";
import { DdsqlTabularQueryFetchRequestData } from "./DdsqlTabularQueryFetchRequestData";
import { DdsqlTabularQueryRequest } from "./DdsqlTabularQueryRequest";
import { DdsqlTabularQueryRequestAttributes } from "./DdsqlTabularQueryRequestAttributes";
import { DdsqlTabularQueryRequestData } from "./DdsqlTabularQueryRequestData";
import { DdsqlTabularQueryResponse } from "./DdsqlTabularQueryResponse";
import { DdsqlTabularQueryResponseAttributes } from "./DdsqlTabularQueryResponseAttributes";
import { DdsqlTabularQueryResponseData } from "./DdsqlTabularQueryResponseData";
import { DdsqlTabularQueryResponseMeta } from "./DdsqlTabularQueryResponseMeta";
import { DdsqlTabularQueryTimeWindow } from "./DdsqlTabularQueryTimeWindow";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DdsqlTabularQueryFetchRequestType: ["ddsql_query_fetch_request"],
    DdsqlTabularQueryRequestType: ["ddsql_query_request"],
    DdsqlTabularQueryResponseType: ["ddsql_query_response"],
    DdsqlTabularQueryState: ["running", "completed"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DdsqlTabularQueryColumn: DdsqlTabularQueryColumn,
    DdsqlTabularQueryFetchRequest: DdsqlTabularQueryFetchRequest,
    DdsqlTabularQueryFetchRequestAttributes: DdsqlTabularQueryFetchRequestAttributes,
    DdsqlTabularQueryFetchRequestData: DdsqlTabularQueryFetchRequestData,
    DdsqlTabularQueryRequest: DdsqlTabularQueryRequest,
    DdsqlTabularQueryRequestAttributes: DdsqlTabularQueryRequestAttributes,
    DdsqlTabularQueryRequestData: DdsqlTabularQueryRequestData,
    DdsqlTabularQueryResponse: DdsqlTabularQueryResponse,
    DdsqlTabularQueryResponseAttributes: DdsqlTabularQueryResponseAttributes,
    DdsqlTabularQueryResponseData: DdsqlTabularQueryResponseData,
    DdsqlTabularQueryResponseMeta: DdsqlTabularQueryResponseMeta,
    DdsqlTabularQueryTimeWindow: DdsqlTabularQueryTimeWindow,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { HTTPLogError } from "./HTTPLogError";
import { HTTPLogItem } from "./HTTPLogItem";
import { Log } from "./Log";
import { LogContent } from "./LogContent";
import { LogsAPIError } from "./LogsAPIError";
import { LogsAPIErrorResponse } from "./LogsAPIErrorResponse";
import { LogsListRequest } from "./LogsListRequest";
import { LogsListRequestTime } from "./LogsListRequestTime";
import { LogsListResponse } from "./LogsListResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ContentEncoding: ["gzip", "deflate"],
    LogsSort: ["asc", "desc"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    HTTPLogError: HTTPLogError,
    HTTPLogItem: HTTPLogItem,
    Log: Log,
    LogContent: LogContent,
    LogsAPIError: LogsAPIError,
    LogsAPIErrorResponse: LogsAPIErrorResponse,
    LogsListRequest: LogsListRequest,
    LogsListRequestTime: LogsListRequestTime,
    LogsListResponse: LogsListResponse,
  },
};

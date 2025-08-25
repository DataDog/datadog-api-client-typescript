import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { LogsAPIError } from "./LogsAPIError";
import { LogsAPIErrorResponse } from "./LogsAPIErrorResponse";
import { LogsAPILimitReachedResponse } from "./LogsAPILimitReachedResponse";
import { LogsDailyLimitReset } from "./LogsDailyLimitReset";
import { LogsExclusion } from "./LogsExclusion";
import { LogsExclusionFilter } from "./LogsExclusionFilter";
import { LogsFilter } from "./LogsFilter";
import { LogsIndex } from "./LogsIndex";
import { LogsIndexListResponse } from "./LogsIndexListResponse";
import { LogsIndexUpdateRequest } from "./LogsIndexUpdateRequest";
import { LogsIndexesOrder } from "./LogsIndexesOrder";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    LogsAPIError: LogsAPIError,
    LogsAPIErrorResponse: LogsAPIErrorResponse,
    LogsAPILimitReachedResponse: LogsAPILimitReachedResponse,
    LogsDailyLimitReset: LogsDailyLimitReset,
    LogsExclusion: LogsExclusion,
    LogsExclusionFilter: LogsExclusionFilter,
    LogsFilter: LogsFilter,
    LogsIndex: LogsIndex,
    LogsIndexListResponse: LogsIndexListResponse,
    LogsIndexUpdateRequest: LogsIndexUpdateRequest,
    LogsIndexesOrder: LogsIndexesOrder,
  },
};

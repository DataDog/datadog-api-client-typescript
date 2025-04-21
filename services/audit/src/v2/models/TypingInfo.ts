import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AuditLogsEvent } from "./AuditLogsEvent";
import { AuditLogsEventAttributes } from "./AuditLogsEventAttributes";
import { AuditLogsEventsResponse } from "./AuditLogsEventsResponse";
import { AuditLogsQueryFilter } from "./AuditLogsQueryFilter";
import { AuditLogsQueryOptions } from "./AuditLogsQueryOptions";
import { AuditLogsQueryPageOptions } from "./AuditLogsQueryPageOptions";
import { AuditLogsResponseLinks } from "./AuditLogsResponseLinks";
import { AuditLogsResponseMetadata } from "./AuditLogsResponseMetadata";
import { AuditLogsResponsePage } from "./AuditLogsResponsePage";
import { AuditLogsSearchEventsRequest } from "./AuditLogsSearchEventsRequest";
import { AuditLogsWarning } from "./AuditLogsWarning";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AuditLogsEventType: ["audit"],
    AuditLogsResponseStatus: ["done", "timeout"],
    AuditLogsSort: ["timestamp", "-timestamp"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AuditLogsEvent: AuditLogsEvent,
    AuditLogsEventAttributes: AuditLogsEventAttributes,
    AuditLogsEventsResponse: AuditLogsEventsResponse,
    AuditLogsQueryFilter: AuditLogsQueryFilter,
    AuditLogsQueryOptions: AuditLogsQueryOptions,
    AuditLogsQueryPageOptions: AuditLogsQueryPageOptions,
    AuditLogsResponseLinks: AuditLogsResponseLinks,
    AuditLogsResponseMetadata: AuditLogsResponseMetadata,
    AuditLogsResponsePage: AuditLogsResponsePage,
    AuditLogsSearchEventsRequest: AuditLogsSearchEventsRequest,
    AuditLogsWarning: AuditLogsWarning,
  },
};

import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Event } from "./Event";
import { EventCreateRequest } from "./EventCreateRequest";
import { EventCreateResponse } from "./EventCreateResponse";
import { EventListResponse } from "./EventListResponse";
import { EventResponse } from "./EventResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    EventAlertType: [
      "error",
      "warning",
      "info",
      "success",
      "user_update",
      "recommendation",
      "snapshot",
    ],
    EventPriority: ["normal", "low"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Event: Event,
    EventCreateRequest: EventCreateRequest,
    EventCreateResponse: EventCreateResponse,
    EventListResponse: EventListResponse,
    EventResponse: EventResponse,
  },
};

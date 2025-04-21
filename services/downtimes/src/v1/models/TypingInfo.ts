import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CancelDowntimesByScopeRequest } from "./CancelDowntimesByScopeRequest";
import { CanceledDowntimesIds } from "./CanceledDowntimesIds";
import { Downtime } from "./Downtime";
import { DowntimeChild } from "./DowntimeChild";
import { DowntimeRecurrence } from "./DowntimeRecurrence";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    NotifyEndState: ["alert", "no data", "warn"],
    NotifyEndType: ["canceled", "expired"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CancelDowntimesByScopeRequest: CancelDowntimesByScopeRequest,
    CanceledDowntimesIds: CanceledDowntimesIds,
    Downtime: Downtime,
    DowntimeChild: DowntimeChild,
    DowntimeRecurrence: DowntimeRecurrence,
  },
};

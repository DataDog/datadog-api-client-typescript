import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { PagerDutyService } from "./PagerDutyService";
import { PagerDutyServiceKey } from "./PagerDutyServiceKey";
import { PagerDutyServiceName } from "./PagerDutyServiceName";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    PagerDutyService: PagerDutyService,
    PagerDutyServiceKey: PagerDutyServiceKey,
    PagerDutyServiceName: PagerDutyServiceName,
  },
};

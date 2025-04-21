import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { IntakePayloadAccepted } from "./IntakePayloadAccepted";
import { ServiceCheck } from "./ServiceCheck";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ServiceCheckStatus: [0, 1, 2, 3],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    IntakePayloadAccepted: IntakePayloadAccepted,
    ServiceCheck: ServiceCheck,
  },
};

import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
  },
};

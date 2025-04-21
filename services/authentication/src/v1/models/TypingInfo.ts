import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AuthenticationValidationResponse } from "./AuthenticationValidationResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AuthenticationValidationResponse: AuthenticationValidationResponse,
  },
};

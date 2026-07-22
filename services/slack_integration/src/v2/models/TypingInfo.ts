import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { SlackUserBindingData } from "./SlackUserBindingData";
import { SlackUserBindingsResponse } from "./SlackUserBindingsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SlackUserBindingType: ["team_id"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    SlackUserBindingData: SlackUserBindingData,
    SlackUserBindingsResponse: SlackUserBindingsResponse,
  },
};
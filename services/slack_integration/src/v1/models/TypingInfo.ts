import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { SlackIntegrationChannel } from "./SlackIntegrationChannel";
import { SlackIntegrationChannelDisplay } from "./SlackIntegrationChannelDisplay";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    SlackIntegrationChannel: SlackIntegrationChannel,
    SlackIntegrationChannelDisplay: SlackIntegrationChannelDisplay,
  },
};

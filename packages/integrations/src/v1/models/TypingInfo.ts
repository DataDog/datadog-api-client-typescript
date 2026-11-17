import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { PagerDutyService } from "./PagerDutyService";
import { PagerDutyServiceKey } from "./PagerDutyServiceKey";
import { PagerDutyServiceName } from "./PagerDutyServiceName";
import { SlackIntegrationChannel } from "./SlackIntegrationChannel";
import { SlackIntegrationChannelDisplay } from "./SlackIntegrationChannelDisplay";
import { WebhooksIntegration } from "./WebhooksIntegration";
import { WebhooksIntegrationCustomVariable } from "./WebhooksIntegrationCustomVariable";
import { WebhooksIntegrationCustomVariableResponse } from "./WebhooksIntegrationCustomVariableResponse";
import { WebhooksIntegrationCustomVariableUpdateRequest } from "./WebhooksIntegrationCustomVariableUpdateRequest";
import { WebhooksIntegrationUpdateRequest } from "./WebhooksIntegrationUpdateRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    WebhooksIntegrationEncoding: ["json", "form"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    PagerDutyService: PagerDutyService,
    PagerDutyServiceKey: PagerDutyServiceKey,
    PagerDutyServiceName: PagerDutyServiceName,
    SlackIntegrationChannel: SlackIntegrationChannel,
    SlackIntegrationChannelDisplay: SlackIntegrationChannelDisplay,
    WebhooksIntegration: WebhooksIntegration,
    WebhooksIntegrationCustomVariable: WebhooksIntegrationCustomVariable,
    WebhooksIntegrationCustomVariableResponse:
      WebhooksIntegrationCustomVariableResponse,
    WebhooksIntegrationCustomVariableUpdateRequest:
      WebhooksIntegrationCustomVariableUpdateRequest,
    WebhooksIntegrationUpdateRequest: WebhooksIntegrationUpdateRequest,
  },
};

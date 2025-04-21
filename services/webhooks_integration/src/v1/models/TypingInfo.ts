import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
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
    WebhooksIntegration: WebhooksIntegration,
    WebhooksIntegrationCustomVariable: WebhooksIntegrationCustomVariable,
    WebhooksIntegrationCustomVariableResponse:
      WebhooksIntegrationCustomVariableResponse,
    WebhooksIntegrationCustomVariableUpdateRequest:
      WebhooksIntegrationCustomVariableUpdateRequest,
    WebhooksIntegrationUpdateRequest: WebhooksIntegrationUpdateRequest,
  },
};

import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Integration } from "./Integration";
import { IntegrationAttributes } from "./IntegrationAttributes";
import { IntegrationLinks } from "./IntegrationLinks";
import { ListIntegrationsResponse } from "./ListIntegrationsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    IntegrationType: ["integration"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Integration: Integration,
    IntegrationAttributes: IntegrationAttributes,
    IntegrationLinks: IntegrationLinks,
    ListIntegrationsResponse: ListIntegrationsResponse,
  },
};

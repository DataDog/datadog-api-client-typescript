import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { EntityIntegrationConfigAttributes } from "./EntityIntegrationConfigAttributes";
import { EntityIntegrationConfigData } from "./EntityIntegrationConfigData";
import { EntityIntegrationConfigRequest } from "./EntityIntegrationConfigRequest";
import { EntityIntegrationConfigRequestAttributes } from "./EntityIntegrationConfigRequestAttributes";
import { EntityIntegrationConfigRequestData } from "./EntityIntegrationConfigRequestData";
import { EntityIntegrationConfigResponse } from "./EntityIntegrationConfigResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    EntityIntegrationConfigRequestType: ["entity_integration_config_requests"],
    EntityIntegrationConfigType: ["entity_integration_configs"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    EntityIntegrationConfigAttributes: EntityIntegrationConfigAttributes,
    EntityIntegrationConfigData: EntityIntegrationConfigData,
    EntityIntegrationConfigRequest: EntityIntegrationConfigRequest,
    EntityIntegrationConfigRequestAttributes:
      EntityIntegrationConfigRequestAttributes,
    EntityIntegrationConfigRequestData: EntityIntegrationConfigRequestData,
    EntityIntegrationConfigResponse: EntityIntegrationConfigResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};

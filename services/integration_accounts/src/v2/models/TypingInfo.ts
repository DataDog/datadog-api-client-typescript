import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { WebIntegrationAccountAttributes } from "./WebIntegrationAccountAttributes";
import { WebIntegrationAccountCreateRequest } from "./WebIntegrationAccountCreateRequest";
import { WebIntegrationAccountCreateRequestAttributes } from "./WebIntegrationAccountCreateRequestAttributes";
import { WebIntegrationAccountCreateRequestData } from "./WebIntegrationAccountCreateRequestData";
import { WebIntegrationAccountResponse } from "./WebIntegrationAccountResponse";
import { WebIntegrationAccountResponseData } from "./WebIntegrationAccountResponseData";
import { WebIntegrationAccountSchemaResponse } from "./WebIntegrationAccountSchemaResponse";
import { WebIntegrationAccountSchemaResponseProperties } from "./WebIntegrationAccountSchemaResponseProperties";
import { WebIntegrationAccountSchemaResponseSecretsObject } from "./WebIntegrationAccountSchemaResponseSecretsObject";
import { WebIntegrationAccountSchemaResponseSettingsField } from "./WebIntegrationAccountSchemaResponseSettingsField";
import { WebIntegrationAccountSchemaResponseSettingsObject } from "./WebIntegrationAccountSchemaResponseSettingsObject";
import { WebIntegrationAccountUpdateRequest } from "./WebIntegrationAccountUpdateRequest";
import { WebIntegrationAccountUpdateRequestAttributes } from "./WebIntegrationAccountUpdateRequestAttributes";
import { WebIntegrationAccountUpdateRequestData } from "./WebIntegrationAccountUpdateRequestData";
import { WebIntegrationAccountsResponse } from "./WebIntegrationAccountsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    WebIntegrationAccountType: ["Account"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    WebIntegrationAccountAttributes: WebIntegrationAccountAttributes,
    WebIntegrationAccountCreateRequest: WebIntegrationAccountCreateRequest,
    WebIntegrationAccountCreateRequestAttributes:
      WebIntegrationAccountCreateRequestAttributes,
    WebIntegrationAccountCreateRequestData:
      WebIntegrationAccountCreateRequestData,
    WebIntegrationAccountResponse: WebIntegrationAccountResponse,
    WebIntegrationAccountResponseData: WebIntegrationAccountResponseData,
    WebIntegrationAccountSchemaResponse: WebIntegrationAccountSchemaResponse,
    WebIntegrationAccountSchemaResponseProperties:
      WebIntegrationAccountSchemaResponseProperties,
    WebIntegrationAccountSchemaResponseSecretsObject:
      WebIntegrationAccountSchemaResponseSecretsObject,
    WebIntegrationAccountSchemaResponseSettingsField:
      WebIntegrationAccountSchemaResponseSettingsField,
    WebIntegrationAccountSchemaResponseSettingsObject:
      WebIntegrationAccountSchemaResponseSettingsObject,
    WebIntegrationAccountUpdateRequest: WebIntegrationAccountUpdateRequest,
    WebIntegrationAccountUpdateRequestAttributes:
      WebIntegrationAccountUpdateRequestAttributes,
    WebIntegrationAccountUpdateRequestData:
      WebIntegrationAccountUpdateRequestData,
    WebIntegrationAccountsResponse: WebIntegrationAccountsResponse,
  },
};

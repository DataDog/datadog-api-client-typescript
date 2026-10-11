import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AmsIntegrationAccountAttributes } from "./AmsIntegrationAccountAttributes";
import { AmsIntegrationAccountCreateRequest } from "./AmsIntegrationAccountCreateRequest";
import { AmsIntegrationAccountCreateRequestAttributes } from "./AmsIntegrationAccountCreateRequestAttributes";
import { AmsIntegrationAccountCreateRequestData } from "./AmsIntegrationAccountCreateRequestData";
import { AmsIntegrationAccountResponse } from "./AmsIntegrationAccountResponse";
import { AmsIntegrationAccountResponseData } from "./AmsIntegrationAccountResponseData";
import { AmsIntegrationAccountSchemaResponse } from "./AmsIntegrationAccountSchemaResponse";
import { AmsIntegrationAccountSchemaResponseProperties } from "./AmsIntegrationAccountSchemaResponseProperties";
import { AmsIntegrationAccountSchemaResponseSecretsObject } from "./AmsIntegrationAccountSchemaResponseSecretsObject";
import { AmsIntegrationAccountSchemaResponseSettingsField } from "./AmsIntegrationAccountSchemaResponseSettingsField";
import { AmsIntegrationAccountSchemaResponseSettingsObject } from "./AmsIntegrationAccountSchemaResponseSettingsObject";
import { AmsIntegrationAccountUpdateRequest } from "./AmsIntegrationAccountUpdateRequest";
import { AmsIntegrationAccountUpdateRequestAttributes } from "./AmsIntegrationAccountUpdateRequestAttributes";
import { AmsIntegrationAccountUpdateRequestData } from "./AmsIntegrationAccountUpdateRequestData";
import { AmsIntegrationAccountsResponse } from "./AmsIntegrationAccountsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AmsIntegrationAccountType: ["Account"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AmsIntegrationAccountAttributes: AmsIntegrationAccountAttributes,
    AmsIntegrationAccountCreateRequest: AmsIntegrationAccountCreateRequest,
    AmsIntegrationAccountCreateRequestAttributes:
      AmsIntegrationAccountCreateRequestAttributes,
    AmsIntegrationAccountCreateRequestData:
      AmsIntegrationAccountCreateRequestData,
    AmsIntegrationAccountResponse: AmsIntegrationAccountResponse,
    AmsIntegrationAccountResponseData: AmsIntegrationAccountResponseData,
    AmsIntegrationAccountSchemaResponse: AmsIntegrationAccountSchemaResponse,
    AmsIntegrationAccountSchemaResponseProperties:
      AmsIntegrationAccountSchemaResponseProperties,
    AmsIntegrationAccountSchemaResponseSecretsObject:
      AmsIntegrationAccountSchemaResponseSecretsObject,
    AmsIntegrationAccountSchemaResponseSettingsField:
      AmsIntegrationAccountSchemaResponseSettingsField,
    AmsIntegrationAccountSchemaResponseSettingsObject:
      AmsIntegrationAccountSchemaResponseSettingsObject,
    AmsIntegrationAccountUpdateRequest: AmsIntegrationAccountUpdateRequest,
    AmsIntegrationAccountUpdateRequestAttributes:
      AmsIntegrationAccountUpdateRequestAttributes,
    AmsIntegrationAccountUpdateRequestData:
      AmsIntegrationAccountUpdateRequestData,
    AmsIntegrationAccountsResponse: AmsIntegrationAccountsResponse,
  },
};

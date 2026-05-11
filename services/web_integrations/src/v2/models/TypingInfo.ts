import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { WebIntegrationAccountCreateRequest } from "./WebIntegrationAccountCreateRequest";
import { WebIntegrationAccountCreateRequestAttributes } from "./WebIntegrationAccountCreateRequestAttributes";
import { WebIntegrationAccountCreateRequestData } from "./WebIntegrationAccountCreateRequestData";
import { WebIntegrationAccountResponse } from "./WebIntegrationAccountResponse";
import { WebIntegrationAccountResponseAttributes } from "./WebIntegrationAccountResponseAttributes";
import { WebIntegrationAccountResponseData } from "./WebIntegrationAccountResponseData";
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
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    WebIntegrationAccountCreateRequest: WebIntegrationAccountCreateRequest,
    WebIntegrationAccountCreateRequestAttributes:
      WebIntegrationAccountCreateRequestAttributes,
    WebIntegrationAccountCreateRequestData:
      WebIntegrationAccountCreateRequestData,
    WebIntegrationAccountResponse: WebIntegrationAccountResponse,
    WebIntegrationAccountResponseAttributes:
      WebIntegrationAccountResponseAttributes,
    WebIntegrationAccountResponseData: WebIntegrationAccountResponseData,
    WebIntegrationAccountUpdateRequest: WebIntegrationAccountUpdateRequest,
    WebIntegrationAccountUpdateRequestAttributes:
      WebIntegrationAccountUpdateRequestAttributes,
    WebIntegrationAccountUpdateRequestData:
      WebIntegrationAccountUpdateRequestData,
    WebIntegrationAccountsResponse: WebIntegrationAccountsResponse,
  },
};

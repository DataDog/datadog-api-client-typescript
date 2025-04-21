import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AzureAccount } from "./AzureAccount";
import { ResourceProviderConfig } from "./ResourceProviderConfig";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AzureAccount: AzureAccount,
    ResourceProviderConfig: ResourceProviderConfig,
  },
};

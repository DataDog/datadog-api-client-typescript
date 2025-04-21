import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ApiKey } from "./ApiKey";
import { ApiKeyListResponse } from "./ApiKeyListResponse";
import { ApiKeyResponse } from "./ApiKeyResponse";
import { ApplicationKey } from "./ApplicationKey";
import { ApplicationKeyListResponse } from "./ApplicationKeyListResponse";
import { ApplicationKeyResponse } from "./ApplicationKeyResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ApiKey: ApiKey,
    ApiKeyListResponse: ApiKeyListResponse,
    ApiKeyResponse: ApiKeyResponse,
    ApplicationKey: ApplicationKey,
    ApplicationKeyListResponse: ApplicationKeyListResponse,
    ApplicationKeyResponse: ApplicationKeyResponse,
  },
};

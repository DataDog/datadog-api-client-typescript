import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ApiKey } from "./ApiKey";
import { ApiKeyListResponse } from "./ApiKeyListResponse";
import { ApiKeyResponse } from "./ApiKeyResponse";
import { ApplicationKey } from "./ApplicationKey";
import { ApplicationKeyListResponse } from "./ApplicationKeyListResponse";
import { ApplicationKeyResponse } from "./ApplicationKeyResponse";
import { ClientToken } from "./ClientToken";
import { ClientTokenCreateRequest } from "./ClientTokenCreateRequest";
import { ClientTokenRevokeRequest } from "./ClientTokenRevokeRequest";
import { ClientTokenUpdateRequest } from "./ClientTokenUpdateRequest";

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
    ClientToken: ClientToken,
    ClientTokenCreateRequest: ClientTokenCreateRequest,
    ClientTokenRevokeRequest: ClientTokenRevokeRequest,
    ClientTokenUpdateRequest: ClientTokenUpdateRequest,
  },
};

import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { OAuthClientRegistrationError } from "./OAuthClientRegistrationError";
import { OAuthClientRegistrationRequest } from "./OAuthClientRegistrationRequest";
import { OAuthClientRegistrationResponse } from "./OAuthClientRegistrationResponse";
import { OAuthScopesRestriction } from "./OAuthScopesRestriction";
import { OAuthScopesRestrictionResponse } from "./OAuthScopesRestrictionResponse";
import { OAuthScopesRestrictionResponseAttributes } from "./OAuthScopesRestrictionResponseAttributes";
import { OAuthScopesRestrictionResponseData } from "./OAuthScopesRestrictionResponseData";
import { UpsertOAuthScopesRestrictionData } from "./UpsertOAuthScopesRestrictionData";
import { UpsertOAuthScopesRestrictionDataAttributes } from "./UpsertOAuthScopesRestrictionDataAttributes";
import { UpsertOAuthScopesRestrictionRequest } from "./UpsertOAuthScopesRestrictionRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    OAuthClientRegistrationGrantType: ["authorization_code", "refresh_token"],
    OAuthClientRegistrationResponseType: ["code"],
    OAuthOidcScope: ["openid", "profile", "email", "offline_access"],
    OAuthScopesRestrictionType: ["scopes_restriction"],
    UpsertOAuthScopesRestrictionType: ["upsert_scopes_restriction"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    OAuthClientRegistrationError: OAuthClientRegistrationError,
    OAuthClientRegistrationRequest: OAuthClientRegistrationRequest,
    OAuthClientRegistrationResponse: OAuthClientRegistrationResponse,
    OAuthScopesRestriction: OAuthScopesRestriction,
    OAuthScopesRestrictionResponse: OAuthScopesRestrictionResponse,
    OAuthScopesRestrictionResponseAttributes:
      OAuthScopesRestrictionResponseAttributes,
    OAuthScopesRestrictionResponseData: OAuthScopesRestrictionResponseData,
    UpsertOAuthScopesRestrictionData: UpsertOAuthScopesRestrictionData,
    UpsertOAuthScopesRestrictionDataAttributes:
      UpsertOAuthScopesRestrictionDataAttributes,
    UpsertOAuthScopesRestrictionRequest: UpsertOAuthScopesRestrictionRequest,
  },
};

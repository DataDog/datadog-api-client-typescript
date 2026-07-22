import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { Pagination } from "./Pagination";
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { UserAuthorizedClientAttributes } from "./UserAuthorizedClientAttributes";
import { UserAuthorizedClientData } from "./UserAuthorizedClientData";
import { UserAuthorizedClientRelationshipOAuth2Client } from "./UserAuthorizedClientRelationshipOAuth2Client";
import { UserAuthorizedClientRelationshipOAuth2ClientData } from "./UserAuthorizedClientRelationshipOAuth2ClientData";
import { UserAuthorizedClientRelationshipScopeData } from "./UserAuthorizedClientRelationshipScopeData";
import { UserAuthorizedClientRelationshipScopes } from "./UserAuthorizedClientRelationshipScopes";
import { UserAuthorizedClientRelationshipUser } from "./UserAuthorizedClientRelationshipUser";
import { UserAuthorizedClientRelationshipUserData } from "./UserAuthorizedClientRelationshipUserData";
import { UserAuthorizedClientRelationships } from "./UserAuthorizedClientRelationships";
import { UserAuthorizedClientResponse } from "./UserAuthorizedClientResponse";
import { UserAuthorizedClientsResponse } from "./UserAuthorizedClientsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    UserAuthorizedClientRelationshipOAuth2ClientDataType: ["oauth2_clients"],
    UserAuthorizedClientRelationshipScopeDataType: ["scopes"],
    UserAuthorizedClientRelationshipUserDataType: ["users"],
    UserAuthorizedClientType: ["user_authorized_clients"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    Pagination: Pagination,
    ResponseMetaAttributes: ResponseMetaAttributes,
    UserAuthorizedClientAttributes: UserAuthorizedClientAttributes,
    UserAuthorizedClientData: UserAuthorizedClientData,
    UserAuthorizedClientRelationshipOAuth2Client: UserAuthorizedClientRelationshipOAuth2Client,
    UserAuthorizedClientRelationshipOAuth2ClientData: UserAuthorizedClientRelationshipOAuth2ClientData,
    UserAuthorizedClientRelationshipScopeData: UserAuthorizedClientRelationshipScopeData,
    UserAuthorizedClientRelationshipScopes: UserAuthorizedClientRelationshipScopes,
    UserAuthorizedClientRelationshipUser: UserAuthorizedClientRelationshipUser,
    UserAuthorizedClientRelationshipUserData: UserAuthorizedClientRelationshipUserData,
    UserAuthorizedClientRelationships: UserAuthorizedClientRelationships,
    UserAuthorizedClientResponse: UserAuthorizedClientResponse,
    UserAuthorizedClientsResponse: UserAuthorizedClientsResponse,
  },
};
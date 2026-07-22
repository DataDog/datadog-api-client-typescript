import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { OrgAuthorizedClientAttributes } from "./OrgAuthorizedClientAttributes";
import { OrgAuthorizedClientData } from "./OrgAuthorizedClientData";
import { OrgAuthorizedClientRelationshipOAuth2Client } from "./OrgAuthorizedClientRelationshipOAuth2Client";
import { OrgAuthorizedClientRelationshipOAuth2ClientData } from "./OrgAuthorizedClientRelationshipOAuth2ClientData";
import { OrgAuthorizedClientRelationshipUserAuthorizedClients } from "./OrgAuthorizedClientRelationshipUserAuthorizedClients";
import { OrgAuthorizedClientRelationshipUserAuthorizedClientsData } from "./OrgAuthorizedClientRelationshipUserAuthorizedClientsData";
import { OrgAuthorizedClientRelationshipUserAuthorizedClientsLinks } from "./OrgAuthorizedClientRelationshipUserAuthorizedClientsLinks";
import { OrgAuthorizedClientRelationships } from "./OrgAuthorizedClientRelationships";
import { OrgAuthorizedClientResponse } from "./OrgAuthorizedClientResponse";
import { OrgAuthorizedClientUpdateAttributes } from "./OrgAuthorizedClientUpdateAttributes";
import { OrgAuthorizedClientUpdateData } from "./OrgAuthorizedClientUpdateData";
import { OrgAuthorizedClientUpdateRequest } from "./OrgAuthorizedClientUpdateRequest";
import { OrgAuthorizedClientsResponse } from "./OrgAuthorizedClientsResponse";
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
import { UserAuthorizedClientsResponse } from "./UserAuthorizedClientsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    OrgAuthorizedClientRelationshipOAuth2ClientDataType: ["oauth2_clients"],
    OrgAuthorizedClientRelationshipUserAuthorizedClientsDataType: ["user_authorized_clients"],
    OrgAuthorizedClientType: ["org_authorized_clients"],
    OrgAuthorizedClientUserAuthorizationsSort: ["user.name", "user.email", "oauth2_client.name"],
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
    OrgAuthorizedClientAttributes: OrgAuthorizedClientAttributes,
    OrgAuthorizedClientData: OrgAuthorizedClientData,
    OrgAuthorizedClientRelationshipOAuth2Client: OrgAuthorizedClientRelationshipOAuth2Client,
    OrgAuthorizedClientRelationshipOAuth2ClientData: OrgAuthorizedClientRelationshipOAuth2ClientData,
    OrgAuthorizedClientRelationshipUserAuthorizedClients: OrgAuthorizedClientRelationshipUserAuthorizedClients,
    OrgAuthorizedClientRelationshipUserAuthorizedClientsData: OrgAuthorizedClientRelationshipUserAuthorizedClientsData,
    OrgAuthorizedClientRelationshipUserAuthorizedClientsLinks: OrgAuthorizedClientRelationshipUserAuthorizedClientsLinks,
    OrgAuthorizedClientRelationships: OrgAuthorizedClientRelationships,
    OrgAuthorizedClientResponse: OrgAuthorizedClientResponse,
    OrgAuthorizedClientUpdateAttributes: OrgAuthorizedClientUpdateAttributes,
    OrgAuthorizedClientUpdateData: OrgAuthorizedClientUpdateData,
    OrgAuthorizedClientUpdateRequest: OrgAuthorizedClientUpdateRequest,
    OrgAuthorizedClientsResponse: OrgAuthorizedClientsResponse,
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
    UserAuthorizedClientsResponse: UserAuthorizedClientsResponse,
  },
};
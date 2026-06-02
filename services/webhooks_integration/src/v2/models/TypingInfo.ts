import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { WebhooksAuthMethodAttributes } from "./WebhooksAuthMethodAttributes";
import { WebhooksAuthMethodRelationships } from "./WebhooksAuthMethodRelationships";
import { WebhooksAuthMethodResponseData } from "./WebhooksAuthMethodResponseData";
import { WebhooksAuthMethodsResponse } from "./WebhooksAuthMethodsResponse";
import { WebhooksOAuth2ClientCredentialsCreateAttributes } from "./WebhooksOAuth2ClientCredentialsCreateAttributes";
import { WebhooksOAuth2ClientCredentialsCreateData } from "./WebhooksOAuth2ClientCredentialsCreateData";
import { WebhooksOAuth2ClientCredentialsCreateRequest } from "./WebhooksOAuth2ClientCredentialsCreateRequest";
import { WebhooksOAuth2ClientCredentialsRelationship } from "./WebhooksOAuth2ClientCredentialsRelationship";
import { WebhooksOAuth2ClientCredentialsRelationshipData } from "./WebhooksOAuth2ClientCredentialsRelationshipData";
import { WebhooksOAuth2ClientCredentialsResponse } from "./WebhooksOAuth2ClientCredentialsResponse";
import { WebhooksOAuth2ClientCredentialsResponseAttributes } from "./WebhooksOAuth2ClientCredentialsResponseAttributes";
import { WebhooksOAuth2ClientCredentialsResponseData } from "./WebhooksOAuth2ClientCredentialsResponseData";
import { WebhooksOAuth2ClientCredentialsUpdateAttributes } from "./WebhooksOAuth2ClientCredentialsUpdateAttributes";
import { WebhooksOAuth2ClientCredentialsUpdateData } from "./WebhooksOAuth2ClientCredentialsUpdateData";
import { WebhooksOAuth2ClientCredentialsUpdateRequest } from "./WebhooksOAuth2ClientCredentialsUpdateRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    WebhooksAuthMethodProtocol: ["oauth2-client-credentials"],
    WebhooksAuthMethodType: ["webhooks-auth-method"],
    WebhooksOAuth2ClientCredentialsType: [
      "webhooks-auth-method-oauth2-client-credentials",
    ],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    WebhooksAuthMethodAttributes: WebhooksAuthMethodAttributes,
    WebhooksAuthMethodRelationships: WebhooksAuthMethodRelationships,
    WebhooksAuthMethodResponseData: WebhooksAuthMethodResponseData,
    WebhooksAuthMethodsResponse: WebhooksAuthMethodsResponse,
    WebhooksOAuth2ClientCredentialsCreateAttributes:
      WebhooksOAuth2ClientCredentialsCreateAttributes,
    WebhooksOAuth2ClientCredentialsCreateData:
      WebhooksOAuth2ClientCredentialsCreateData,
    WebhooksOAuth2ClientCredentialsCreateRequest:
      WebhooksOAuth2ClientCredentialsCreateRequest,
    WebhooksOAuth2ClientCredentialsRelationship:
      WebhooksOAuth2ClientCredentialsRelationship,
    WebhooksOAuth2ClientCredentialsRelationshipData:
      WebhooksOAuth2ClientCredentialsRelationshipData,
    WebhooksOAuth2ClientCredentialsResponse:
      WebhooksOAuth2ClientCredentialsResponse,
    WebhooksOAuth2ClientCredentialsResponseAttributes:
      WebhooksOAuth2ClientCredentialsResponseAttributes,
    WebhooksOAuth2ClientCredentialsResponseData:
      WebhooksOAuth2ClientCredentialsResponseData,
    WebhooksOAuth2ClientCredentialsUpdateAttributes:
      WebhooksOAuth2ClientCredentialsUpdateAttributes,
    WebhooksOAuth2ClientCredentialsUpdateData:
      WebhooksOAuth2ClientCredentialsUpdateData,
    WebhooksOAuth2ClientCredentialsUpdateRequest:
      WebhooksOAuth2ClientCredentialsUpdateRequest,
  },
};

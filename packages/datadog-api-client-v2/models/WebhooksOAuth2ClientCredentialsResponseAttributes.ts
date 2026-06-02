/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WebhooksAuthMethodProtocol } from "./WebhooksAuthMethodProtocol";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * OAuth2 client credentials attributes returned by the API. The `client_secret` is never echoed.
 */
export class WebhooksOAuth2ClientCredentialsResponseAttributes {
  /**
   * URL of the OAuth2 access token endpoint.
   */
  "accessTokenUrl"?: string;
  /**
   * The intended audience for the OAuth2 access token.
   */
  "audience"?: string;
  /**
   * The OAuth2 client ID issued by the authorization server.
   */
  "clientId"?: string;
  /**
   * Human-readable name for this auth method.
   */
  "name"?: string;
  /**
   * Authentication protocol used by the auth method.
   */
  "protocol"?: WebhooksAuthMethodProtocol;
  /**
   * Space-separated list of OAuth2 scopes to request.
   */
  "scope"?: string;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accessTokenUrl: {
      baseName: "access_token_url",
      type: "string",
    },
    audience: {
      baseName: "audience",
      type: "string",
    },
    clientId: {
      baseName: "client_id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    protocol: {
      baseName: "protocol",
      type: "WebhooksAuthMethodProtocol",
    },
    scope: {
      baseName: "scope",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WebhooksOAuth2ClientCredentialsResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}

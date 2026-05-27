/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OAuthClientRegistrationGrantType } from "./OAuthClientRegistrationGrantType";
import { OAuthClientRegistrationResponseType } from "./OAuthClientRegistrationResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request payload for OAuth2 dynamic client registration as defined by RFC 7591.
 */
export class OAuthClientRegistrationRequest {
  /**
   * Human-readable name of the client. Control characters are rejected.
   */
  "clientName": string;
  /**
   * URL of the home page of the client.
   */
  "clientUri"?: string;
  /**
   * OAuth 2.0 grant types the client may use.
   * Defaults to `authorization_code` and `refresh_token` when omitted.
   */
  "grantTypes"?: Array<OAuthClientRegistrationGrantType>;
  /**
   * URL referencing the client's JSON Web Key Set.
   */
  "jwksUri"?: string;
  /**
   * URL referencing a logo for the client.
   */
  "logoUri"?: string;
  /**
   * URL pointing to the client's privacy policy.
   */
  "policyUri"?: string;
  /**
   * Array of redirection URI strings used by the client in redirect-based flows.
   */
  "redirectUris": Array<string>;
  /**
   * OAuth 2.0 response types the client may use. Only `code` is supported.
   */
  "responseTypes"?: Array<OAuthClientRegistrationResponseType>;
  /**
   * Space-separated list of scope values the client may request.
   */
  "scope"?: string;
  /**
   * Requested authentication method for the token endpoint. Only `none` is supported.
   */
  "tokenEndpointAuthMethod"?: string;
  /**
   * URL pointing to the client's terms of service.
   */
  "tosUri"?: string;

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
    clientName: {
      baseName: "client_name",
      type: "string",
      required: true,
    },
    clientUri: {
      baseName: "client_uri",
      type: "string",
    },
    grantTypes: {
      baseName: "grant_types",
      type: "Array<OAuthClientRegistrationGrantType>",
    },
    jwksUri: {
      baseName: "jwks_uri",
      type: "string",
    },
    logoUri: {
      baseName: "logo_uri",
      type: "string",
    },
    policyUri: {
      baseName: "policy_uri",
      type: "string",
    },
    redirectUris: {
      baseName: "redirect_uris",
      type: "Array<string>",
      required: true,
    },
    responseTypes: {
      baseName: "response_types",
      type: "Array<OAuthClientRegistrationResponseType>",
    },
    scope: {
      baseName: "scope",
      type: "string",
    },
    tokenEndpointAuthMethod: {
      baseName: "token_endpoint_auth_method",
      type: "string",
    },
    tosUri: {
      baseName: "tos_uri",
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
    return OAuthClientRegistrationRequest.attributeTypeMap;
  }

  public constructor() {}
}

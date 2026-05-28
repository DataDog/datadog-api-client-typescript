/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OAuthClientRegistrationGrantType } from "./OAuthClientRegistrationGrantType";
import { OAuthClientRegistrationResponseType } from "./OAuthClientRegistrationResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response payload for a successful OAuth2 dynamic client registration as defined by RFC 7591.
 */
export class OAuthClientRegistrationResponse {
  /**
   * Unique identifier assigned to the registered client.
   */
  "clientId": string;
  /**
   * Human-readable name of the client.
   */
  "clientName": string;
  /**
   * OAuth 2.0 grant types registered for the client.
   */
  "grantTypes": Array<OAuthClientRegistrationGrantType>;
  /**
   * Redirection URIs registered for the client.
   */
  "redirectUris": Array<string>;
  /**
   * OAuth 2.0 response types registered for the client.
   */
  "responseTypes": Array<OAuthClientRegistrationResponseType>;
  /**
   * Authentication method registered for the token endpoint. Always `none`.
   */
  "tokenEndpointAuthMethod": string;

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
    clientId: {
      baseName: "client_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    clientName: {
      baseName: "client_name",
      type: "string",
      required: true,
    },
    grantTypes: {
      baseName: "grant_types",
      type: "Array<OAuthClientRegistrationGrantType>",
      required: true,
    },
    redirectUris: {
      baseName: "redirect_uris",
      type: "Array<string>",
      required: true,
    },
    responseTypes: {
      baseName: "response_types",
      type: "Array<OAuthClientRegistrationResponseType>",
      required: true,
    },
    tokenEndpointAuthMethod: {
      baseName: "token_endpoint_auth_method",
      type: "string",
      required: true,
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
    return OAuthClientRegistrationResponse.attributeTypeMap;
  }

  public constructor() {}
}

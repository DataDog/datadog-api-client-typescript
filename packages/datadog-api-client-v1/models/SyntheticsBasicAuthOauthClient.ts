/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBasicAuthOauthClientType } from "./SyntheticsBasicAuthOauthClientType";
import { SyntheticsBasicAuthOauthTokenApiAuthentication } from "./SyntheticsBasicAuthOauthTokenApiAuthentication";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object to handle `oauth client` authentication when performing the test.
 */
export class SyntheticsBasicAuthOauthClient {
  /**
   * Access token URL to use when performing the authentication.
   */
  "accessTokenUrl": string;
  /**
   * Audience to use when performing the authentication.
   */
  "audience"?: string;
  /**
   * Client ID to use when performing the authentication.
   */
  "clientId": string;
  /**
   * Client secret to use when performing the authentication.
   */
  "clientSecret": string;
  /**
   * Resource to use when performing the authentication.
   */
  "resource"?: string;
  /**
   * Scope to use when performing the authentication.
   */
  "scope"?: string;
  /**
   * Type of token to use when performing the authentication.
   */
  "tokenApiAuthentication": SyntheticsBasicAuthOauthTokenApiAuthentication;
  /**
   * The type of basic authentication to use when performing the test.
   */
  "type": SyntheticsBasicAuthOauthClientType;

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
      baseName: "accessTokenUrl",
      type: "string",
      required: true,
    },
    audience: {
      baseName: "audience",
      type: "string",
    },
    clientId: {
      baseName: "clientId",
      type: "string",
      required: true,
    },
    clientSecret: {
      baseName: "clientSecret",
      type: "string",
      required: true,
    },
    resource: {
      baseName: "resource",
      type: "string",
    },
    scope: {
      baseName: "scope",
      type: "string",
    },
    tokenApiAuthentication: {
      baseName: "tokenApiAuthentication",
      type: "SyntheticsBasicAuthOauthTokenApiAuthentication",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SyntheticsBasicAuthOauthClientType",
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
    return SyntheticsBasicAuthOauthClient.attributeTypeMap;
  }

  public constructor() {}
}

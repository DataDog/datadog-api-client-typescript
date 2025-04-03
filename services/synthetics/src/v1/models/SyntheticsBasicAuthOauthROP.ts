import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsBasicAuthOauthROPType } from "./SyntheticsBasicAuthOauthROPType";
import { SyntheticsBasicAuthOauthTokenApiAuthentication } from "./SyntheticsBasicAuthOauthTokenApiAuthentication";

/**
 * Object to handle `oauth rop` authentication when performing the test.
 */
export class SyntheticsBasicAuthOauthROP {
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
  "clientId"?: string;
  /**
   * Client secret to use when performing the authentication.
   */
  "clientSecret"?: string;
  /**
   * Password to use when performing the authentication.
   */
  "password": string;
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
  "type": SyntheticsBasicAuthOauthROPType;
  /**
   * Username to use when performing the authentication.
   */
  "username": string;
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
    },
    clientSecret: {
      baseName: "clientSecret",
      type: "string",
    },
    password: {
      baseName: "password",
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
      type: "SyntheticsBasicAuthOauthROPType",
      required: true,
    },
    username: {
      baseName: "username",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsBasicAuthOauthROP.attributeTypeMap;
  }

  public constructor() {}
}

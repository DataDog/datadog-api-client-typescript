/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBasicAuthOauthROPType } from "./SyntheticsBasicAuthOauthROPType";
import { SyntheticsBasicAuthOauthTokenApiAuthentication } from "./SyntheticsBasicAuthOauthTokenApiAuthentication";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
  "type"?: SyntheticsBasicAuthOauthROPType;
  /**
   * Username to use when performing the authentication.
   */
  "username": string;

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
    },
    username: {
      baseName: "username",
      type: "string",
      required: true,
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

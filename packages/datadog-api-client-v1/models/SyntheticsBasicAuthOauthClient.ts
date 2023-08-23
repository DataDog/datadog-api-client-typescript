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
  "type"?: SyntheticsBasicAuthOauthClientType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accessTokenUrl: {
      type: "string",
      required: true,
    },
    audience: {
      type: "string",
    },
    clientId: {
      type: "string",
      required: true,
    },
    clientSecret: {
      type: "string",
      required: true,
    },
    resource: {
      type: "string",
    },
    scope: {
      type: "string",
    },
    tokenApiAuthentication: {
      type: "SyntheticsBasicAuthOauthTokenApiAuthentication",
      required: true,
    },
    type: {
      type: "SyntheticsBasicAuthOauthClientType",
    },
  };
}

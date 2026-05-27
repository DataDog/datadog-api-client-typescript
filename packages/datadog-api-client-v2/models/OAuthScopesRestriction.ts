/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OAuthOidcScope } from "./OAuthOidcScope";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Allowlist of OIDC and permission scopes enforced for the OAuth2 client.
 */
export class OAuthScopesRestriction {
  /**
   * OIDC scopes the client is restricted to.
   */
  "oidcScopes": Array<OAuthOidcScope>;
  /**
   * Datadog permission scopes the client is restricted to.
   */
  "permissionScopes": Array<string>;

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
    oidcScopes: {
      baseName: "oidc_scopes",
      type: "Array<OAuthOidcScope>",
      required: true,
    },
    permissionScopes: {
      baseName: "permission_scopes",
      type: "Array<string>",
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
    return OAuthScopesRestriction.attributeTypeMap;
  }

  public constructor() {}
}

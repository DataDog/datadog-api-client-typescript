/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OAuthOidcScope } from "./OAuthOidcScope";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an upsert OAuth2 scopes restriction request.
 */
export class UpsertOAuthScopesRestrictionDataAttributes {
  /**
   * OIDC scopes the client is allowed to request.
   */
  "oidcScopes"?: Array<OAuthOidcScope>;
  /**
   * Datadog permission scopes the client is allowed to request.
   * Each value must be a valid permission name.
   */
  "permissionScopes"?: Array<string>;

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
    },
    permissionScopes: {
      baseName: "permission_scopes",
      type: "Array<string>",
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
    return UpsertOAuthScopesRestrictionDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}

import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OAuthScopesRestriction } from "./OAuthScopesRestriction";

/**
 * Attributes of an OAuth2 client scopes restriction.
 */
export class OAuthScopesRestrictionResponseAttributes {
  /**
   * Permission scopes automatically required for this client (for example, mobile-app permission scopes).
   * Returns `null` when no scopes are required.
   */
  "requiredPermissionScopes": Array<string> | null;
  /**
   * Allowlist of OIDC and permission scopes enforced for the OAuth2 client.
   */
  "scopesRestriction": OAuthScopesRestriction | null;
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
    requiredPermissionScopes: {
      baseName: "required_permission_scopes",
      type: "Array<string>",
      required: true,
    },
    scopesRestriction: {
      baseName: "scopes_restriction",
      type: "OAuthScopesRestriction",
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
    return OAuthScopesRestrictionResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}

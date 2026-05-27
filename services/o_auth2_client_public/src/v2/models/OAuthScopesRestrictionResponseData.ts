import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OAuthScopesRestrictionResponseAttributes } from "./OAuthScopesRestrictionResponseAttributes";
import { OAuthScopesRestrictionType } from "./OAuthScopesRestrictionType";

/**
 * Data object of an OAuth2 client scopes restriction response.
 */
export class OAuthScopesRestrictionResponseData {
  /**
   * Attributes of an OAuth2 client scopes restriction.
   */
  "attributes": OAuthScopesRestrictionResponseAttributes;
  /**
   * UUID of the OAuth2 client this restriction applies to.
   */
  "id": string;
  /**
   * JSON:API resource type for an OAuth2 client scopes restriction.
   */
  "type": OAuthScopesRestrictionType;
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
    attributes: {
      baseName: "attributes",
      type: "OAuthScopesRestrictionResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "OAuthScopesRestrictionType",
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
    return OAuthScopesRestrictionResponseData.attributeTypeMap;
  }

  public constructor() {}
}

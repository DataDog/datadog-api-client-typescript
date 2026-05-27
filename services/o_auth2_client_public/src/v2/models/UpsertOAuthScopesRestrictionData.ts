import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpsertOAuthScopesRestrictionDataAttributes } from "./UpsertOAuthScopesRestrictionDataAttributes";
import { UpsertOAuthScopesRestrictionType } from "./UpsertOAuthScopesRestrictionType";

/**
 * Data object of an upsert OAuth2 scopes restriction request.
 */
export class UpsertOAuthScopesRestrictionData {
  /**
   * Attributes of an upsert OAuth2 scopes restriction request.
   */
  "attributes"?: UpsertOAuthScopesRestrictionDataAttributes;
  /**
   * JSON:API resource type for an upsert OAuth2 client scopes restriction request.
   */
  "type": UpsertOAuthScopesRestrictionType;
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
      type: "UpsertOAuthScopesRestrictionDataAttributes",
    },
    type: {
      baseName: "type",
      type: "UpsertOAuthScopesRestrictionType",
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
    return UpsertOAuthScopesRestrictionData.attributeTypeMap;
  }

  public constructor() {}
}

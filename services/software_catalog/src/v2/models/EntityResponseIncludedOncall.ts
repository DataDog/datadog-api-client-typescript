import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityResponseIncludedOncallType } from "./EntityResponseIncludedOncallType";
import { EntityResponseIncludedRelatedOncallAttributes } from "./EntityResponseIncludedRelatedOncallAttributes";

/**
 * Included oncall.
 */
export class EntityResponseIncludedOncall {
  /**
   * Included related oncall attributes.
   */
  "attributes"?: EntityResponseIncludedRelatedOncallAttributes;
  /**
   * Oncall ID.
   */
  "id"?: string;
  /**
   * Oncall type.
   */
  "type"?: EntityResponseIncludedOncallType;
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
      type: "EntityResponseIncludedRelatedOncallAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "EntityResponseIncludedOncallType",
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
    return EntityResponseIncludedOncall.attributeTypeMap;
  }

  public constructor() {}
}

import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipItem } from "./RelationshipItem";

/**
 * Entity to raw schema relationship.
 */
export class EntityToRawSchema {
  /**
   * Relationship entry.
   */
  "data"?: RelationshipItem;
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
    data: {
      baseName: "data",
      type: "RelationshipItem",
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
    return EntityToRawSchema.attributeTypeMap;
  }

  public constructor() {}
}

import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipItem } from "./RelationshipItem";

/**
 * Entity to detail schema relationship.
 */
export class EntityToSchema {
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityToSchema.attributeTypeMap;
  }

  public constructor() {}
}

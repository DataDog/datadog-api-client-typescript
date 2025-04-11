import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipItem } from "./RelationshipItem";

/**
 * Entity to oncalls relationship.
 */
export class EntityToOncalls {
  /**
   * Relationships.
   */
  "data"?: Array<RelationshipItem>;
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
      type: "Array<RelationshipItem>",
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
    return EntityToOncalls.attributeTypeMap;
  }

  public constructor() {}
}

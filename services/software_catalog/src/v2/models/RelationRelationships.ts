import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationToEntity } from "./RelationToEntity";

/**
 * Relation relationships.
 */
export class RelationRelationships {
  /**
   * Relation to entity.
   */
  "fromEntity"?: RelationToEntity;
  /**
   * Relation to entity.
   */
  "toEntity"?: RelationToEntity;
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
    fromEntity: {
      baseName: "fromEntity",
      type: "RelationToEntity",
    },
    toEntity: {
      baseName: "toEntity",
      type: "RelationToEntity",
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
    return RelationRelationships.attributeTypeMap;
  }

  public constructor() {}
}

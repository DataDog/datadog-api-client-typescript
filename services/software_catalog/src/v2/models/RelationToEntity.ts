import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityMeta } from "./EntityMeta";
import { RelationshipItem } from "./RelationshipItem";

/**
 * Relation to entity.
 */
export class RelationToEntity {
  /**
   * Relationship entry.
   */
  "data"?: RelationshipItem;
  /**
   * Entity metadata.
   */
  "meta"?: EntityMeta;
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
    meta: {
      baseName: "meta",
      type: "EntityMeta",
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
    return RelationToEntity.attributeTypeMap;
  }

  public constructor() {}
}

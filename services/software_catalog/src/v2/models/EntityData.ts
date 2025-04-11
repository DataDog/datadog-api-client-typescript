import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityAttributes } from "./EntityAttributes";
import { EntityMeta } from "./EntityMeta";
import { EntityRelationships } from "./EntityRelationships";

/**
 * Entity data.
 */
export class EntityData {
  /**
   * Entity attributes.
   */
  "attributes"?: EntityAttributes;
  /**
   * Entity ID.
   */
  "id"?: string;
  /**
   * Entity metadata.
   */
  "meta"?: EntityMeta;
  /**
   * Entity relationships.
   */
  "relationships"?: EntityRelationships;
  /**
   * Entity.
   */
  "type"?: string;
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
      type: "EntityAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    meta: {
      baseName: "meta",
      type: "EntityMeta",
    },
    relationships: {
      baseName: "relationships",
      type: "EntityRelationships",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return EntityData.attributeTypeMap;
  }

  public constructor() {}
}

import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityResponseDataRelationshipsSchemaData } from "./EntityResponseDataRelationshipsSchemaData";

/**
 * Schema relationship linking an entity to its associated schema resource.
 */
export class EntityResponseDataRelationshipsSchema {
  /**
   * Schema relationship data containing the schema resource identifier and type.
   */
  "data": EntityResponseDataRelationshipsSchemaData;
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
      type: "EntityResponseDataRelationshipsSchemaData",
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
    return EntityResponseDataRelationshipsSchema.attributeTypeMap;
  }

  public constructor() {}
}

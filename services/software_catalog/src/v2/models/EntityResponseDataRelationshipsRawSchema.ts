import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityResponseDataRelationshipsRawSchemaData } from "./EntityResponseDataRelationshipsRawSchemaData";

/**
 * Raw schema relationship linking an entity to its raw schema resource.
 */
export class EntityResponseDataRelationshipsRawSchema {
  /**
   * Raw schema relationship data containing the raw schema resource identifier and type.
   */
  "data": EntityResponseDataRelationshipsRawSchemaData;
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
      type: "EntityResponseDataRelationshipsRawSchemaData",
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
    return EntityResponseDataRelationshipsRawSchema.attributeTypeMap;
  }

  public constructor() {}
}

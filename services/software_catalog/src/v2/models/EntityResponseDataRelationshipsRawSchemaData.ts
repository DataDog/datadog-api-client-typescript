import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityResponseDataRelationshipsRawSchemaDataType } from "./EntityResponseDataRelationshipsRawSchemaDataType";

export class EntityResponseDataRelationshipsRawSchemaData {
  "id": string;
  /**
   * Raw schema resource type.
   */
  "type": EntityResponseDataRelationshipsRawSchemaDataType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "EntityResponseDataRelationshipsRawSchemaDataType",
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
    return EntityResponseDataRelationshipsRawSchemaData.attributeTypeMap;
  }

  public constructor() {}
}

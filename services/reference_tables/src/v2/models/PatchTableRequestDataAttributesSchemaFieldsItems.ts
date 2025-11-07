import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReferenceTableSchemaFieldType } from "./ReferenceTableSchemaFieldType";

/**
 * A single field (column) in the reference table schema to be updated. Schema fields cannot be deleted or renamed.
 */
export class PatchTableRequestDataAttributesSchemaFieldsItems {
  /**
   * The field name.
   */
  "name": string;
  /**
   * The field type for reference table schema fields.
   */
  "type": ReferenceTableSchemaFieldType;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ReferenceTableSchemaFieldType",
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
    return PatchTableRequestDataAttributesSchemaFieldsItems.attributeTypeMap;
  }

  public constructor() {}
}

import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableResultV2DataAttributesSchemaFieldsItems } from "./TableResultV2DataAttributesSchemaFieldsItems";

/**
 * Schema defining the structure and columns of the reference table.
 */
export class TableResultV2DataAttributesSchema {
  /**
   * The schema fields.
   */
  "fields": Array<TableResultV2DataAttributesSchemaFieldsItems>;
  /**
   * List of field names that serve as primary keys for the table. Only one primary key is supported, and it is used as an ID to retrieve rows.
   */
  "primaryKeys": Array<string>;
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
    fields: {
      baseName: "fields",
      type: "Array<TableResultV2DataAttributesSchemaFieldsItems>",
      required: true,
    },
    primaryKeys: {
      baseName: "primary_keys",
      type: "Array<string>",
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
    return TableResultV2DataAttributesSchema.attributeTypeMap;
  }

  public constructor() {}
}

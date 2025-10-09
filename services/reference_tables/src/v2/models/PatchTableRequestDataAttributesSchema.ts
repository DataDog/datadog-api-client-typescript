import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchTableRequestDataAttributesSchemaFieldsItems } from "./PatchTableRequestDataAttributesSchemaFieldsItems";

/**
 * The definition of `PatchTableRequestDataAttributesSchema` object.
 */
export class PatchTableRequestDataAttributesSchema {
  /**
   * The `schema` `fields`.
   */
  "fields": Array<PatchTableRequestDataAttributesSchemaFieldsItems>;
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
      type: "Array<PatchTableRequestDataAttributesSchemaFieldsItems>",
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
    return PatchTableRequestDataAttributesSchema.attributeTypeMap;
  }

  public constructor() {}
}
